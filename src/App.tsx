import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
	CamKetChatLuongPage,
	ChinhSachBaoHanhPage,
	ChinhSachDoiTraHangPage,
	ChinhSachKhieuNaiPage,
	DieuKhoanSuDungPage,
	GioiThieuPage,
	HomePage,
	HuongDanDatHangPage,
	LienHePage,
	TinTucPage,
} from 'src/pages';
import './App.css';
import { MainLayout, PageLayout } from './layout';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className='text-sm'>
			<Routes>
				<Route path='/*' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='*' element={<PageLayout />}>
						<Route path='cam-ket-chat-luong' element={<CamKetChatLuongPage />} />
						<Route path='lien-he' element={<LienHePage />} />
						<Route path='huong-dan-dat-hang' element={<HuongDanDatHangPage />} />
						<Route path='dieu-khoan-su-dung' element={<DieuKhoanSuDungPage />} />
						<Route path='chinh-sach-doi-tra-hang' element={<ChinhSachDoiTraHangPage />} />
						<Route path='chinh-sach-khieu-nai' element={<ChinhSachKhieuNaiPage />} />
						<Route path='chinh-sach-bao-hanh' element={<ChinhSachBaoHanhPage />} />
						<Route path='gioi-thieu' element={<GioiThieuPage />} />
						<Route path='tin-tuc' element={<TinTucPage />} />
					</Route>
				</Route>

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
