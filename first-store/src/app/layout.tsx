import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/shared/Navbar';
import UserLine from '@/components/shared/UserLine';

export const metadata: Metadata = {
  title: 'My First Store',
  description: 'the first store that I want to build with nextJS and TS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header>
          <UserLine />
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
