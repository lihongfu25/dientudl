import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Delete02Icon } from '@hugeicons/core-free-icons';
import { ISpecification } from 'src/constants';
import { Checkbox, CheckboxChangeEvent, Input } from 'antd';
interface SpecificationItemProps {
	index: number;
	data: ISpecification;
	allowDelete: boolean;
	onChange: (event: any, index: number) => void;
	onDelete: (index: number) => void;
}
const SpecificationItem = ({ index, data, allowDelete, onChange, onDelete }: SpecificationItemProps) => {
	const [_data, setData] = React.useState(data);
	React.useEffect(() => {
		setData(data);
	}, [data]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement> | CheckboxChangeEvent, field: 'key' | 'value' | 'showInCard') => {
		const updatedData = { ..._data, [field]: field === 'showInCard' ? event.target.checked : event.target.value };
		setData(updatedData);
		onChange(updatedData, index);
	};

	return (
		<div className='flex items-center mb-4'>
			<div className='flex-1 grid grid-cols-12 gap-x-3'>
				<div className='col-span-3'>
					<div className=''>
						<Input
							type='text'
							placeholder='Nhập tên thông số'
							className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm'
							allowClear
							value={_data.key}
							onChange={(e) => handleChange(e, 'key')}
						/>
					</div>
				</div>

				<div className='col-span-7'>
					<div className=''>
						<Input
							type='text'
							placeholder='Nhập thông tin'
							className='h-[36px] w-full px-3 border rounded-md focus:outline-none sm:text-sm'
							allowClear
							value={_data.value}
							onChange={(e) => handleChange(e, 'value')}
						/>
					</div>
				</div>
				<div className='col-span-2'>
					<div className=''>
						<Checkbox className='h-[36px] w-full px-3 items-center focus:outline-none sm:text-sm' checked={_data.showInCard} onChange={(e) => handleChange(e, 'showInCard')}>
							Hiển thị trên thẻ
						</Checkbox>
					</div>
				</div>
			</div>
			{allowDelete && (
				<div className='ml-2'>
					<button type='button' onClick={() => onDelete(index)} tabIndex={-1} className='p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors' aria-label='Delete row'>
						<HugeiconsIcon icon={Delete02Icon} size={18} className='text-red-500' />
					</button>
				</div>
			)}
		</div>
	);
};

export default SpecificationItem;
