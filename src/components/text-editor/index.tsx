import JoditEditor from 'jodit-react';
import React from 'react';
interface TextEditorProps {
	className?: string;
	disabled?: boolean;
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
}
const TextEditor = ({ className, placeholder, disabled = false, value, onChange }: TextEditorProps) => {
	const editor = React.useRef<any | null>(null);
	const config = React.useMemo(
		() => ({
			readonly: disabled,
			placeholder: placeholder || '',
			uploader: {
				url: ``,
				insertImageAsBase64URI: false,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
				prepareData: (data: any) => {
					const file = data.get('files[0]');
					data.append('files', file);
					data.delete('path');
					data.delete('source');
					data.delete('files[0]');
					return data;
				},
				isSuccess: (resp: any) => resp.statusCode === 200,
				getMessage: (resp: any) => resp.message,
				process: (resp: any) => resp.data,
				defaultHandlerSuccess: function (data: any) {
					if (editor.current) {
						const instance: any = editor.current;
						const selection = instance.selection;
						if (data) {
							selection.insertImage(``);
						}
					}
				},
				error: (e: any) => {
					if (editor.current) {
						const instance: any = editor.current;
						instance.message.error(e.getMessage(), 4000);
					}
				},
			},
		}),
		[placeholder, disabled],
	);
	const handleBlur = (newValue: any) => {
		const hasRealContent = checkRealContent(newValue);

		if (hasRealContent) {
			onChange(newValue);
		} else {
			onChange('');
		}
	};

	const checkRealContent = (html: any) => {
		if (!html) return false;

		// Tạo element tạm để kiểm tra
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = html;

		// Loại bỏ các thẻ trống mặc định của Jodit
		const cleanHtml = tempDiv.innerHTML
			.replace(/<p><br><\/p>/gi, '')
			.replace(/<p><br\/><\/p>/gi, '')
			.replace(/<p>\s*<\/p>/gi, '')
			.trim();

		return cleanHtml.length > 0;
	};

	return (
		<div className={className}>
			<JoditEditor
				ref={(instance) => {
					editor.current = instance as any;
				}}
				className={className}
				config={config}
				value={value}
				onBlur={handleBlur}
			/>
		</div>
	);
};

export default TextEditor;
