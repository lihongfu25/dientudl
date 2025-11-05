import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Breadcrumb } from 'src/components';
import { RootState } from 'src/redux/store';

const PageLayout = () => {
	const breadcrumbs = useSelector((state: RootState) => state.breadcrumb.items);
	useEffect(() => {
		const activeBreadcrumb = breadcrumbs.find((breadcrumb) => breadcrumb.active);
		if (activeBreadcrumb) {
			document.title = `${activeBreadcrumb.name} – Điện tử D&L`;
		}
	}, [breadcrumbs]);
	return (
		<div className=''>
			<Breadcrumb breadcrumbs={breadcrumbs} />
			<Outlet />
		</div>
	);
};

export default PageLayout;
