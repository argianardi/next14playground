'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={pathname === '/' ? 'text-blue-700' : 'text-gray-800'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            prefetch={false}
            className={pathname === '/blog' ? 'text-blue-700' : 'text-gray-800'}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            prefetch={false}
            className={
              pathname === '/about' ? 'text-blue-700' : 'text-gray-800'
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/product"
            className={
              pathname === '/product' ? 'text-blue-700' : 'text-gray-800'
            }
          >
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
