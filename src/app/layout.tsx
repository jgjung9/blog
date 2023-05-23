import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

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
        <header>
          <h1>Gio's Blog</h1>
          <nav>
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </nav>
        </header>
        {children}
        <footer>Blog | All right reserved.</footer>
      </body>
    </html>
  );
}
