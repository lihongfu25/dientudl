import React, { useEffect } from 'react';
import { Product } from 'src/components';
import { IProduct } from 'src/constants';
import { useCategories, useProducts } from 'src/hooks';

const Home = () => {
	const [data, setData] = React.useState<Array<Record<string, any>>>([]);
	const { categories } = useCategories();
	const { findByCategoryId } = useProducts({ categories });

	useEffect(() => {
		document.title = 'Điện tử D&L';

		const data = categories.map((category) => ({
			...category,
			products: findByCategoryId(category.id).slice(0, 4),
		}));

		setData(data);
	}, [categories, findByCategoryId]);

	return (
		<div className='my-10'>
			<div className='flex flex-col gap-10'>
				{data?.map((category) => (
					<div className='flex flex-col gap-4' key={category?.id}>
						<h2 className='text-2xl font-semibold'>{category?.name}</h2>
						<div className='grid grid-cols-4 gap-4'>
							{category?.products?.map((product: IProduct) => (
								<Product key={product.id} product={product} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
