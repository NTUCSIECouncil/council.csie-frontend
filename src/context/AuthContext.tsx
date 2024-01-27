import { type FC, type ReactNode, useContext, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';

interface AuthContextType {
  user: User | null
}

const authContext = createContext<AuthContextType>({ user: null });

export const AuthContextProvider: FC<{ children: ReactNode }> =
({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // console.log(user);
    return () => { unsubscribe(); };
  }, [user]);

  return (
    <authContext.Provider value={{ user }}>
      {children}
    </authContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  return useContext(authContext);
};
