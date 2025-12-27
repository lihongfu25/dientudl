import { Delete02Icon, PencilEdit02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Form, Image, Input, Modal, Table } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { doc, updateDoc } from 'firebase/firestore';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from 'src/components';
import { showToast } from 'src/config';
import { DEFAULT_PAGE_SIZE, IProduct, SearchParams } from 'src/constants';
import { paginate } from 'src/helpers';
import { useCategories, useDebounce, useFirebase, useProducts } from 'src/hooks';
import { DASHBOARD_ROUTER } from 'src/routers';

const QuanLySanPham = () => {
	const [breadcrumbs] = useState([
		{ name: 'Quản lý', path: '/quan-ly', active: false },
		{ name: 'Quản lý Sản phẩm', path: '/quan-ly/san-pham', active: true },
	]);
	const [searchForm] = useForm<SearchParams>();
	const [keyword, setKeyword] = useState('');
	const { categories } = useCategories();
	const { products, loading } = useProducts({ categories });
	const [dataSource, setDataSource] = useState<Record<string, any>[]>([]);
	const [selectedItem, setSelectedItem] = useState<Record<string, any> | null>(null);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [loadingAction, setLoadingAction] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: DEFAULT_PAGE_SIZE,
	});

	const { db } = useFirebase();

	const debouncedKeyword = useDebounce(keyword, 500);

	const navigate = useNavigate();

	const handleClickEdit = useCallback((item: Record<string, any>) => {
		navigate(DASHBOARD_ROUTER.PRODUCT_DETAILS(item.id));
	}, []);
	const handleClickDelete = useCallback((item: Record<string, any>) => {
		setSelectedItem(item);
		setOpenDeleteModal(true);
	}, []);

	const columns = useMemo(() => {
		return [
			{
				title: 'Mã sản phẩm',
				dataIndex: 'code',
				key: 'code',
				width: '10%',
			},
			{
				title: 'Sản phẩm',
				dataIndex: 'name',
				key: 'name',
				width: '27.5%',
				render: (value: string, record: Record<string, any>) => (
					<div className='flex gap-2'>
						<div className=''>
							<Image width={60} height={60} src={record.thumbnail} />
						</div>
						<div className=''>{value}</div>
					</div>
				),
			},
			{
				title: 'Danh mục',
				dataIndex: ['category', 'name'],
				key: 'categoryId',
				width: '15%',
			},
			{
				title: 'Thông số kỹ thuật',
				dataIndex: 'specifications',
				key: 'specifications',
				width: '27.5%',
				render: (value: Record<string, any>[]) => value.map((specification: Record<string, any>) => `${specification.key}: ${specification.value}`).join(', '),
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

	useEffect(() => {
		let _data = products;
		if (debouncedKeyword.trim()) {
			const lowerKeyword = debouncedKeyword.toLowerCase();
			_data = products.filter((item: any) => item.name?.toLowerCase().includes(lowerKeyword) || item.code?.toLowerCase().includes(lowerKeyword));
		}
		const { data, total } = paginate(_data, pagination);
		setDataSource(data);
		setTotalPages(total);
	}, [debouncedKeyword, products, pagination]);

	const handleClickCreate = () => {
		navigate(DASHBOARD_ROUTER.PRODUCT_CREATE);
	};

	const onDelete = () => {
		setLoadingAction(true);
		try {
			if (!db) throw new Error('Firestore chưa khởi tạo');
			const docRef = doc(db, 'product', selectedItem!.id);
			updateDoc(docRef, {
				isDeleted: true,
				deletedAt: Date.now(),
			});
			showToast('Xóa sản phẩm thành công!', 'success');
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
					<h3 className='text-2xl'>Quản lý sản phẩm</h3>
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
				Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa sản phẩm <strong>{selectedItem?.name}</strong> không?
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

export default QuanLySanPham;
