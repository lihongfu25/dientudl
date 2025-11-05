import { phone } from 'src/constants';

export const getTel = () => {
	return phone.trim().replace(/\s/g, '');
};
