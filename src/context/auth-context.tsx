'use client';
import { useContext, createContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { type AuthRequestInit, type AuthRequest } from '@/types/auth-request';

interface AuthContextProps {
  currentUser: User | null;
  isUserLoaded: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  request: AuthRequest;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  isUserLoaded: false,
  signIn: async () => { },
  logOut: async () => { },
  request: async (url: string, request: RequestInit = {}): Promise<Response | null> => {
    try {
      return await fetch(url, request);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
});

export const AuthContextProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isUserLoaded, setIsUserLoaded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null) {
        setCurrentUser(null);
      } else {
        (async () => {
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

          if (res.ok) setCurrentUser(currentUser);
        })().catch(err => {
          console.error('auth error');
          console.error(err);
        });
      }
      setIsUserLoaded(true);
    });
    // console.log(user);
    return unsubscribe;
  }, []);

  const signIn = async (): Promise<void> => {
    setIsUserLoaded(false);
    const provider = new GoogleAuthProvider();
    if (window.confirm(`
Please **DON'T** sign in with in-app browser like Instagram, Facebook or LINE browser. Google Oauth blocks access from insecure browsers.
On mobile devices, use Chrome or Safari instead.

請**勿**使用應用程式內建瀏覽器登入，如 IG、FB 或 LINE。Google Oauth 拒絕來自不安全瀏覽器的連線。
若為行動裝置，請在 Chrome 或 Safari 上登入。
    `.trim())) {
      await signInWithPopup(auth, provider);
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
  }: AuthRequestInit = {}): Promise<Response | null> => {
    try {
      const realHeaders = new Headers(headers);
      if (isUserLoaded && currentUser !== null && auth) {
        realHeaders.set('Authorization', `Bearer ${await currentUser.getIdToken()}`);
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
  }, [isUserLoaded, currentUser]);

  return (
    <AuthContext.Provider value={{
      currentUser,
      isUserLoaded,
      signIn,
      logOut,
      request
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextProps => {
  return useContext(AuthContext);
};
