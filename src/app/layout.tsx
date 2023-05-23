import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog',
  description: 'Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className + ' w-full max-w-screen-2xl flex flex-col m-auto'
        }
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
