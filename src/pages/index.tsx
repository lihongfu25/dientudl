import React from 'react';

const LoginPage = React.lazy(() => import('src/pages/auth/login'));
const HomePage = React.lazy(() => import('src/pages/home'));
const CamKetChatLuongPage = React.lazy(() => import('src/pages/cam-ket-chat-luong'));
const LienHePage = React.lazy(() => import('src/pages/lien-he'));
const HuongDanDatHangPage = React.lazy(() => import('src/pages/huong-dan-dat-hang'));
const DieuKhoanSuDungPage = React.lazy(() => import('src/pages/dieu-khoan-su-dung'));
const ChinhSachDoiTraHangPage = React.lazy(() => import('src/pages/chinh-sach-doi-tra-hang'));
const ChinhSachKhieuNaiPage = React.lazy(() => import('src/pages/chinh-sach-khieu-nai'));
const ChinhSachBaoHanhPage = React.lazy(() => import('src/pages/chinh-sach-bao-hanh'));
const GioiThieuPage = React.lazy(() => import('src/pages/gioi-thieu'));
const TinTucPage = React.lazy(() => import('src/pages/tin-tuc'));
const QuanLyDanhMucPage = React.lazy(() => import('src/pages/quan-ly/danh-muc'));
const QuanLySanPhamPage = React.lazy(() => import('src/pages/quan-ly/san-pham'));

export {
	LoginPage,
	HomePage,
	CamKetChatLuongPage,
	LienHePage,
	HuongDanDatHangPage,
	DieuKhoanSuDungPage,
	ChinhSachDoiTraHangPage,
	ChinhSachKhieuNaiPage,
	ChinhSachBaoHanhPage,
	GioiThieuPage,
	TinTucPage,
	QuanLyDanhMucPage,
	QuanLySanPhamPage,
};
