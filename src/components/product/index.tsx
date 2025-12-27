import { Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ISpecification } from 'src/constants';
import { IProduct } from 'src/constants/product';
interface IProductProps {
	product: IProduct;
}

const Product = ({ product }: IProductProps) => {
	const [specifications, setSpecifications] = useState<ISpecification[]>([]);

	useEffect(() => {
		if (!product || !product.specifications || !product.specifications.length) {
			setSpecifications([]);
			return;
		}

		const specifications = product.specifications.filter((specification) => specification.showInCard);
		setSpecifications(specifications);
	}, [product]);

	return (
		<Link to={`/san-pham/${product.id}`}>
			<div className='flex flex-col rounded-lg group hover:translate-y-[-4px] transition-all ease duration-500 border border-[#eaeaea] overflow-hidden'>
				<div className=''>
					<div className={`transition-all ease duration-500 bg-cover bg-center aspect-[4/3]`} style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
				</div>
				<div className='p-4 flex flex-col gap-2'>
					<Tooltip title={product.name}>
						<h2 className='text-lg leading-1.5 font-semibold line-clamp-2'>{product?.name}</h2>
					</Tooltip>
					<div className='text-xs flex flex-col gap-1'>
						{specifications?.map((specification) => (
							<p key={specification.key} className='mb-0 line-clamp-1'>
								<span>{specification.key}</span>:{' '}
								<Tooltip title={specification.value}>
									<span>{specification.value}</span>
								</Tooltip>
							</p>
						))}
					</div>
					<p className='mt-2 text-red-500 font-semibold'>Liên hệ</p>
				</div>
			</div>
		</Link>
	);
};

export default Product;
