import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { address, companyName, domain, email, IBreadcrumb, phone, workingTime } from 'src/constants';
import { setBreadcrumb } from 'src/features/breadcrumb/breadcrumbSlice';

const ChinhSachBaoHanh = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const breadcrumbs: Array<IBreadcrumb> = [
			{ name: 'Trang chủ', path: '/' },
			{ name: 'Chính sách bảo hành', path: '/chinh-sach-bao-hanh', active: true },
		];

		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch]);

	return (
		<div className='mb-20 leading-[24px]'>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🔧 Chính Sách Bảo Hành Tại {domain}</h1>
				<p className=''>
					Nhằm mang lại sự yên tâm tuyệt đối cho khách hàng khi mua sắm, <span className='font-semibold'>{companyName}</span> cam kết áp dụng chính sách bảo hành minh bạch, nhanh chóng và tận tâm.
					<br />
					Mọi sản phẩm chính hãng được bán tại <span className='font-semibold'>{domain}</span> đều được bảo hành theo quy định của nhà sản xuất và được chúng tôi hỗ trợ tối đa trong suốt thời gian sử
					dụng.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🕒 1. Thời Gian Tiếp Nhận Bảo Hành</h1>
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
							<span className=''>
								Chúng tôi khuyến khích khách hàng <span className='font-semibold'>liên hệ sớm nhất có thể</span> khi sản phẩm gặp sự cố để được hỗ trợ kịp thời.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🏢 2. Địa Điểm Bảo Hành & Liên Hệ</h1>
				<p className=''>Khi có nhu cầu bảo hành, Quý khách vui lòng gửi sản phẩm về địa chỉ sau hoặc liên hệ trước để được hướng dẫn:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Địa chỉ:</span>
							<span className=''>{address}</span>
						</div>
					</li>
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
					Chúng tôi sẽ <span className='font-semibold'>phối hợp trực tiếp với hãng sản xuất hoặc trung tâm bảo hành ủy quyền</span> để xử lý nhanh chóng, đảm bảo quyền lợi tốt nhất cho khách hàng.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>📋 3. Điều Kiện Bảo Hành Chung</h1>
				<p className=''>
					Tất cả sản phẩm do <span className='font-semibold'>{domain}</span> cung cấp đều là hàng <span className='font-semibold'>chính hãng</span> và được bảo hành theo chính sách của từng thương
					hiệu. <br />
					Thời gian và hình thức bảo hành có thể khác nhau tùy vào loại sản phẩm và nhà sản xuất. <br /> <br />
					<span className='font-semibold'>✅ Trường Hợp Được Bảo Hành</span>
				</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm bị lỗi kỹ thuật hoặc hỏng hóc do <span className='font-semibold'>lỗi của nhà sản xuất</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm <span className='font-semibold'>còn trong thời hạn bảo hành</span> theo quy định.
							</span>
						</div>
					</li>
					<li className=''>
						<div className=''>
							<p className=''>Có đầy đủ:</p>
							<ul className='list-disc ps-6'>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Phiếu bảo hành hoặc tem niêm phong chính hãng.</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Hóa đơn mua hàng tại</span>
										<span className='font-semibold'>{domain}</span>.
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Sản phẩm thỏa mãn điều kiện kỹ thuật và quy định bảo hành của nhà sản xuất.</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>⚠️ 4. Lưu Ý Khi Bảo Hành</h1>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm bị lỗi kỹ thuật hoặc hỏng hóc do <span className='font-semibold'>lỗi của nhà sản xuất</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sản phẩm <span className='font-semibold'>còn trong thời hạn bảo hành</span> theo quy định.
							</span>
						</div>
					</li>
					<li className=''>
						<div className=''>
							<p className='font-semibold'>Chi phí vận chuyển:</p>
							<ul className='list-disc ps-6'>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>
											Nếu lỗi do nhà sản xuất hoặc do <span className='font-semibold'>{domain}</span>, chúng tôi sẽ <span className='font-semibold'>chịu toàn bộ chi phí vận chuyển</span>.
										</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>
											Nếu lỗi do người sử dụng, <span className='font-semibold'>khách hàng sẽ chịu chi phí vận chuyển</span> theo thực tế.
										</span>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Sau khi hết thời hạn bảo hành, trung tâm bảo hành sẽ <span className='font-semibold'>hỗ trợ sửa chữa tính phí ưu đãi</span> cho khách hàng thân thiết.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🚫 5. Trường Hợp Không Được Bảo Hành</h1>
				<p className=''>Sản phẩm không đủ điều kiện bảo hành trong các trường hợp sau:</p>
				<ul className='list-disc ps-5'>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Hết thời hạn bảo hành hoặc <span className='font-semibold'>mất phiếu bảo hành</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Không có chứng từ hoặc hóa đơn mua hàng tại <span className='font-semibold'>{domain}</span>.
							</span>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className='font-semibold'>Tem bảo hành bị rách, bong, mờ, chỉnh sửa hoặc không còn nguyên vẹn.</span>.
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>
								Số <span className='font-semibold'>Serial</span> trên sản phẩm không trùng khớp hoặc không xác định được.
							</span>
						</div>
					</li>
					<li className=''>
						<div className=''>
							<p className=''>Sản phẩm hư hỏng do:</p>
							<ul className='list-disc ps-6'>
								<li className=''>
									<div className='flex gap-2'>
										<span className='font-semibold'>Sử dụng sai hướng dẫn</span>
										<span className=''>, lắp đặt sai quy cách.</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Tác động vật lý</span>
										<span className='font-semibold'>như rơi, vỡ, trầy xước, ẩm ướt, thấm nước, hoen rỉ.</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className=''>Ảnh hưởng bởi</span>
										<span className='font-semibold'>thiên tai, hỏa hoạn, hoặc côn trùng, chuột bọ.</span>
									</div>
								</li>
								<li className=''>
									<div className='flex gap-2'>
										<span className='font-semibold'>Tự ý tháo lắp, sửa chữa</span>
										<span className=''>bởi cá nhân hoặc kỹ thuật viên không được ủy quyền.</span>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li className=''>
						<div className='flex gap-2'>
							<span className=''>Hoàn tất:</span>
							<span className=''>
								Khách hàng yêu cầu đổi mẫu mã hoặc chủng loại khi <span className='font-semibold'>không có lỗi kỹ thuật</span>.
							</span>
						</div>
					</li>
				</ul>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🧰 6. Hỗ Trợ Sau Bảo Hành</h1>
				<p className=''>
					Ngay cả khi sản phẩm đã hết hạn bảo hành, <span className='font-semibold'>{domain}</span> vẫn luôn sẵn sàng hỗ trợ sửa chữa, thay thế linh kiện hoặc tư vấn kỹ thuật với chi phí hợp lý và{' '}
					<span className='font-semibold'>dịch vụ ưu tiên cho khách hàng thân thiết</span>.
				</p>
			</div>
			<div className='mb-8'>
				<h1 className='text-[24px] font-semibold mb-6 leading-[32px]'>🏢 7. Thông Tin Liên Hệ Công Ty</h1>
				<p className=''>
					<span className='font-semibold'>{companyName}</span> <br />
					Chúng tôi là đơn vị cung cấp sản phẩm điện tử chính hãng, chất lượng cao, cùng dịch vụ hậu mãi chuyên nghiệp và tận tâm. <br /> <br />
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

export default ChinhSachBaoHanh;
