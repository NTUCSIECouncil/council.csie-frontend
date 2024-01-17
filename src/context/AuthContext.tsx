import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from '../lib/firebase/firebase';

interface AuthContextType {
  user: User | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    // console.log(user);
    return () => unsubscribe();
  }, [user])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  return useContext(AuthContext);
};
