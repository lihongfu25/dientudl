import { HugeiconsIcon } from '@hugeicons/react';
import { Call02Icon, CheckmarkBadge02Icon, DeliveryTruck02Icon, Location03Icon, PackageIcon, ShoppingBag03Icon } from '@hugeicons/core-free-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { address, phone } from 'src/constants';
import { getTel } from 'src/helpers';
// bg-[#2074be]
const Header = () => {
	const [search, setSearch] = useState('');

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onSearch();
		}
	};
	const onSearch = () => {
		console.log(search);
	};
	return (
		<>
			<div className=''>
				<div className='bg-[#27353e] text-white'>
					<div className='container'>
						<div className='flex justify-start items-center gap-8 h-10'>
							<div className='flex gap-1'>
								<HugeiconsIcon icon={Location03Icon} size={20} />
								<span>{address}</span>
							</div>
							<div className='flex gap-1'>
								<HugeiconsIcon icon={Call02Icon} size={20} />
								<span>Hotline:</span>
								<a href={`tel:${getTel()}`}>{phone}</a>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-[#2074be] text-white'>
					<div className='container'>
						<div className='flex justify-between items-center h-[88px] text-base'>
							<Link to='/' className=''>
								<img src='/logo2.png' alt='logo' className='w-[140px]' />
							</Link>
							<div className='flex items-center gap-5'>
								<div className='flex gap-2 font-semibold h-full'>
									<Link to='/' className='px-5 py-2 rounded-sm transition-all ease duration-500 hover:bg-[#2b86d1]'>
										Trang chủ
									</Link>
									<Link to='/gioi-thieu' className='px-5 py-2 rounded-sm transition-all ease duration-500 hover:bg-[#2b86d1]'>
										Giới thiệu
									</Link>
									<Link to='/tin-tuc' className='px-5 py-2 rounded-sm transition-all ease duration-500 hover:bg-[#2b86d1]'>
										Tin tức
									</Link>
									<Link to='/lien-he' className='px-5 py-2 rounded-sm transition-all ease duration-500 hover:bg-[#2b86d1]'>
										Liên hệ
									</Link>
								</div>
								<div className='flex items-center'>
									<input
										type='text'
										placeholder='Nhập từ khóa để tìm kiếm sản phẩm'
										className='py-2 px-4 min-w-[300px] rounded-l text-black outline-none'
										value={search}
										onChange={(e) => setSearch(e.target.value)}
										onKeyDown={handleKeyDown}
									/>
									<button className='bg-[#27353e] text-white py-2 px-4 font-semibold rounded-r' onClick={onSearch}>
										Tìm kiếm
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='sticky top-0'>
				<div className='shadow-sm text-black bg-white'>
					<div className='container'>
						<div className='grid grid-cols-4 h-14 text-base'>
							<div className='flex items-center gap-6'>
								<HugeiconsIcon icon={DeliveryTruck02Icon} color='#2074be' />
								<span className='font-semibold'>Giao hàng nhanh</span>
							</div>
							<div className='flex items-center gap-6'>
								<HugeiconsIcon icon={CheckmarkBadge02Icon} color='#2074be' />
								<span className='font-semibold'>Hóa đơn đầy đủ</span>
							</div>
							<div className='flex items-center gap-6'>
								<HugeiconsIcon icon={PackageIcon} color='#2074be' />
								<span className='font-semibold'>Bảo hành chính hãng</span>
							</div>
							<div className='flex items-center gap-6'>
								<HugeiconsIcon icon={ShoppingBag03Icon} color='#2074be' />
								<span className='font-semibold'>Đa dạng sản phẩm</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
