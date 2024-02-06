import { type FC, type ReactNode, useContext, createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';

interface CustomRequestOptions {
  auth?: boolean;
  headers?: HeadersInit;
  options?: RequestInit;
}

interface AuthContextType {
  user: User | null;
  request?: (url: string, { auth, headers, ...options }?: CustomRequestOptions) => Promise<Response>;
}

const authContext = createContext<AuthContextType>({ user: null });

export const AuthContextProvider: FC<{ children: ReactNode }> =
({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      (async () => {
        if (currentUser == null) {
          setUser(null);
          return;
        }

        let res = await fetch(`/api/users/${currentUser?.uid}`, {
          headers: {
            Authorization: `Bearer ${await currentUser.getIdToken()}`
          }
        });

        // If user is not currently exist in server DB, request to create it
        if (res.status === 404) {
          res = await fetch(`/api/users/${currentUser?.uid}`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${await currentUser.getIdToken()}`
            }
          });
        }

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
  }: CustomRequestOptions = {}) => {
    const realHeaders = new Headers(headers);
    if (user != null) {
      realHeaders.set('Authorization', `Bearer ${await user.getIdToken()}`);
      // headers.Authorization = `Bearer ${await user.getIdToken()}`;
    }
    const newOptions: RequestInit = {
      headers: realHeaders, ...options
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
