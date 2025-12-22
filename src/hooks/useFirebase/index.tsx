import { initializeApp, type FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firebaseConfig from 'src/config/firebase';

export const useFirebase = () => {
	const [db, setDb] = useState<Firestore | undefined>(undefined);
	const [app, setApp] = useState<FirebaseApp | undefined>(undefined);
	const [auth, setAuth] = useState<Auth | undefined>(undefined);

	useEffect(() => {
		const firebaseApp = initializeApp(firebaseConfig);
		const firestoreDb = getFirestore(firebaseApp);
		const firebaseAuth = getAuth(firebaseApp);
		setApp(firebaseApp);
		setDb(firestoreDb);
		setAuth(firebaseAuth);
	}, []);
	return { db, app, auth };
};
