import '@/styles/globals.css';
import '@/styles/color.css';
import NavBar from '@/components/NavBar';
import { AuthContextProvider } from '@/context/AuthContext';
import { type FC, type ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CSIE Council',
    default: 'CSIE Council'
  },
  description: 'The database of NTU CSIE.'
};

const roboto = Roboto({
  weight: '400',
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
