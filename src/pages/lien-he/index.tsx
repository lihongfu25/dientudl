import { Directions01Icon, Location03Icon, SentIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { address, IBreadcrumb, phone, workingTime } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';
import { getTel } from 'src/helpers';

const coordinates = `20°57'23.8"N 106°15'04.9"E`;

const LienHe = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Liên hệ', path: '/lien-he', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	return (
		<div className='leading-[24px]'>
			<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>Liên Hệ</h1>
			<div className='grid grid-cols-3 gap-6 mb-12'>
				<div className=''>
					<div className='flex justify-center items-center gap-2 p-4 rounded-t-xl text-white bg-[#2074be]'>
						<HugeiconsIcon icon={Location03Icon} size={20} />
						<span className='text-base font-semibold'>Địa chỉ liên hệ</span>
					</div>
					<div className='border-x border-b border-[#eaeaea] rounded-b-lg p-4 flex flex-col gap-1'>
						<div className=''>
							<span className='font-semibold text-[#2074be]'>Cửa hàng</span>
						</div>
						<div className=''>
							<span className='font-semibold'>Địa chỉ:</span>
							<span className='ms-[6px]'>{address}</span>
						</div>
						<div className=''>
							<span className='font-semibold'>Thời gian làm việc:</span>
							<span className='ms-[6px]'>{workingTime}</span>
						</div>
						<div className=''>
							<span className='font-semibold'>Điện thoại:</span>
							<a href={`tel:${getTel()}`} className='ms-[6px]'>
								{phone}
							</a>
						</div>
						<div className='flex gap-1'>
							<a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coordinates)}`} target='_blank' rel='noreferrer noopener' className='flex gap-1'>
								<HugeiconsIcon icon={Directions01Icon} size={16} color='#2074be' />
								<span className='text-[#2074be]'>Chỉ đường</span>
							</a>
						</div>
					</div>
				</div>
				<div className='col-span-2'>
					<div className='w-full h-full rounded-xl overflow-hidden'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d827.6025636109068!2d106.25092879026853!3d20.95669305641783!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU3JzIzLjgiTiAxMDbCsDE1JzA0LjkiRQ!5e1!3m2!1svi!2sus!4v1762366859506!5m2!1svi!2sus'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							title='dl-map'
						></iframe>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-5 gap-10 mb-20'>
				<div className='col-start-2 col-span-3'>
					<div className='flex flex-col'>
						<div className='flex justify-center'>
							<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>Liên hệ tư vấn báo giá</h1>
						</div>
						<div className='grid grid-cols-2 gap-6'>
							<div className='col-span-2'>
								<div className='flex flex-col'>
									<label htmlFor='fullname' className='mb-2'>
										Họ và tên <span className='text-red-500'>*</span>
									</label>
									<input id='fullname' type='text' className='border border-[#eaeaea] py-[6px] px-3 focus:outline-none rounded-md text-base' />
								</div>
							</div>
							<div className=''>
								<div className='flex flex-col'>
									<label htmlFor='fullname' className='mb-2'>
										Email <span className='text-red-500'>*</span>
									</label>
									<input id='fullname' type='text' className='border border-[#eaeaea] py-[6px] px-3 focus:outline-none rounded-md text-base' />
								</div>
							</div>
							<div className=''>
								<div className='flex flex-col'>
									<label htmlFor='fullname' className='mb-2'>
										Số điện thoại <span className='text-red-500'>*</span>
									</label>
									<input id='fullname' type='text' className='border border-[#eaeaea] py-[6px] px-3 focus:outline-none rounded-md text-base' />
								</div>
							</div>
							<div className='col-span-2'>
								<div className='flex flex-col'>
									<label htmlFor='fullname' className='mb-2'>
										Nội dung <span className='text-red-500'>*</span>
									</label>
									<textarea id='fullname' rows={5} className='border border-[#eaeaea] py-[6px] px-3 focus:outline-none rounded-md text-base' />
								</div>
							</div>
							<div className='col-span-2'>
								<div className='flex justify-center'>
									<button className='flex gap-2 items-center bg-[#2074be] text-white px-10 py-2 rounded-md'>
										<HugeiconsIcon icon={SentIcon} size={20} />
										<span className='text-base font-semibold'>Gửi đi</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LienHe;
