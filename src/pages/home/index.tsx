import React from 'react';
import { Product } from 'src/components';
import { IProduct } from 'src/constants';

const mockProducts: Array<IProduct> = [
	{
		id: Math.random(),
		name: '5705BPSX1052',
		thumbnail: '/images/5705BPSX1052/z7165280149540_f7a0bc17208c73b72d7dd7814907de96.jpg',
	},
	{
		id: Math.random(),
		name: '5705BPSX1052',
		thumbnail: '/images/5705BPSX1052/z7165280149540_f7a0bc17208c73b72d7dd7814907de96.jpg',
	},
	{
		id: Math.random(),
		name: '5705BPSX1052',
		thumbnail: '/images/5705BPSX1052/z7165280149540_f7a0bc17208c73b72d7dd7814907de96.jpg',
	},
	{
		id: Math.random(),
		name: '5705BPSX1052',
		thumbnail: '/images/5705BPSX1052/z7165280149540_f7a0bc17208c73b72d7dd7814907de96.jpg',
	},
];

const Home = () => {
	return (
		<div className='my-10'>
			{/* <div className='grid grid-cols-4 gap-4'>
				{mockProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div> */}
			<p className='italic text-[#3a3a3a]'>Đang cập nhật...</p>
		</div>
	);
};

export default Home;
