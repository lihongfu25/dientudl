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
						<Link to={breadcrumb.path} key={Math.random()} className='hover:text-[#2074be]'>
							{breadcrumb.name}
						</Link>
						<HugeiconsIcon key={Math.random()} icon={ArrowRight01Icon} size={14} />
					</>
				) : (
					<>
						<span key={Math.random()} className='text-[#2074be]'>
							{breadcrumb.name}
						</span>
					</>
				),
			)}
		</div>
	);
};

export default Breadcrumb;
