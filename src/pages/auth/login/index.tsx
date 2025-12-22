import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { showToast } from 'src/config';
import { useFirebase } from 'src/hooks';
import { DASHBOARD_ROUTER } from 'src/routers';
export const LoginComponent = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { auth } = useFirebase();

	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { email, password } = formData;

			if (!email || !password) {
				showToast('Vui lòng điền đầy đủ thông tin!', 'error');
				return;
			}

			if (!auth) {
				showToast('Đang khởi tạo hệ thống, vui lòng thử lại sau ít phút!', 'error');
				return;
			}

			await signInWithEmailAndPassword(auth, email, password);
			showToast('Đăng nhập thành công!', 'success', 'bottom-right');
			navigate(DASHBOARD_ROUTER.HOME);
		} catch (error) {
			showToast('Đăng nhập thất bại! Vui lòng thử lại', 'error', 'bottom-right');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='min-h-screen p-4  bg-[url("src/assets/images/bg-login.jpg")] bg-cover bg-center bg-no-repeat'>
			<div className='absolute top-0 left-0 bottom-0 right-0 bg-gray-900/50'></div>
			<div className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center'>
				<div className='w-full max-w-md rounded-xl shadow-2xl p-8 bg-slate-50/25'>
					<div className='flex justify-center'>
						<img src='/logo2.png' alt='Logo' className='w-40' />
					</div>

					<h2 className='text-2xl font-bold text-center mb-8 text-foreground dark:text-dark-foreground'>Xin chào</h2>

					<form onSubmit={handleSubmit} className='flex flex-col gap-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-foreground dark:text-dark-foreground mb-2'>
								Tên đăng nhập
							</label>
							<input
								id='email'
								type='email'
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value.trim().toLowerCase() })}
								aria-invalid='false'
								className='w-full px-4 py-2 rounded-md border bg-white focus:outline-none focus:ring-1'
							/>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-foreground dark:text-dark-foreground mb-2'>
								Mật khẩu
							</label>
							<div className='relative'>
								<input
									id='password'
									type={showPassword ? 'text' : 'password'}
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									aria-invalid='false'
									className='w-full px-4 py-2 rounded-md border bg-white focus:outline-none focus:ring-1'
								/>
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='absolute right-3 top-1/2 transform -translate-y-1/2'
									aria-label={showPassword ? 'Hide password' : 'Show password'}
								>
									{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
								</button>
							</div>
						</div>

						<button
							type='submit'
							disabled={isLoading}
							className='w-full mt-2 py-2 px-4 bg-[#2074be] hover:bg-sky-600 text-white rounded-md transition duration-200 flex items-center justify-center disabled:opacity-70  cursor-pointer'
						>
							{isLoading ? <div className='h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin' /> : 'Đăng nhập'}
						</button>

						<p className='text-center text-sm text-foreground dark:text-dark-foreground'>
							Bạn chưa có tài khoản?{' '}
							<button type='button' className='text-[#2074be] hover:text-accent focus:outline-none focus:underline'>
								Tạo tài khoản
							</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
export default LoginComponent;
