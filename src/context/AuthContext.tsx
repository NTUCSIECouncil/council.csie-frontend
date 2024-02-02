import { type FC, type ReactNode, useContext, createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';

interface AuthContextType {
  user: User | null;
}

const authContext = createContext<AuthContextType>({ user: null });

export const AuthContextProvider: FC<{ children: ReactNode }> =
({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      (async () => {
        console.log(currentUser);
        if (currentUser == null) {
          setUser(null);
          return;
        }
        const res = await fetch('/api/users', {
          headers: {
            Authorization: `Bearer ${await currentUser.getIdToken()}`
          }
        });
        console.log(res);
        if (res.ok) setUser(currentUser);
        else console.error('auth error');
      })().catch(err => { console.error(err); });
    });
    // console.log(user);
    return () => { unsubscribe(); };
  }, []);

  const request = useCallback(async (url: string, {
    auth = true,
    headers = {},
    ...options
  } = {}) => {
    if (user != null) {
      headers.Authorization = `Bearer ${await user.getIdToken()}`;
    }
    const newOptions: RequestInfo = {
      headers, ...options
    };
    return await fetch(url, newOptions);
  }, [user]);

  return (
    <authContext.Provider value={{ user, request }}>
      {children}
    </authContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  return useContext(authContext);
};
