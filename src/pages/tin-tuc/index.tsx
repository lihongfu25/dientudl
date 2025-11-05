import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IBreadcrumb } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';

const TinTuc = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Tin tức', path: '/tin-tuc', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	return (
		<div className='mb-20 leading-[24px]'>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>Tin tức</h1>
				<p className='italic text-[#3a3a3a]'>Đang cập nhật...</p>
			</div>
		</div>
	);
};

export default TinTuc;
