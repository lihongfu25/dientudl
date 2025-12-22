// components/ImageUpload.tsx
import { forwardRef, useEffect, useImperativeHandle, useRef, useState, type JSX } from 'react';
import { Controller, set, useController, type Control, type Path } from 'react-hook-form';
import { Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { HugeiconsIcon } from '@hugeicons/react';
import { InformationCircleIcon, Upload04Icon } from '@hugeicons/core-free-icons';
import classNames from 'classnames';
import Tooltip from '../tooltip';

interface ImageUploadProps<T extends Record<string, any>> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	labelClassName?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	helper?: React.ReactNode | JSX.Element;
}

export interface ImageUploadRef {
	clear: () => void;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const ImageUpload = forwardRef<ImageUploadRef, ImageUploadProps<any>>(({ control, name, label, className = '', disabled = false, required = false, helper, labelClassName }, ref) => {
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>();
	const { field, fieldState } = useController({ control, name });

	const getBase64 = (img: FileType, callback: (url: string) => void) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result as string));
		reader.readAsDataURL(img);
	};

	const beforeUpload = (file: FileType) => {
		setLoading(true);
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			fieldState.error = { type: 'manual', message: 'You can only upload JPG/PNG file!' };
			return false;
		}
		const isLt5M = file.size / 1024 / 1024 < 5;

		if (!isLt5M) {
			fieldState.error = { type: 'manual', message: 'Image must smaller than 5MB!' };
			return false;
		}

		getBase64(file, (url) => {
			setLoading(false);
			setImageUrl(url);
		});
		field.onChange(file);
		setLoading(false);
		return false;
	};

	useEffect(() => {
		if (field.value && typeof field.value === 'string') {
			setImageUrl(field.value);
		}
	}, [field]);

	const uploadButton = (
		<button style={{ border: 0, background: 'none' }} type='button' className='flex flex-col items-center justify-center'>
			{loading ? <div>uploading</div> : <HugeiconsIcon icon={Upload04Icon} />}
			<div className='mt-1'>Upload</div>
		</button>
	);

	return (
		<div className={`${className}`}>
			{label && (
				<label htmlFor={name} className={classNames('block text-sm font-medium mb-1', fieldState.error ? 'text-red-500 dark:text-red-400' : 'text-gray-700 dark:text-gray-300', labelClassName)}>
					<span className='flex items-center'>
						{label}
						{required && <span className='text-red-500 ml-1 text-xs'>*</span>}
						{helper && (
							<Tooltip content={helper}>
								{(showTooltip) => (
									<div className='group relative cursor-help inline-block ml-1'>
										<HugeiconsIcon icon={InformationCircleIcon} size={16} color='inherit' strokeWidth={1.5} className='cursor-help' />
									</div>
								)}
							</Tooltip>
						)}
					</span>
				</label>
			)}
			<Controller
				control={control}
				name={name}
				render={() => (
					<Upload name='avatar' listType='picture-card' className='avatar-uploader' showUploadList={false} action='' beforeUpload={beforeUpload} disabled={disabled}>
						{imageUrl ? <img src={imageUrl} className='rounded-lg' alt='avatar' style={{ width: '100%' }} /> : uploadButton}
					</Upload>
				)}
			/>
			{fieldState.error && <p className='text-red-500 text-xs mt-1'>{fieldState.error.message}</p>}
		</div>
	);
});

export default ImageUpload;
