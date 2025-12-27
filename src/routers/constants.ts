export const DASHBOARD_ROUTER = {
	HOME: '/quan-ly',
	CATEGORY: '/quan-ly/danh-muc',
	PRODUCT: '/quan-ly/san-pham',
	PRODUCT_CREATE: '/quan-ly/san-pham/them-moi',
	PRODUCT_DETAIL: '/quan-ly/san-pham/detail/:id',
	PRODUCT_DETAILS: (id: string) => '/quan-ly/san-pham/detail/' + id,
};

export const AUTH_ROUTER = {
	LOGIN: '/dang-nhap',
};

export const GENERAL_ROUTER = {
	HOME: '/',
	CAM_KET_CHAT_LUONG: 'cam-ket-chat-luong',
	LIEN_HE: 'lien-he',
	HUONG_DAN_DAT_HANG: 'huong-dan-dat-hang',
	DIEU_KHOAN_SU_DUNG: 'dieu-khoan-su-dung',
	CHINH_SACH_DOI_TRA_HANG: 'chinh-sach-doi-tra-hang',
	CHINH_SACH_KHIEU_NAI: 'chinh-sach-khieu-nai',
	CHINH_SACH_BAO_HANH: 'chinh-sach-bao-hanh',
	GIOI_THIEU: 'gioi-thieu',
	TIN_TUC: 'tin-tuc',
};
