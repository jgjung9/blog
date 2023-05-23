import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between m-4'>
      <Link href='/'>
        <h1>Gio's Blog</h1>
      </Link>
      <nav className='flex justify-between w-72'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}
