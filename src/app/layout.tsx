'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';
import { AuthContextProvider } from '../context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <NavBar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
