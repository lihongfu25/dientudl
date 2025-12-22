import { toast, ToastPosition, type ToastOptions } from 'react-toastify';
export const showToast = (message: string, type = 'default', position: ToastPosition | undefined = 'top-right', duration = 3000) => {
	const toastOptions: ToastOptions = {
		position: position,
		autoClose: duration,
	};

	switch (type) {
		case 'success':
			toast.success(message, toastOptions);
			break;
		case 'warning':
			toast.warning(message, toastOptions);
			break;
		case 'error':
			toast.error(message, toastOptions);
			break;
		default:
			toast(message, toastOptions);
	}
};
