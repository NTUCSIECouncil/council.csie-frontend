'use client';
import '@/styles/globals.css';
import '@/styles/color.css';
import NavBar from '@/components/NavBar';
import { AuthContextProvider } from '@/context/AuthContext';
import { type FC, type ReactNode } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '900',
  subsets: ['latin']
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        {...{
          ...roboto,
          style: {
            ...roboto.style,
            backgroundColor: 'var(--background)'
          }
        }}
      >
        <AuthContextProvider>
          <NavBar />
          <div>
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
