import { cloudinaryConfig } from 'src/config';
import axios from 'axios';
export const uploadMultipleFiles = async (files: File[]): Promise<string[]> => {
	const uploadPromises = files.map((file) => {
		const formData = new FormData();
		formData.append('file', file as File);
		formData.append('upload_preset', cloudinaryConfig.uploadPreset);

		return axios.post(cloudinaryConfig.baseUrl, formData).then((res) => res.data.secure_url);
	});

	return Promise.all(uploadPromises);
};
