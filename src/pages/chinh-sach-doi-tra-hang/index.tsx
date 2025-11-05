import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { address, companyName, domain, email, IBreadcrumb, phone, workingTime } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';

const ChinhSachDoiTraHang = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Chính sách đổi trả hàng', path: '/chinh-sach-doi-tra-hang', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	return (
		<div className='mb-20 leading-[24px]'>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🔄 Chính Sách Đổi Trả Hàng Tại {domain}</h1>
				<p className=''>
					Nhằm mang đến <span className='font-semibold'>trải nghiệm mua sắm an tâm và hài lòng nhất</span>, <span className='font-semibold'>{companyName}</span> xây dựng chính sách đổi trả hàng{' '}
					<span className='font-semibold'>minh bạch, nhanh chóng và thuận tiện</span> cho khách hàng.
					<br />
					Vui lòng tham khảo chi tiết dưới đây để hiểu rõ về <span className='font-semibold'>thời gian, điều kiện và quy trình đổi trả.</span>
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>⏰ 1. Thời Gian Áp Dụng Đổi Trả</h1>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Quý khách có thể yêu cầu <span className='font-semibold'>đổi hoặc trả sản phẩm trong vòng 7 ngày</span> kể từ ngày nhận hàng.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Thời gian làm việc:</span>
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
				</ul>
				<p className=''>
					👉 Lưu ý: Các yêu cầu sau 7 ngày kể từ ngày nhận hàng sẽ <span className='font-semibold'>không nằm trong phạm vi hỗ trợ đổi trả</span>.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>📦 2. Điều Kiện Được Đổi Trả</h1>
				<p className=''>Chúng tôi chấp nhận đổi hoặc trả sản phẩm trong các trường hợp sau:</p>
				<ul className='list-decimal ps-5'>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm giao sai <span className='font-normal'>về mẫu mã, chủng loại hoặc số lượng so với đơn đặt hàng.</span>
							</span>
						</div>
					</li>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm bị lỗi kỹ thuật <span className='font-normal'>do nhà sản xuất ngay khi nhận hàng.</span>
							</span>
						</div>
					</li>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>
								Hư hỏng trong quá trình vận chuyển<span className='font-normal'>, có xác minh lỗi từ</span> {domain} <span className='font-normal'>hoặc đơn vị vận chuyển.</span>
							</span>
						</div>
					</li>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm còn nguyên vẹn<span className='font-normal'>, chưa qua sử dụng, giữ nguyên bao bì, tem niêm phong, nhãn mác và đầy đủ phụ kiện.</span>
							</span>
						</div>
					</li>
					<li className='font-semibold'>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-normal'>Có </span> hóa đơn mua hàng tại {domain} <span className='font-normal'>kèm yêu cầu đổi trả.</span>
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🚫 3. Trường Hợp Không Được Đổi Trả</h1>
				<p className=''>
					<span className='font-semibold'>{domain} không áp dụng đổi trả</span> đối với các sản phẩm thuộc các trường hợp sau:
				</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm <span className='font-semibold'>đã qua sử dụng</span>, mất tem niêm phong, bị trầy xước hoặc hư hại do người dùng.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-semibold'>Hết thời hạn đổi trả (sau 7 ngày)</span> kể từ ngày nhận hàng.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm bị <span className='font-semibold'>hư hỏng do lỗi sử dụng sai hướng dẫn</span>, hoặc bảo quản không đúng cách.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-semibold'>Không có hóa đơn mua hàng</span> hoặc bằng chứng chứng minh sản phẩm được mua tại <span className='font-semibold'>{domain}</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-semibold'>Khách hàng thay đổi ý định</span>, muốn đổi mẫu mã hoặc chủng loại khi sản phẩm không có lỗi.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>📝 4. Quy Trình Đổi Trả Hàng</h1>
				<div className=''>
					<p className='font-semibold'>🔹 Bước 1: Liên Hệ Xác Nhận</p>
					<p className=''>Vui lòng liên hệ với chúng tôi để thông báo yêu cầu đổi trả qua:</p>
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
					</ul>
					<p className=''>
						Cung cấp <span className='font-semibold'>thông tin đơn hàng, mô tả lý do đổi trả, kèm hình ảnh hoặc video minh chứng</span> (nếu có).
					</p>
				</div>

				<div className=''>
					<p className='font-semibold'>🔹 Bước 2: Kiểm Tra & Phản Hồi</p>
					<p className=''>
						Sau khi nhận được thông tin, <span className='font-semibold'>{domain}</span> sẽ <span className='font-semibold'>xem xét và phản hồi trong vòng 1–3 ngày làm việc</span> để xác nhận tình
						trạng sản phẩm và hướng dẫn gửi hàng.
					</p>
				</div>

				<div className=''>
					<p className='font-semibold'>🔹 Bước 3: Gửi Sản Phẩm Về</p>
					<p className=''>
						Sau khi được xác nhận, quý khách vui lòng gửi sản phẩm về địa chỉ: <span className='font-semibold'>{address}</span>
					</p>
				</div>
				<div className=''>
					<p className='font-semibold'>🔹 Bước 4: Xử Lý Đổi Trả</p>
					<p className=''>Tùy vào tình trạng sản phẩm và yêu cầu của khách hàng:</p>
					<ul className='list-disc ps-5'>
						<li className=''>
							<div className='flex gap-2'>
								<span className=''>
									<span className='font-semibold'>Đổi sản phẩm mới cùng loại</span> (nếu còn hàng).
								</span>
							</div>
						</li>
						<li className=''>
							<div className='flex gap-2'>
								<span className=''>
									<span className='font-semibold'>Hoàn tiền</span> (nếu không còn sản phẩm thay thế hoặc theo yêu cầu khách hàng).
								</span>
							</div>
						</li>
					</ul>
					<p className=''>
						⏳ <span className='font-semibold'>Thời gian xử lý</span>: Trong vòng <span className='font-semibold'>7 ngày làm việc</span> kể từ khi chúng tôi nhận được sản phẩm đổi/trả.
					</p>
				</div>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>💰 5. Chính Sách Vận Chuyển Khi Đổi Trả</h1>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-semibold'>Miễn phí vận chuyển</span> nếu lỗi thuộc về <span className='font-semibold'>{domain}</span> (sai hàng, lỗi kỹ thuật, hư hỏng vận chuyển).
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-semibold'>Khách hàng tự chi trả phí vận chuyển</span> nếu đổi trả do nhu cầu cá nhân hoặc lỗi từ phía người sử dụng.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🤝 6. Cam Kết Từ {domain}</h1>
				<p className=''>Chúng tôi cam kết:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Xử lý yêu cầu đổi trả nhanh chóng, minh bạch và công bằng.</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								<span className='font-semibold'>Bảo vệ quyền lợi hợp pháp của khách hàng</span> theo đúng chính sách công ty và quy định pháp luật.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Luôn <span className='font-semibold'>hỗ trợ tận tâm</span> để quý khách có trải nghiệm mua sắm tốt nhất.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>. 📞 7. Thông Tin Liên Hệ Hỗ Trợ</h1>
				<p className=''>Nếu cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi qua:</p>
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
				<p className=''>
					<span className='font-semibold'>{domain}</span> – Luôn đồng hành cùng bạn, mang đến <span className='font-semibold'>sản phẩm chất lượng và dịch vụ tận tâm nhất!</span>
				</p>
			</div>
		</div>
	);
};

export default ChinhSachDoiTraHang;
