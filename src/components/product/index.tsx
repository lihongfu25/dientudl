import { Link } from 'react-router-dom';
import { IProduct } from 'src/constants/product';
interface IProductProps {
	product: IProduct;
}

const Product = ({ product }: IProductProps) => {
	return (
		<Link to={`/san-pham/${product.id}`}>
			<div className='flex flex-col rounded-lg group hover:translate-y-[-4px] transition-all ease duration-500'>
				<div className='overflow-hidden rounded-t-lg'>
					<div className={`transition-all ease duration-500 group-hover:scale-[1.1] bg-cover bg-center aspect-[4/3]`} style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
				</div>
				<div className='p-4 border-x border-b border-[#eaeaea] rounded-b-lg'>
					<h2 className='text-lg font-semibold'>{product.name}</h2>
					<p className='mt-2 text-red-500 font-semibold'>Liên hệ</p>
				</div>
			</div>
		</Link>
	);
};

export default Product;
