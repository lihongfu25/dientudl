import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { address, companyName, domain, email, IBreadcrumb, phone, workingTime } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';

const ChinhSachKhieuNai = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Chính sách khiếu nại', path: '/chinh-sach-khieu-nai', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	return (
		<div className='mb-20 leading-[24px]'>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🛠️ Chính Sách Khiếu Nại Tại {domain}</h1>
				<p className=''>
					Nhằm bảo vệ quyền lợi khách hàng và mang đến trải nghiệm mua sắm đáng tin cậy, <span className='font-semibold'>{companyName}</span> xây dựng chính sách khiếu nại minh bạch, nhanh chóng và
					công bằng. <br />
					Chúng tôi luôn sẵn sàng lắng nghe và xử lý mọi phản hồi để đảm bảo quyền lợi tốt nhất cho Quý khách.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>⏰ 1. Thời Gian Tiếp Nhận Khiếu Nại</h1>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Giờ làm việc:</span>
							<span className=''>
								Từ <span className='font-semibold'>{workingTime}</span> hàng ngày
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Nghỉ:</span>
							<span className=''>Các ngày lễ tết theo quy định của Nhà nước.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Thời gian khiếu nại:</span>
							<span className=''>
								Trong vòng <span className='font-semibold'>07 ngày kể từ ngày nhận hàng</span>.
							</span>
						</div>
					</li>
				</ul>
				<p className=''>Sau thời gian này, mọi yêu cầu sẽ được xem xét tùy theo tình huống cụ thể.</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>📞 2. Cách Thức Gửi Khiếu Nại</h1>
				<p className=''>Khi gặp vấn đề liên quan đến sản phẩm hoặc dịch vụ, Quý khách có thể liên hệ với chúng tôi qua các kênh sau:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Hotline:</span>
							<span className=''>{phone}</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Email:</span>
							<span className=''>{email}</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Địa chỉ:</span>
							<span className=''>{address}</span>
						</div>
					</li>
				</ul>
				<p className=''>Khi gửi khiếu nại, vui lòng cung cấp đầy đủ:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Mã đơn hàng hoặc hóa đơn mua tại <span className='font-semibold'>{domain}</span>
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Mô tả chi tiết sự cố (kèm hình ảnh hoặc video minh chứng nếu có)</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Thông tin liên hệ (họ tên, số điện thoại, email)</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🧾 3. Điều Kiện Tiếp Nhận Khiếu Nại</h1>
				<p className=''>Chúng tôi tiếp nhận và xử lý khiếu nại trong các trường hợp:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Giao nhầm mẫu mã, chủng loại hoặc số lượng.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Sản phẩm bị lỗi kỹ thuật từ nhà sản xuất.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm hư hỏng trong quá trình vận chuyển do lỗi của <span className='font-semibold'>{domain}</span> hoặc đơn vị giao hàng.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Chất lượng dịch vụ không đáp ứng đúng cam kết (chậm hỗ trợ, thái độ phục vụ chưa phù hợp,…).</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🚫 4. Trường Hợp Không Tiếp Nhận Khiếu Nại</h1>
				<p className=''>Khiếu nại sẽ không được chấp nhận nếu:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Gửi sau thời hạn <span className='font-semibold'>07 ngày</span> kể từ ngày nhận hàng.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Sản phẩm hư hỏng do sử dụng sai hướng dẫn hoặc bảo quản không đúng cách.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Không có hóa đơn hoặc chứng từ chứng minh mua hàng tại <span className='font-semibold'>{domain}</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Sản phẩm đã qua sử dụng, không còn nguyên trạng (trừ lỗi kỹ thuật của nhà sản xuất).</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🔄 5. Quy Trình Xử Lý Khiếu Nại</h1>
				<ul className='list-decimal ps-5'>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>Tiếp nhận:</span>
							<span className='font-normal'>
								Ghi nhận khiếu nại trong vòng <span className='font-semibold'>24 giờ</span> kể từ khi nhận thông tin.
							</span>
						</div>
					</li>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>Xác minh:</span>
							<span className='font-normal'>
								Kiểm tra thông tin, hóa đơn và tình trạng sản phẩm trong vòng <span className='font-semibold'>1–3 ngày làm việc</span>.
							</span>
						</div>
					</li>
					<li className='font-semibold'>
						<div className=''>
							<p className='font-semibold'>Phản hồi & xử lý:</p>
							<ul className='list-disc ps-6'>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Đổi mới sản phẩm</span>
										<span className='font-normal'>(nếu đủ điều kiện).</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Hoàn tiền</span>
										<span className='font-normal'>(nếu không còn sản phẩm thay thế).</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Hỗ trợ kỹ thuật hoặc bảo hành</span>
										<span className='font-normal'>(nếu áp dụng).</span>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>Hoàn tất:</span>
							<span className='font-normal'>
								Toàn bộ quy trình được thực hiện trong <span className='font-semibold'>tối đa 07 ngày làm việc</span>, tùy theo mức độ phức tạp của vụ việc.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>💡 6. Lưu Ý Quan Trọng</h1>
				<p className=''>Khiếu nại sẽ không được chấp nhận nếu:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Nếu lỗi phát sinh từ phía <span className='font-semibold'>{domain}</span>, <span className='font-semibold'>chúng tôi sẽ chịu toàn bộ chi phí vận chuyển đổi/trả</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Nếu lỗi đến từ phía khách hàng (sử dụng sai cách, hư hỏng ngoài ý muốn,...), <span className='font-semibold'>chi phí vận chuyển sẽ do khách hàng chi trả</span>.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🏢 7. Thông Tin Liên Hệ Công Ty</h1>
				<p className=''>
					<span className='font-semibold'>{companyName}</span> <br />
					Chúng tôi là đơn vị cung cấp các giải pháp và thiết bị điện tử chính hãng, cam kết mang đến <span className='font-semibold'>
						sản phẩm chất lượng – dịch vụ tận tâm – uy tín hàng đầu
					</span>. <br /> <br />
					<span className='font-semibold'>Thông tin liên hệ:</span>
				</p>
				<ul className='list-disc ps-5 mt-2'>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>📍 Địa chỉ:</span>
							<span className=''>{address}</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>☎️ Hotline:</span>
							<span className=''>{phone}</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>📧 Email:</span>
							<span className=''>{email}</span>
						</div>
					</li>
					{/* <li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>🌐 Website:</span>
							<span className=''>{address}</span>
						</div>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default ChinhSachKhieuNai;
