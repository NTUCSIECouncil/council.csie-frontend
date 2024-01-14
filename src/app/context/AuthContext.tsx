import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, 
  GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../lib/firebase/firebase';

const AuthContext = createContext<any>(null);
// I don't know which type is correct.

export const AuthContextProvider = ({
  children, 
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null);
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    // console.log(user);
    return () => unsubscribe();
  }, [user])

  return (
    <AuthContext.Provider value = {{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
}