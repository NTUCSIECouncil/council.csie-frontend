import '@/styles/globals.css';
import NavBar from '@/ui/NavBar';
import { AuthContextProvider } from '@/context/AuthContext';
import { type FC, type ReactNode } from 'react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CSIE Council',
    default: 'CSIE Council'
  },
  description: 'The database of NTU CSIE.'
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-[#d4d2d5] bg-[#1c1c29]">
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
