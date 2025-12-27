import { CatalogueIcon, DashboardSquare02Icon, Logout02Icon, PackageIcon, ResetPasswordIcon, UserIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Avatar, Dropdown, Form, MenuProps, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { showToast } from 'src/config';
import { REGEX_VALIDATE } from 'src/helpers';
import { useFirebaseToken } from 'src/hooks';
import { AUTH_ROUTER, DASHBOARD_ROUTER } from 'src/routers';

interface ChangePasswordForm {
	old: string;
	new: string;
}

const userMenus = [
	{
		key: 'change-password',
		label: (
			<div className='flex items-center gap-2 min-w-[150px] px-2 py-1'>
				<HugeiconsIcon icon={ResetPasswordIcon} />
				<span className=''>Đổi mật khẩu</span>
			</div>
		),
	},
	{
		key: 'logout',
		label: (
			<div className='flex items-center gap-2 min-w-[150px] px-2 py-1'>
				<HugeiconsIcon icon={Logout02Icon} />
				<span className=''>Đăng xuất</span>
			</div>
		),
	},
];

const DashboardLayout = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loadingChangePassword, setLoadingChangePassword] = useState(false);
	const [form] = useForm<ChangePasswordForm>();
	const { isAuthenticated, auth, loading, logout } = useFirebaseToken();

	if (loading) return null;

	const handleClickMenu: MenuProps['onClick'] = (e) => {
		switch (e.key) {
			case 'logout':
				logout();
				break;
			case 'change-password':
				setIsModalOpen(true);
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (values: ChangePasswordForm) => {
		setLoadingChangePassword(true);
		try {
			if (!auth) {
				throw new Error('Firebase Auth chưa khởi tạo');
			}
			const user = auth.currentUser;

			if (!user || !user.email) {
				throw new Error('User chưa đăng nhập');
			}

			const credential = EmailAuthProvider.credential(user.email, values.old);

			await reauthenticateWithCredential(user, credential);

			await updatePassword(user, values.new);

			showToast('Đổi mật khẩu thành công', 'success');
			setIsModalOpen(false);
			form.resetFields();
		} catch (error: any) {
			switch (error.code) {
				case 'auth/wrong-password':
					showToast('Mật khẩu cũ không đúng', 'error');
					break;
				case 'auth/weak-password':
					showToast('Mật khẩu mới quá yếu', 'error');
					break;
				case 'auth/requires-recent-login':
					showToast('Vui lòng đăng xuất và đăng nhập lại để đổi mật khẩu', 'error');
					break;
				case 'auth/network-request-failed':
					showToast('Mật khẩu cũ không chính xác', 'error');
					break;
				default:
					showToast('Đổi mật khẩu thất bại. Vui lòng thử lại', 'error');
					break;
			}
		} finally {
			setLoadingChangePassword(false);
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		form.resetFields();
	};

	return isAuthenticated ? (
		<>
			<div className='w-screen h-screen flex'>
				<div className='min-w-[280px] bg-[#2074be] rounded-xl shadow-xl flex flex-col'>
					<div className='flex justify-center'>
						<img src='/logo2.png' alt='Logo' className='w-28' />
					</div>
					<div className='flex-1 py-2'>
						<div className='flex flex-col gap-1'>
							<Link to={DASHBOARD_ROUTER.HOME}>
								<div className='flex items-center gap-2 text-white hover:bg-sky-600 px-6 py-[10px] rounded-md cursor-pointer'>
									<HugeiconsIcon icon={DashboardSquare02Icon} size={20} />
									<h4 className='text-base'>Trang chủ</h4>
								</div>
							</Link>
							<Link to={DASHBOARD_ROUTER.CATEGORY}>
								<div className='flex items-center gap-2 text-white hover:bg-sky-600 px-6 py-[10px] rounded-md cursor-pointer'>
									<HugeiconsIcon icon={CatalogueIcon} size={20} />
									<h4 className='text-base'>Danh mục</h4>
								</div>
							</Link>
							<Link to={DASHBOARD_ROUTER.PRODUCT}>
								<div className='flex items-center gap-2 text-white hover:bg-sky-600 px-6 py-[10px] rounded-md cursor-pointer'>
									<HugeiconsIcon icon={PackageIcon} size={20} />
									<h4 className='text-base'>Sản phẩm</h4>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='flex-1 flex flex-col'>
					<div className='rounded-md shadow h-[66px] flex items-center justify-end px-6'>
						<Dropdown
							menu={{
								items: userMenus,
								onClick: handleClickMenu,
							}}
						>
							<Avatar style={{ backgroundColor: '#2074be' }} size='default' icon={<HugeiconsIcon icon={UserIcon} size={24} />} className='cursor-pointer' />
						</Dropdown>
					</div>
					<div className='flex-1 p-4'>
						<div className='max-h-[calc(100vh-98px)] overflow-y-auto'>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
			<Modal title={<div className='text-lg'>Đổi mật khẩu</div>} closable={false} footer={null} open={isModalOpen} onCancel={handleCancel}>
				<Form form={form} layout='vertical' onFinish={handleSubmit} className='mt-3'>
					<Form.Item
						label='Mật khẩu cũ'
						name='old'
						rules={[
							{ required: true, message: 'Vui lòng nhập mật khẩu cũ' },
							{
								pattern: REGEX_VALIDATE.PASSWORD,
								message: 'Mật khẩu phải ≥ 8 ký tự, gồm chữ thường, chữ hoa, số và ký tự đặc biệt',
							},
						]}
					>
						<input type='text' className='h-[36px] w-full px-3 py-2 border rounded-md focus:outline-none sm:text-sm' />
					</Form.Item>
					<Form.Item
						label='Mật khẩu mới'
						name='new'
						rules={[
							{ required: true, message: 'Vui lòng nhập mật khẩu mới' },
							{
								pattern: REGEX_VALIDATE.PASSWORD,
								message: 'Mật khẩu phải ≥ 8 ký tự, gồm chữ thường, chữ hoa, số và ký tự đặc biệt',
							},
						]}
					>
						<input type='text' className='h-[36px] w-full px-3 py-2 border rounded-md focus:outline-none sm:text-sm' />
					</Form.Item>
					<div className='flex justify-center gap-4'>
						<button type='button' onClick={handleCancel} className='min-w-[100px] px-4 py-[6px] border rounded-md hover:border-[#2074be] hover:text-[#2074be]'>
							Hủy
						</button>
						<button type='submit' className='min-w-[100px] px-4 py-[6px] bg-[#2074be] hover:bg-sky-600 text-white rounded-md flex justify-center items-center' disabled={loadingChangePassword}>
							{loadingChangePassword ? <div className='h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin' /> : 'Lưu'}
						</button>
					</div>
				</Form>
			</Modal>
		</>
	) : (
		<Navigate to={AUTH_ROUTER.LOGIN} />
	);
};

export default DashboardLayout;
