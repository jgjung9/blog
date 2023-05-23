import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

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
      <body className={inter.className + 'w-full'}>
        <Header />
        {children}
        <footer>Blog | All right reserved.</footer>
      </body>
    </html>
  );
}
