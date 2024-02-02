'use client';
import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';
import { AuthContextProvider } from '../context/AuthContext';
import { type FC, type ReactNode } from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthContextProvider>
          <NavBar />
          <div style={{ marginTop: '80px' }}>
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
