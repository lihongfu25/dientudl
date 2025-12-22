import { useCallback, useEffect, useState } from 'react';
import { getAuth, onIdTokenChanged, User, IdTokenResult, signOut, Auth } from 'firebase/auth';
import { getApps } from 'firebase/app';

interface FirebaseTokenState {
	user: User | null;
	token: string | null;
	tokenResult: IdTokenResult | null;
	isAuthenticated: boolean;
	isTokenExpired: boolean;
	loading: boolean;
	auth: Auth | null;
	logout: () => Promise<void>;
}

export const useFirebaseToken = (): FirebaseTokenState => {
	const [state, setState] = useState<Omit<FirebaseTokenState, 'logout'>>({
		user: null,
		token: null,
		tokenResult: null,
		isAuthenticated: false,
		isTokenExpired: true,
		loading: true,
		auth: null,
	});

	const logout = useCallback(async () => {
		if (!getApps().length) return;

		const auth = getAuth();
		await signOut(auth);
	}, []);

	useEffect(() => {
		if (!getApps().length) {
			setState({
				user: null,
				token: null,
				tokenResult: null,
				isAuthenticated: false,
				isTokenExpired: true,
				auth: null,
				loading: false,
			});
			return;
		}

		const auth = getAuth();

		const unsubscribe = onIdTokenChanged(auth, async (user) => {
			if (!user) {
				setState({
					user: null,
					token: null,
					tokenResult: null,
					isAuthenticated: false,
					isTokenExpired: true,
					auth: null,
					loading: false,
				});
				return;
			}

			const token = await user.getIdToken();
			const tokenResult = await user.getIdTokenResult();

			const expired = new Date(tokenResult.expirationTime).getTime() < Date.now();

			setState({
				user,
				token,
				tokenResult,
				isAuthenticated: true,
				isTokenExpired: expired,
				auth,
				loading: false,
			});
		});

		return () => unsubscribe();
	}, []);

	return { ...state, logout };
};
