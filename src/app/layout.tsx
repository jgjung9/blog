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
      <body className={inter.className}>
        <header>Gio's Blog</header>
        <nav>
          <Link href='/'>home</Link>
          <Link href='/about'>about</Link>
          <Link href='/posts'>posts</Link>
          <Link href='/contact'>contact</Link>
        </nav>
        {children}
        <footer>Blog | All right reserved.</footer>
      </body>
    </html>
  );
}
