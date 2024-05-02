'use client';
import '@/styles/globals.css';
import '@/styles/color.css';
import NavBar from '@/components/NavBar';
import { AuthContextProvider } from '@/context/AuthContext';
import { type FC, type ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--background)' }}>
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
