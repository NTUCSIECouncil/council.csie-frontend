import { type FC, type ReactNode, useContext, createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, signOut, updateProfile, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';

interface customRequestInit extends RequestInit {
  auth?: boolean;
};

interface AuthContextType {
  user: User | null | false;
  request?: (url: string, { auth, headers, ...options }?: customRequestInit) => Promise<Response | null>;
};

const authContext = createContext<AuthContextType>({ user: null });

export const AuthContextProvider: FC<{ children: ReactNode }> =
({ children }) => {
  const [user, setUser] = useState<User | null | false>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => { unsubscribe(); };
  }, []);

  const signIn = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    if (window.confirm(`
Please **DON'T** sign in with in-app browser like Instagram, Facebook or LINE browser. Google Oauth blocks access from insecure browsers.
On mobile devices, use Chrome or Safari instead.

請**勿**使用應用程式內建瀏覽器登入，如 IG、FB 或 LINE。Google Oauth 拒絕來自不安全瀏覽器的連線。
若為行動裝置，請在 Chrome 或 Safari 上登入。
    `.trim())) {
      await signInWithRedirect(auth, provider);
      window.location.reload();
    }
  };

  const logOut = async (): Promise<void> => {
    await signOut(auth);
  };

  const request = useCallback(async (url: string, {
    auth = true,
    headers = {},
    ...options
  }: customRequestInit = {}): Promise<Response | null> => {
    try {
      const realHeaders = new Headers(headers);
      if (user !== null && user !== false && auth) {
        realHeaders.set('Authorization', `Bearer ${await user.getIdToken()}`);
        // headers.Authorization = `Bearer ${await user.getIdToken()}`;
      }
      const newOptions: RequestInit = {
        headers: realHeaders, ...options
      };
      return await fetch(url, newOptions);
    } catch (error) {
      console.log(error);
      return null;
    }
  }, [user]);

  // const updateUser = async profile => {
  //   if (auth.currentUser !== null) {
  //     await updateProfile(auth.currentUser, profile);
  //     if ('displayName' in profile) {
  //       const res = await request('/api/me', { method: 'GET' } });
  //       if (!res.ok) {
  //         console.log(await res.text());
  //       }
  //     }
  //     window.location.reload();
  //     return res;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <authContext.Provider value={{ user, request }}>
      {children}
    </authContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  return useContext(authContext);
};
