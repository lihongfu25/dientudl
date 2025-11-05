import { Call02Icon, Location03Icon, Mail01Icon, MessengerIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from 'react-router-dom';
import { address, email, phone, workingTime } from 'src/constants';
import { getTel } from 'src/helpers';

const Footer = () => {
	return (
		<div className='bg-[#27353e] text-white'>
			<div className='container'>
				<div className='py-10'>
					<div className='grid grid-cols-4 gap-16'>
						<div className=''>
							<div className=''>
								<Link to='/' className=''>
									<img src='/logo2.png' alt='logo' className='w-[200px]' />
								</Link>
							</div>

							<div className='flex items-start gap-2'>
								<HugeiconsIcon icon={Location03Icon} size={28} className='mt-[-2px]' />
								<span className=' leading-[20px] py-[2px]'>Địa chỉ: {address}</span>
							</div>
						</div>
						<div className='col-span-2'>
							<div className='grid grid-cols-5'>
								<div className='col-span-2'>
									<div className='mb-4'>
										<span className='font-semibold text-base'>Hỗ trợ khách hàng</span>
									</div>
									<div className='flex flex-col gap-4'>
										<Link to='/cam-ket-chat-luong' className='hover:text-[#2074be]'>
											Cam kết chất lượng
										</Link>
										<Link to='/lien-he' className='hover:text-[#2074be]'>
											Liên hệ
										</Link>
									</div>
								</div>
								<div className='col-span-2'>
									<div className='mb-4'>
										<span className='font-semibold text-base'>Điều khoản và chính sách</span>
									</div>
									<div className='flex flex-col gap-4'>
										<Link to='/huong-dan-dat-hang' className='hover:text-[#2074be]'>
											Hướng dẫn đặt hàng
										</Link>
										<Link to='/dieu-khoan-su-dung' className='hover:text-[#2074be]'>
											Điều khoản sử dụng
										</Link>
										<Link to='/chinh-sach-doi-tra-hang' className='hover:text-[#2074be]'>
											Chính sách đổi trả hàng
										</Link>
										<Link to='/chinh-sach-khieu-nai' className='hover:text-[#2074be]'>
											Chính sách khiếu nại
										</Link>
										<Link to='/chinh-sach-bao-hanh' className='hover:text-[#2074be]'>
											Chính sách bảo hành
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className=''>
							<div className='mb-4'>
								<span className='font-semibold text-base'>Hotline</span>
							</div>
							<div className='flex items-center gap-5 mb-4'>
								<HugeiconsIcon icon={Call02Icon} size={32} color='#2074be' />
								<a href={`tel:${getTel()}`} className='font-semibold text-2xl text-[#2074be]'>
									{phone}
								</a>
							</div>
							<div className='mb-4'>
								<span>{workingTime}</span>
							</div>
							<div className='flex gap-2'>
								<a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer' className='inline-flex p-2 rounded-md bg-[#424242] transition-all ease-in-out duration-300 hover:-translate-y-2'>
									<HugeiconsIcon icon={Mail01Icon} size={18} />
								</a>
								<a
									href='https://m.me/pham.uc.509274'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex p-2 rounded-md bg-[#1d7dfb] transition-all ease-in-out duration-300 hover:-translate-y-2'
								>
									<HugeiconsIcon icon={MessengerIcon} size={18} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
