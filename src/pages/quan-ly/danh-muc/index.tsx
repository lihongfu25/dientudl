import { Delete02Icon, PencilEdit02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Form, Input, Modal, Select, Table } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breadcrumb, Loading } from 'src/components';
import { showToast } from 'src/config';
import { DEFAULT_PAGE_SIZE, SearchParams } from 'src/constants';
import { generateSlug, paginate } from 'src/helpers';
import { useCategories, useDebounce, useFirebase } from 'src/hooks';

interface CategoryForm {
	name: string;
	tag: string;
	parentId?: string;
	sortOrder?: string;
}

const QuanLyDanhMuc = () => {
	const [breadcrumbs] = useState([
		{ name: 'Quản lý', path: '/quan-ly', active: false },
		{ name: 'Quản lý Danh mục', path: '/quan-ly/danh-muc', active: true },
	]);
	const [searchForm] = useForm<SearchParams>();
	const [keyword, setKeyword] = useState('');
	const { categories, loading, isCategoryExists } = useCategories();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loadingAction, setLoadingAction] = useState(false);
	const [form] = useForm<CategoryForm>();
	const [selectedItem, setSelectedItem] = useState<Record<string, any> | null>(null);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [dataSource, setDataSource] = useState<Record<string, any>[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: DEFAULT_PAGE_SIZE,
	});

	const { db } = useFirebase();

	const handleClickEdit = useCallback(
		(item: Record<string, any>) => {
			form.resetFields();
			setIsModalOpen(true);
			setSelectedItem(item);
			form.setFieldsValue({
				name: item.name,
				tag: item.tag,
				parentId: item.parentId,
				sortOrder: item.sortOrder ? String(item.sortOrder) : undefined,
			});
		},
		[form],
	);

	const handleClickDelete = useCallback((item: Record<string, any>) => {
		setSelectedItem(item);
		setOpenDeleteModal(true);
	}, []);

	const columns = useMemo(() => {
		return [
			{
				title: '#',
				dataIndex: 'id',
				key: '#',
				width: '15%',
			},
			{
				title: 'Tên danh mục',
				dataIndex: 'name',
				key: 'name',
				width: '27.5%',
			},
			{
				title: 'Danh mục cha',
				dataIndex: ['parentCategory', 'name'],
				key: 'parentId',
				width: '27.5%',
			},
			{
				title: 'Ngày tạo',
				dataIndex: 'createdAt',
				key: 'createdAt',
				width: '15%',

				render: (value: number) =>
					new Date(value).toLocaleString('vi-VN', {
						timeZone: 'Asia/Ho_Chi_Minh',
					}),
			},
			{
				title: 'Thao tác',
				dataIndex: 'id',
				key: 'action',
				width: '15%',
				align: 'center' as const,
				render: (id: string, record: Record<string, any>) => (
					<div className='flex gap-4 justify-center'>
						<button className='text-[#2074be]' onClick={() => handleClickEdit(record)}>
							<HugeiconsIcon icon={PencilEdit02Icon} />
						</button>
						<button className='text-red-500' onClick={() => handleClickDelete(record)}>
							<HugeiconsIcon icon={Delete02Icon} />
						</button>
					</div>
				),
			},
		];
	}, [handleClickEdit, handleClickDelete]);

	const debouncedKeyword = useDebounce(keyword, 500);

	useEffect(() => {
		let _data = categories;
		if (debouncedKeyword.trim()) {
			const lowerKeyword = debouncedKeyword.toLowerCase();
			_data = categories.filter((item: any) => item.name?.toLowerCase().includes(lowerKeyword) || item.slug?.toLowerCase().includes(lowerKeyword));
		}
		const { data, total } = paginate(_data, pagination);
		setDataSource(data);
		setTotalPages(total);
	}, [debouncedKeyword, categories, pagination]);

	const handleClickCreate = () => {
		form.resetFields();
		setSelectedItem(null);
		setIsModalOpen(true);
	};

	const handleSubmit = async ({ name, tag, parentId, sortOrder }: CategoryForm) => {
		setLoadingAction(true);
		try {
			if (!db) throw new Error('Firestore chưa khởi tạo');
			if (selectedItem) {
				const docRef = doc(db, 'category', selectedItem.id);
				await updateDoc(docRef, {
					name,
					tag,
					parentId: parentId || null,
					sortOrder: sortOrder ? Number.parseInt(sortOrder) : null,
					updatedAt: Date.now(),
				});
				showToast('Cập nhật danh mục thành công!', 'success');
			} else {
				await addDoc(collection(db, 'category'), {
					name,
					tag,
					parentId: parentId || null,
					isDeleted: false,
					sortOrder: sortOrder ? Number.parseInt(sortOrder) : null,
					createdAt: Date.now(),
					updatedAt: Date.now(),
					deletedAt: null,
				});
				showToast('Tạo mới danh mục thành công!', 'success');
			}
			setIsModalOpen(false);
			form.resetFields();
		} catch (error: any) {
			console.error(error);
			switch (error.code) {
				default:
					showToast('Có lỗi xảy ra trong quá trình tạo mới danh mục', 'error');
					break;
			}
		} finally {
			setLoadingAction(false);
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		form.resetFields();
	};

	const autoSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const slug = generateSlug(value);
		form.setFieldValue('tag', slug);
	};

	const checkBeforeDelete = () => {
		const hasChild = categories.some((item) => item.parentId === selectedItem?.id);
		return !hasChild;
	};

	const onDelete = () => {
		if (!checkBeforeDelete()) {
			showToast('Không thể xóa danh mục này vì vẫn còn danh mục con tồn tại!', 'error');
			setOpenDeleteModal(false);
			setSelectedItem(null);
			return;
		}

		setLoadingAction(true);
		try {
			if (!db) throw new Error('Firestore chưa khởi tạo');
			const docRef = doc(db, 'category', selectedItem!.id);
			updateDoc(docRef, {
				isDeleted: true,
				deletedAt: Date.now(),
			});
			showToast('Xóa danh mục thành công!', 'success');
		} catch (error) {
		} finally {
			setOpenDeleteModal(false);
			setSelectedItem(null);
			setLoadingAction(false);
		}
	};

	const onCancelDelete = () => {
		setOpenDeleteModal(false);
		setSelectedItem(null);
	};

	return (
		<>
			<div className='flex flex-col'>
				<Breadcrumb breadcrumbs={breadcrumbs} />
				<div className='-mt-4 mb-8'>
					<h3 className='text-2xl'>Quản lý danh mục</h3>
				</div>
				<div className='flex justify-between w-full mb-8'>
					<Form form={searchForm} className='w-[20%]'>
						<Form.Item name='keyword' label='' className='mb-0'>
							<Input
								type='text'
								placeholder='Nhập từ khóa tìm kiếm'
								className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm'
								onPressEnter={() => {
									const value = searchForm.getFieldValue('keyword');
									setKeyword(value?.trim() || '');
								}}
								allowClear
								onClear={() => {
									const value = searchForm.getFieldValue('keyword');
									setKeyword(value?.trim() || '');
								}}
							/>
						</Form.Item>
					</Form>
					<div className=''>
						<button className='min-w-[100px] px-4 py-[8px] bg-[#2074be] hover:bg-sky-600 text-white rounded-md flex justify-center items-center' onClick={handleClickCreate}>
							Tạo
						</button>
					</div>
				</div>
				<div className=''>
					<Table
						dataSource={dataSource}
						columns={columns}
						loading={loading}
						pagination={{
							current: pagination.current,
							pageSize: pagination.pageSize,
							total: totalPages,
							showSizeChanger: false,
						}}
						onChange={(pagination) => {
							setPagination({
								current: pagination.current!,
								pageSize: pagination.pageSize!,
							});
						}}
					/>
				</div>
			</div>
			<Modal title={<div className='text-lg'>{selectedItem ? 'Sửa' : 'Thêm'} danh mục</div>} closable={false} footer={null} open={isModalOpen} onCancel={handleCancel}>
				<Form form={form} layout='vertical' onFinish={handleSubmit} className='mt-3'>
					<Form.Item
						label='Tên danh mục'
						name='name'
						validateDebounce={500}
						rules={[
							{ required: true, message: 'Vui lòng nhập tên danh mục' },
							{
								validator: (_, value) => {
									if (!value) return Promise.resolve();

									const isExist = isCategoryExists('name', value, selectedItem ? selectedItem.id : undefined);

									if (isExist) {
										return Promise.reject(new Error('Tên danh mục đã tồn tại. Lưu ý tên danh mục không phân biệt hoa thường.'));
									}

									return Promise.resolve();
								},
							},
						]}
					>
						<Input type='text' className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm' onChange={autoSlug} />
					</Form.Item>
					<Form.Item label='Tag' name='tag' rules={[{ required: true, message: 'Vui lòng nhập tag danh mục' }]}>
						<Input type='text' className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm' disabled />
					</Form.Item>
					<Form.Item label='Danh mục cha' name='parentId'>
						<Select className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm' placeholder='Chọn danh mục' allowClear>
							{categories
								.filter((item) => !selectedItem || selectedItem.id !== item.id)
								.map((category) => (
									<Select.Option key={category.id} value={category.id}>
										{category.name}
									</Select.Option>
								))}
						</Select>
					</Form.Item>
					<Form.Item label='Số thứ tự' name='sortOrder'>
						<Input type='text' className='h-[36px] w-full px-3 py-2 border rounded-md focus:outline-none sm:text-sm' />
					</Form.Item>
					<div className='flex justify-center gap-4'>
						<button type='button' onClick={handleCancel} className='min-w-[100px] px-4 py-[6px] border rounded-md hover:border-[#2074be] hover:text-[#2074be]'>
							Hủy
						</button>
						<button type='submit' className='min-w-[100px] px-4 py-[6px] bg-[#2074be] hover:bg-sky-600 text-white rounded-md flex justify-center items-center' disabled={loadingAction}>
							{loadingAction ? <Loading /> : 'Lưu'}
						</button>
					</div>
				</Form>
			</Modal>
			<Modal
				title={<div className='text-lg'>Xác nhận</div>}
				okText='Xóa'
				cancelText='Hủy'
				okButtonProps={{ danger: true }}
				open={openDeleteModal}
				onOk={() => onDelete()}
				onCancel={() => onCancelDelete()}
				footer={null}
			>
				Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa danh mục <strong>{selectedItem?.name}</strong> không?
				<div className='flex justify-center gap-4 mt-4'>
					<button onClick={onCancelDelete} className='min-w-[100px] px-4 py-[6px] border rounded-md hover:border-[#2074be] hover:text-[#2074be]'>
						Hủy
					</button>
					<button onClick={onDelete} className='min-w-[100px] px-4 py-[6px] bg-red-500 hover:bg-red-600 text-white rounded-md flex justify-center items-center' disabled={loadingAction}>
						{loadingAction ? <div className='h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin' /> : 'Tiếp tục'}
					</button>
				</div>
			</Modal>
		</>
	);
};

export default QuanLyDanhMuc;
