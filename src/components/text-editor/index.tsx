import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useController, type Control } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface TextEditorProps {
	name: string;
	label: string;
	labelClassName?: string;
	disabled?: boolean;
	placeholder?: string;
	control: Control<any>;
}

const TextEditor = ({ name, label, control, labelClassName, disabled, placeholder }: TextEditorProps) => {
	const [Editor, setEditor] = useState<any>(null);

	const { isDarkMode } = useSelector((state: any) => state.theme);

	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		defaultValue: '',
	});

	useEffect(() => {
		import('jodit-react').then((mod) => setEditor(() => mod.default));
	}, []);

	return Editor ? (
		<div className='mb-4'>
			<label htmlFor={name} className={classNames('block text-sm font-medium mb-1', error ? 'text-red-500 dark:text-red-400' : 'text-gray-700 dark:text-gray-300', labelClassName)}>
				{label}
			</label>
			<div className='flex flex-col jodit-dark-theme'>
				<Editor
					ref={field.ref}
					value={field.value ?? ''}
					config={{
						readonly: disabled,
						placeholder: placeholder ?? 'Type your content',
						theme: isDarkMode ? 'dark' : 'light',
					}}
					onBlur={(content: string) => field.onChange(content)}
				/>
				{error && <p className='mt-1 text-sm text-red-500'>{error.message}</p>}
			</div>
		</div>
	) : null;
};

export default TextEditor;
