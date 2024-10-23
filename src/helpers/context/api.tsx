import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/helpers/firebase/firebase';

export const googleSignIn = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const logOut = async (): Promise<void> => {
  await signOut(auth);
};
