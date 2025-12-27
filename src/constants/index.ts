export * from './breadcrumb';
export * from './product';
export const address = 'Thôn Phú An, Phường Việt Hoà, TP. Hải Phòng, Việt Nam';
export const phone = '0978 970 935';
export const email = 'phamduc443143@gmail.com';
export const workingTime = '9h00 - 17h00';
export const companyName = 'CÔNG TY TNHH CÔNG NGHIỆP ĐIỆN TỬ D&L';
export const domain = 'Dientudl.com';

export const DEFAULT_PAGE_SIZE = 20;

export interface SearchParams {
	keyword?: string;
	page?: number;
	limit?: number;
}

export interface ISpecification {
	key: string;
	value: any;
	showInCard: boolean;
}
