import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { address, companyName, email, IBreadcrumb, phone, workingTime } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';

const DieuKhoanSuDung = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Điều khoản sử dụng', path: '/dieu-khoan-su-dung', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	return (
		<div className='mb-20 leading-[24px]'>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold leading-[32px]'>📜 Điều Khoản Sử Dụng</h1>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>1. Quy Định Chung</h2>
				<p className=''>
					Chào mừng bạn đến với website của <span className='font-semibold'>{companyName}</span>. <br />
					Website và các dịch vụ tại đây được vận hành, quản lý và sở hữu bởi chúng tôi. <br />
					Khi truy cập và sử dụng website, bạn mặc nhiên đồng ý với các điều khoản trong “<span className='font-semibold'>Điều Khoản Sử Dụng</span>” này. <br />
					Nếu bạn không đồng ý, vui lòng ngừng sử dụng dịch vụ hoặc rời khỏi website. <br /> <br />
					Chúng tôi có quyền điều chỉnh, cập nhật nội dung các điều khoản mà không cần thông báo trước. <br />
					Việc bạn tiếp tục truy cập hoặc sử dụng website sau khi các điều khoản thay đổi đồng nghĩa với việc bạn đã chấp thuận những cập nhật mới.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>2. Dịch Vụ Cung Cấp & Trách Nhiệm Của Chúng Tôi</h2>
				<p className=''>
					Các dịch vụ của chúng tôi được mô tả rõ ràng trên website. <br />
					Chúng tôi có thể thay đổi, tạm dừng hoặc ngừng cung cấp bất kỳ dịch vụ nào mà không cần báo trước. <br /> <br />
					Chúng tôi có quyền chỉnh sửa hoặc gỡ bỏ thông tin vi phạm quy định, không phù hợp với thuần phong mỹ tục hoặc có dấu hiệu gian lận. <br />
					Dù luôn cố gắng đảm bảo độ chính xác, chúng tôi <span className='font-semibold'>không chịu trách nhiệm</span> cho các sai sót hoặc thiệt hại phát sinh từ việc sử dụng thông tin trên website.{' '}
					<br /> <br />
					Người dùng có trách nhiệm bảo mật tài khoản và thông báo ngay khi phát hiện dấu hiệu truy cập trái phép. <br />
					Chúng tôi có quyền tạm khóa hoặc chấm dứt quyền truy cập nếu phát hiện hành vi vi phạm điều khoản sử dụng.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>3. Trách Nhiệm Của Người Dùng</h2>
				<ul className=' list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Cung cấp thông tin chính xác, trung thực khi đăng ký.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Tự chịu trách nhiệm về hoạt động diễn ra dưới tài khoản của mình.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Giữ bí mật mật khẩu, thông tin cá nhân và không chia sẻ cho bên thứ ba.</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>4. Giới Hạn Về Độ Tuổi</h2>
				<p className=''>
					Mọi người đều có thể truy cập website, tuy nhiên <span className='font-semibold'>để đăng ký tài khoản hoặc sử dụng các tính năng nâng cao</span>, người dùng phải{' '}
					<span className='font-semibold'>đủ 18 tuổi</span> và có năng lực pháp lý theo quy định của pháp luật Việt Nam.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>5. Quyền Sử Dụng Nội Dung</h2>
				<p className=''>
					Bạn có thể xem, tải hoặc chia sẻ thông tin từ website cho mục đích cá nhân, phi thương mại. <br />
					Mọi hành vi <span className='font-semibold'>sửa đổi, sao chép, phân phối hoặc sử dụng nội dung cho mục đích thương mại</span> đều cần có sự chấp thuận bằng văn bản từ chúng tôi.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>6. Những Hành Vi Bị Cấm</h2>
				<p className=''>
					Khi sử dụng website, bạn <span className='font-semibold'>không được</span>:
				</p>
				<ul className=' list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Đăng tải, chia sẻ nội dung vi phạm pháp luật hoặc trái với thuần phong mỹ tục.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Lợi dụng website để phát tán thư rác, quảng cáo hoặc nội dung không mong muốn.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Sử dụng hình ảnh, dữ liệu, nội dung thuộc quyền sở hữu của người khác mà không được phép.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Thực hiện các hành vi gây hại, tấn công hoặc phá hoại hệ thống của website.</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>7. Dịch Vụ & Sản Phẩm Của Bên Thứ Ba</h2>
				<p className=''>
					Website có thể hiển thị nội dung, quảng cáo hoặc liên kết đến dịch vụ của bên thứ ba. <br />
					Chúng tôi <span className='font-semibold'>không chịu trách nhiệm</span> cho bất kỳ thiệt hại, tổn thất hoặc tranh chấp nào phát sinh từ việc bạn sử dụng các dịch vụ đó.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>8. Báo Cáo Vi Phạm</h2>
				<p className=''>
					Nếu bạn phát hiện nội dung trên website có dấu hiệu vi phạm bản quyền, quyền sở hữu trí tuệ hoặc thông tin sai lệch, vui lòng{' '}
					<span className='font-semibold'>liên hệ ngay với chúng tôi</span> để được xử lý kịp thời.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>9. Quy Định Pháp Lý Áp Dụng</h2>
				<p className=''>
					Tất cả hoạt động liên quan đến website và dịch vụ của chúng tôi đều tuân thủ <span className='font-semibold'>pháp luật Việt Nam</span> và các điều ước quốc tế có liên quan. <br />
					Khi có quy định pháp lý mới được ban hành, chúng sẽ <span className='font-semibold'>tự động áp dụng</span> cho toàn bộ người dùng và dịch vụ.
				</p>
			</div>
			<div className='mb-8'>
				<h2 className='text-[20px] font-semibold mb-4 leading-[24px]'>10. Thông Tin Liên Hệ</h2>
				<p className=''>
					Chúng tôi luôn trân trọng mọi ý kiến đóng góp từ khách hàng. <br />
					Nếu bạn có thắc mắc hoặc phản hồi liên quan đến các <span className='font-semibold'>Điều Khoản Sử Dụng</span>, vui lòng liên hệ:
				</p>
				<table className='border-collapse border border-gray-400 my-2'>
					<tr>
						<td className='border border-gray-300 px-5 py-[10px]'>Thông tin công ty</td>
						<td className='border border-gray-300 px-5 py-[10px]'>{companyName}</td>
					</tr>
					<tr>
						<td className='border border-gray-300 px-5 py-[10px]'>Địa chỉ</td>
						<td className='border border-gray-300 px-5 py-[10px]'>{address}</td>
					</tr>
					<tr>
						<td className='border border-gray-300 px-5 py-[10px]'>Điện thoại</td>
						<td className='border border-gray-300 px-5 py-[10px]'>{phone}</td>
					</tr>
					<tr>
						<td className='border border-gray-300 px-5 py-[10px]'>Email</td>
						<td className='border border-gray-300 px-5 py-[10px]'>{email}</td>
					</tr>
					<tr>
						<td className='border border-gray-300 px-5 py-[10px]'>Giờ làm việc</td>
						<td className='border border-gray-300 px-5 py-[10px]'>{workingTime}</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default DieuKhoanSuDung;
