import { type Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';
import NavBar from '@/components/nav-bar';
import ScrollToTopButton from '@/components/scroll-to-top';
import { AuthContextProvider } from '@/helpers/context/auth-context';

export const metadata: Metadata = {
  title: {
    template: '%s | CSIE Council',
    default: 'CSIE Council',
  },
  description: 'The database of NTU CSIE.',
};

const RootLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <html lang="en">
      <body className="text-[#d4d2d5] bg-[#1c1c29] flex flex-col min-h-screen">
        <AuthContextProvider>
          <NavBar />
          <div className="grow flex justify-center items-center">
            {children}
          </div>
          <ScrollToTopButton />
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
