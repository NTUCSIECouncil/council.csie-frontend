import { User as FirebaseUser } from "firebase/auth";
import {
  signInWithPopup, signOut, GoogleAuthProvider, User
} from "firebase/auth";
import { auth } from '../lib/firebase/firebase';

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}

export const logOut = () => {
  signOut(auth);
}