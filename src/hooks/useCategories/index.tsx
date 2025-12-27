import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { useFirebase } from '../useFirebase';
import { mapReferenceByKey } from 'src/helpers';

export const useCategories = () => {
	const [categories, setCategories] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const { db } = useFirebase();

	useEffect(() => {
		if (!db) return;
		setLoading(true);
		const q = query(collection(db, 'category'), where('isDeleted', '==', false), orderBy('sortOrder', 'asc'));
		const unsub = onSnapshot(q, (snapshot) => {
			let data: Array<any> = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			data = mapReferenceByKey(data, {
				idKey: 'id',
				keyCheck: 'parentId',
				targetKey: 'parentCategory',
			});

			setCategories(data);
			setLoading(false);
		});

		return unsub;
	}, [db]);

	const isCategoryExists = useMemo(() => {
		return (key: string, value: string, excludeId?: string): boolean => {
			if (!value?.trim()) return false;

			const lowerValue = value.toLowerCase();

			return categories.filter((item: any) => !excludeId || item.id !== excludeId).some((item: any) => item[key]?.toString().toLowerCase() === lowerValue);
		};
	}, [categories]);

	return {
		categories,
		loading,
		isCategoryExists,
	};
};
