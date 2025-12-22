import { phone } from 'src/constants';
export * from './validates';
export const getTel = () => {
	return phone.trim().replace(/\s/g, '');
};

export const generateSlug = (text: string): string => {
	return text
		.toLowerCase()
		.trim()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/đ/g, 'd')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
};

interface PaginationState {
	current: number;
	pageSize: number;
}
export const paginate = <T>(
	data: T[],
	{ current, pageSize }: PaginationState,
): {
	data: T[];
	total: number;
} => {
	const start = (current - 1) * pageSize;
	const end = start + pageSize;

	return {
		data: data.slice(start, end),
		total: data.length,
	};
};

type MapReferenceOptions<T> = {
	idKey: keyof T;
	keyCheck: keyof T;
	targetKey: string;
};
export const mapReferenceByKey = <T extends Record<string, any>>(data: T[], options: MapReferenceOptions<T>): (T & Record<string, any>)[] => {
	const { idKey, keyCheck, targetKey } = options;

	const map = new Map<any, T>();

	data.forEach((item) => {
		map.set(item[idKey], item);
	});

	return data.map((item) => {
		const refId = item[keyCheck];
		return {
			...item,
			[targetKey]: refId ? map.get(refId) ?? null : null,
		};
	});
};
