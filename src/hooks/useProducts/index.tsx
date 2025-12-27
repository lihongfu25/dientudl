import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useFirebase } from '../useFirebase';

interface Props {
	categories?: any[];
}

export const useProducts = ({ categories }: Props) => {
	const [products, setProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const { db } = useFirebase();

	useEffect(() => {
		if (!db) return;
		setLoading(true);
		const q = query(collection(db, 'product'), where('isDeleted', '==', false), orderBy('createdAt', 'desc'));
		const unsub = onSnapshot(
			q,
			(snapshot) => {
				let data: Array<any> = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				if (categories && categories.length > 0) {
					data = data.map((item) => {
						const category = categories.find((c) => c.id === item.categoryId);
						return {
							...item,
							category,
						};
					});
				}

				setProducts(data);
				setLoading(false);
			},
			(error) => {
				console.error(error);
				setLoading(false);
			},
		);

		return unsub;
	}, [db, categories]);

	const findById = useCallback((id: string) => products.find((item) => item.id === id), [products]);

	const findByCategoryId = useCallback((categoryId: string) => products.filter((item) => item.categoryId === categoryId), [products]);

	return {
		products,
		loading,
		findById,
		findByCategoryId,
	};
};
