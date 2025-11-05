import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IBreadcrumb } from 'src/constants/breadcrumb';

interface IBreadcrumbProps {
	breadcrumbs: Array<IBreadcrumb>;
}
const Breadcrumb = ({ breadcrumbs }: IBreadcrumbProps) => {
	return (
		<div className='flex items-center gap-1 mb-8'>
			{breadcrumbs.map((breadcrumb) =>
				!breadcrumb.active ? (
					<>
						<Link to={breadcrumb.path} key={breadcrumb.path} className='hover:text-[#2074be]'>
							{breadcrumb.name}
						</Link>
						<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
					</>
				) : (
					<>
						<span key={breadcrumb.path} className='text-[#2074be]'>
							{breadcrumb.name}
						</span>
					</>
				),
			)}
		</div>
	);
};

export default Breadcrumb;
