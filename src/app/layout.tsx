'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';
import { AuthContextProvider } from '../context/AuthContext';
import { type FC, type ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <NavBar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
