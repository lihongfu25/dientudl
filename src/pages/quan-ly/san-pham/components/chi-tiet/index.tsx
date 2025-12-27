import { useForm } from 'antd/es/form/Form';
import { useEffect, useRef, useState } from 'react';
import { Breadcrumb, Loading } from 'src/components';
import { IProduct } from 'src/constants';
import { useCategories, useFirebase, useProducts } from 'src/hooks';
import ProductForm from '../form';
import { uploadMultipleFiles } from 'src/services';
import { addDoc, collection } from 'firebase/firestore';
import { showToast } from 'src/config';
import { useNavigate, useParams } from 'react-router-dom';
import { DASHBOARD_ROUTER } from 'src/routers';
import { Spin } from 'antd';

const DetailProductComponent = () => {
	const [breadcrumbs] = useState([
		{ name: 'Quản lý', path: '/quan-ly', active: false },
		{ name: 'Quản lý Sản phẩm', path: '/quan-ly/san-pham', active: false },
		{ name: 'Chi tiết', path: '/quan-ly/san-pham/chi-tiet', active: true },
	]);
	const { categories } = useCategories();
	const { loading: loadingProduct, findById } = useProducts({ categories });

	const [form] = useForm<Partial<IProduct>>();
	const [loading, setLoading] = useState<boolean>(false);
	const [product, setProduct] = useState<IProduct | undefined>();
	const { db } = useFirebase();
	const navigate = useNavigate();
	const formRef = useRef<any>(null);

	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const product = findById(id);
			setProduct(product);
			formRef.current?.setData(product);
		}
	}, [id, findById]);

	const onCreate = async () => {
		setLoading(true);
		try {
			if (!db) throw new Error('Firestore chưa khởi tạo');
			const { name, code, categoryId, images, description, specifications } = await formRef.current?.getData();
			const _images = await uploadMultipleFiles(images);
			await addDoc(collection(db, 'product'), {
				name,
				code: code || null,
				categoryId,
				thumbnail: _images[0],
				images: _images,
				description,
				specifications,
				isDeleted: false,
				createdAt: Date.now(),
				updatedAt: Date.now(),
				deletedAt: null,
			});
			showToast('Tạo mới sản phẩm thành công!', 'success');
			navigate(DASHBOARD_ROUTER.PRODUCT);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Spin spinning={loadingProduct}>
				<div className='flex flex-col'>
					<Breadcrumb breadcrumbs={breadcrumbs} />
					<div className='-mt-4 mb-8'>
						<h3 className='text-2xl'>Chi tiết sản phẩm</h3>
					</div>
					<div className='flex justify-end gap-4 w-full mb-8'>
						<button
							className='min-w-[100px] px-4 py-[7px] border border-[#2074be] hover:bg-sky-600 text-[#2074be] hover:text-white rounded-md flex justify-center items-center transition-all duration-300 ease-in-out'
							disabled={loading}
							onClick={() => navigate(DASHBOARD_ROUTER.PRODUCT)}
						>
							Trở về
						</button>
						<button className='min-w-[100px] px-4 py-[7px] bg-[#2074be] hover:bg-sky-600 text-white rounded-md flex justify-center items-center' disabled={loading}>
							{loading ? <Loading /> : 'Lưu'}
						</button>
					</div>
					<div className='w-full mb-8'>
						<ProductForm ref={formRef} form={form} product={product} categories={categories}></ProductForm>
					</div>
				</div>
			</Spin>
		</>
	);
};

export default DetailProductComponent;
