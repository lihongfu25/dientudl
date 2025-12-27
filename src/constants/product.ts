import { UploadFile } from 'antd';
import { ISpecification } from '.';

export interface IProduct {
	id: number;
	name: string;
	categoryId: string;
	thumbnail: string;
	images: Array<UploadFile | File | string>;
	description: string;
	specifications: Array<ISpecification>;
}
