import classNames from 'classnames';
import React, { type JSX } from 'react';
import { useController, type Control } from 'react-hook-form';
import { HugeiconsIcon } from '@hugeicons/react';
import { InformationCircleIcon } from '@hugeicons/core-free-icons';
import Tooltip from '../tooltip';

// Định nghĩa props cho InputControl
interface InputControlProps {
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
	className?: string;
	labelClassName?: string;
	inputClassName?: string;
	control: Control<any>;
	required?: boolean;
	helper?: React.ReactNode | JSX.Element;
}

const InputControl: React.FC<InputControlProps> = ({ name, label, type = 'text', placeholder = '', className = '', labelClassName = '', inputClassName = '', control, required = false, helper }) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		defaultValue: '',
	});

	return (
		<div className={classNames('', className)}>
			<label htmlFor={name} className={classNames('block text-sm font-medium mb-1', error ? 'text-red-500 dark:text-red-400' : 'text-gray-700 dark:text-gray-300', labelClassName)}>
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

			<input
				{...field}
				id={name}
				type={type}
				placeholder={placeholder}
				className={classNames(
					'block w-full px-3 py-2 border rounded-md focus:outline-none sm:text-sm',
					error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-sky-400 focus:border-sky-400',
					'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
					inputClassName,
				)}
			/>

			{error && <p className='mt-1 text-xs text-red-500 dark:text-red-400'>{error.message}</p>}
		</div>
	);
};

export default InputControl;
