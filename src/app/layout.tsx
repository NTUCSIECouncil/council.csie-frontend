'use client';
import '@/styles/globals.css';
import '@/styles/color.css';
import NavBar from '@/components/NavBar';
import { AuthContextProvider } from '@/context/AuthContext';
import { type FC, type ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
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
