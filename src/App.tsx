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
	LoginPage,
	QuanLyDanhMucPage,
	QuanLySanPhamPage,
	TinTucPage,
} from 'src/pages';
import './App.css';
import { DashboardLayout, MainLayout, PageLayout } from './layout';
import { ToastContainer } from 'react-toastify';
import { AUTH_ROUTER, DASHBOARD_ROUTER, GENERAL_ROUTER } from './routers';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<div className='text-sm'>
				<Routes>
					<Route path={AUTH_ROUTER.LOGIN} element={<LoginPage />} />
					<Route path={DASHBOARD_ROUTER.HOME} element={<DashboardLayout />}>
						<Route index element={<div></div>} />
						<Route path={DASHBOARD_ROUTER.CATEGORY} element={<QuanLyDanhMucPage />} />
						<Route path={DASHBOARD_ROUTER.PRODUCT} element={<QuanLySanPhamPage />} />
					</Route>

					<Route path={GENERAL_ROUTER.HOME} element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='*' element={<PageLayout />}>
							<Route path={GENERAL_ROUTER.CAM_KET_CHAT_LUONG} element={<CamKetChatLuongPage />} />
							<Route path={GENERAL_ROUTER.LIEN_HE} element={<LienHePage />} />
							<Route path={GENERAL_ROUTER.HUONG_DAN_DAT_HANG} element={<HuongDanDatHangPage />} />
							<Route path={GENERAL_ROUTER.DIEU_KHOAN_SU_DUNG} element={<DieuKhoanSuDungPage />} />
							<Route path={GENERAL_ROUTER.CHINH_SACH_DOI_TRA_HANG} element={<ChinhSachDoiTraHangPage />} />
							<Route path={GENERAL_ROUTER.CHINH_SACH_KHIEU_NAI} element={<ChinhSachKhieuNaiPage />} />
							<Route path={GENERAL_ROUTER.CHINH_SACH_BAO_HANH} element={<ChinhSachBaoHanhPage />} />
							<Route path={GENERAL_ROUTER.GIOI_THIEU} element={<GioiThieuPage />} />
							<Route path={GENERAL_ROUTER.TIN_TUC} element={<TinTucPage />} />
						</Route>
					</Route>

					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
