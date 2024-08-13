import '@/styles/globals.css';
import NavBar from '@/ui/nav-bar';
import { AuthContextProvider } from '@/context/auth-context';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | CSIE Council',
    default: 'CSIE Council'
  },
  description: 'The database of NTU CSIE.'
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body className="text-[#d4d2d5] bg-[#1c1c29] flex flex-col min-h-screen">
        <AuthContextProvider>
          <NavBar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
