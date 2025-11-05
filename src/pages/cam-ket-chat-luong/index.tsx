import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { address, companyName, email, IBreadcrumb, phone, workingTime } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';

const CamKetChatLuong = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Cam kết chất lượng', path: '/cam-ket-chat-luong', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);
	return (
		<div className='mb-20 leading-[24px]'>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🌟 Cam Kết Chất Lượng – Niềm Tin Từ Sự Hài Lòng</h1>
				<p className=''>
					Chúng tôi luôn tin rằng <span className='font-semibold'>khách hàng chính là trọng tâm của mọi hoạt động</span>. Sự hài lòng của bạn là thước đo thành công lớn nhất của chúng tôi. Vì vậy, mọi
					sản phẩm – dịch vụ đều được lựa chọn, kiểm soát và phục vụ với mục tiêu duy nhất: <span className='font-semibold'>mang đến chất lượng vượt mong đợi</span>.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>💼 1. Đội ngũ chuyên nghiệp, tận tâm</h1>
				<p className=''>
					Chúng tôi sở hữu đội ngũ nhân viên giàu kinh nghiệm, am hiểu thị trường và luôn theo sát xu hướng tiêu dùng. Mỗi thành viên đều đặt{' '}
					<span className='font-semibold'>chữ Tín và sự hài lòng của khách hàng</span> lên hàng đầu trong mọi hoạt động, từ khâu tìm nguồn hàng đến chăm sóc sau bán.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🤝 2. Hợp tác cùng đối tác uy tín</h1>
				<p className=''>
					Chúng tôi chỉ lựa chọn làm việc với <span className='font-semibold'>những thương hiệu và nhà cung cấp có tên tuổi, minh bạch và đáng tin cậy</span>. Nhờ vậy, mỗi sản phẩm đến tay bạn đều là
					hàng chính hãng, chất lượng cao, đa dạng về mẫu mã và được kiểm chứng rõ ràng.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🔍 3. Kiểm soát chất lượng nghiêm ngặt</h1>
				<p className=''>Mỗi sản phẩm đều trải qua quy trình kiểm tra tỉ mỉ:</p>
				<ul className=' list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Chọn lọc kỹ lưỡng:</span>
							<span className=''>Chỉ nhập từ nguồn đáng tin cậy.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Bảo quản đúng chuẩn:</span>
							<span className=''>Đảm bảo sản phẩm luôn trong điều kiện tốt nhất.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Kiểm tra trước khi giao:</span>
							<span className=''>Mỗi đơn hàng đều được xác nhận về chất lượng và tính nguyên vẹn trước khi đến tay khách hàng.</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>✅ 4. Cam kết minh bạch & tận tâm</h1>
				<p className=''>Chúng tôi tự hào mang đến cho bạn những giá trị thật:</p>
				<ul className=' list-disc ps-5'>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Nguồn gốc rõ ràng, chính hãng 100%.</span>
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Tuyệt đối nói không với hàng giả, hàng nhái, hàng kém chất lượng.</span>
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Giá cả cạnh tranh</span>, luôn tối ưu cho khách hàng.
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Hoàn tiền 100%</span> nếu sản phẩm không đúng cam kết.
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Bảo hành đầy đủ</span> theo tiêu chuẩn của nhà sản xuất.
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Phục vụ bằng sự chân thành</span> – đặt chữ Tín và sự tận tâm lên hàng đầu.
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Bảo mật thông tin cá nhân tuyệt đối</span>, tuân thủ đúng quy định pháp luật.
						</p>
					</li>
					<li className=''>
						<p className='flex gap-2'>
							<span className='font-semibold'>Ưu đãi thường xuyên</span>, tri ân khách hàng bằng các chương trình khuyến mãi hấp dẫn.
						</p>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>💬 5. Luôn lắng nghe và hoàn thiện</h1>
				<p className=''>
					Chúng tôi không ngừng nỗ lực để mang lại trải nghiệm mua sắm tốt nhất. <br />
					Mọi góp ý, phản hồi của bạn đều là động lực để chúng tôi hoàn thiện hơn mỗi ngày. <br />
					👉 Nếu có bất kỳ thắc mắc hay phản hồi nào, đừng ngần ngại <span className='font-semibold'>liên hệ với chúng tôi</span> – chúng tôi luôn sẵn lòng lắng nghe.
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
				<p className=''>Chúng tôi rất hân hạnh được phục vụ và đồng hành cùng Quý khách hàng!</p>
			</div>
		</div>
	);
};

export default CamKetChatLuong;
