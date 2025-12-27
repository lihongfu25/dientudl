import { Add01Icon, PlusSignIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Form, Input, Select, Tooltip, Upload, UploadFile } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { TextEditor } from 'src/components';
import { IProduct, ISpecification } from 'src/constants';
import SpecificationItem from '../thong-so-ky-thuat';

type ProductFormRef = {
	getData: () => Promise<any>;
};

interface ProductFormProps {
	form: FormInstance<Partial<IProduct>>;

	product?: IProduct;

	categories: Array<Record<string, any>>;
}

const ProductForm = forwardRef<ProductFormRef, ProductFormProps>(({ form, product, categories }, ref) => {
	useImperativeHandle(ref, () => ({
		async getData() {
			const _specifications = specifications.filter((specification) => specification.key && specification.value);
			form.setFieldsValue({
				images: fileUploading,
				description,
				specifications: _specifications,
			});

			const values = await form.validateFields();

			return {
				...values,
				id: product?.id,
			};
		},

		setData: (data: IProduct) => {
			if (!data) return;
			form.setFieldsValue({
				...data,
			});
			setFileList(data.images.map((image: string | File | UploadFile) => ({ url: image, status: 'done' } as UploadFile)));
			setDescription(data.description);
			setSpecifications(data.specifications);
		},
	}));

	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [fileUploading, setFileUploading] = useState<File[]>([]);
	const [description, setDescription] = useState<string>('');
	const [specifications, setSpecifications] = useState<ISpecification[]>([{ key: '', value: '', showInCard: false }]);

	const isValidFile = (file: File) => {
		const validTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
		const maxFileSizeMB = 5;

		if (!validTypes.includes(file.type)) {
			form.setFields([
				{
					name: 'images',
					errors: ['Định dạng file bạn vừa chọn không được hỗ trợ. Vui lòng chọn file có định dạng: .jpg, .jpeg, .png, .webp'],
				},
			]);
			return false;
		}

		if (file.size / 1024 / 1024 > maxFileSizeMB) {
			form.setFields([
				{
					name: 'images',
					errors: ['File tải lên vượt quá 5MB. Vui lòng chọn file nhỏ hơn hoặc bằng 5MB.'],
				},
			]);
			return false;
		}

		form.setFields([
			{
				name: 'images',
				errors: [],
			},
		]);
		return true;
	};

	const onFileUpload = (info: any) => {
		const { file, fileList: infoFileList } = info;
		if (!isValidFile(file)) return;

		if (file.uid === infoFileList[infoFileList.length - 1].uid) {
			const _fileUploading: File[] = infoFileList.filter((file: any) => isValidFile(file)).map((file: any) => file as File);
			setFileUploading([...fileUploading, ..._fileUploading]);
			const _fileList = infoFileList.filter((file: any) => isValidFile(file)).map((file: any) => ({ ...file, status: 'done', url: URL.createObjectURL(file) }));
			setFileList([...fileList, ..._fileList]);
		}
		return false;
	};

	useEffect(() => {
		form.setFieldsValue({ images: fileList });
	}, [fileList, form]);

	const handleSpecificationChange = (event: any, index: number) => {
		const newData = [...specifications];
		newData[index] = event;
		setSpecifications(newData);
	};

	const handleSpecificationDelete = (index: number) => {
		const newData = [...specifications];
		newData.splice(index, 1);
		setSpecifications(newData);
	};

	return (
		<Form form={form} className='w-full' layout='vertical'>
			<div className='grid grid-cols-3 gap-4'>
				<div className=''>
					<Form.Item name='name' label='Tên sản phẩm' className='mb-0' rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}>
						<Input type='text' placeholder='Nhập tên sản phẩm' className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm' allowClear />
					</Form.Item>
				</div>
				<div className=''>
					<Form.Item name='code' label='Mã sản phẩm' className='mb-0'>
						<Input type='text' placeholder='Nhập mã sản phẩm' className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm' allowClear />
					</Form.Item>
				</div>
				<div className=''>
					<Form.Item name='categoryId' label='Danh mục' className='mb-0' rules={[{ required: true, message: 'Vui lòng chọn danh mục sản phẩm' }]}>
						<Select className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm' placeholder='Chọn danh mục' allowClear>
							{categories.map((category) => (
								<Select.Option key={category.id} value={category.id}>
									{category.name}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				</div>
				<div className='hidden'>
					<Form.Item name='thumbnail' label=''></Form.Item>
				</div>
				<div className='col-span-3'>
					<Form.Item
						name='images'
						label='Hình ảnh'
						required
						rules={[
							{
								validator: (_, value) => {
									if (Array.isArray(fileList) && fileList.length > 0) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('Vui lòng tải lên ít nhất một hình ảnh'));
								},
							},
						]}
					>
						<Upload
							accept='.jpg,.jpeg,.png,.webp'
							listType='picture-card'
							fileList={fileList}
							multiple={true}
							beforeUpload={(file, fileList) => onFileUpload({ file, fileList })}
							onRemove={(file) => {
								setFileList(fileList.filter((item) => item.uid !== file.uid));
								return true;
							}}
						>
							<div className='flex flex-col items-center'>
								<HugeiconsIcon icon={Add01Icon} />
								<span>Tải lên</span>
							</div>
						</Upload>
					</Form.Item>
				</div>
				<div className='col-span-3'>
					<Form.Item name='description' label='Mô tả sản phẩm' className='mb-0' rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm' }]}>
						<TextEditor value={description} onChange={setDescription} />
					</Form.Item>
				</div>
				<div className='col-span-3'>
					<Form.Item name='specifications' label='Thông số kỹ thuật' className='mb-0'>
						{specifications.map((specification, index) => (
							<SpecificationItem key={index} index={index} data={specification} allowDelete={specifications.length > 1} onChange={handleSpecificationChange} onDelete={handleSpecificationDelete} />
						))}
					</Form.Item>
					<div className='flex justify-center'>
						<Tooltip title='Thêm thông số kỹ thuật'>
							<button
								type='button'
								onClick={() => setSpecifications([...specifications, { key: '', value: '', showInCard: false }])}
								tabIndex={-1}
								className='group border border-black rounded-full w-7 h-7 p-1 hover:border-sky-500 hover:text-sky-500 hover:bg-sky-50'
							>
								<HugeiconsIcon icon={PlusSignIcon} size={18} strokeWidth={1} />
							</button>
						</Tooltip>
					</div>
				</div>
			</div>
		</Form>
	);
});

export default ProductForm;
