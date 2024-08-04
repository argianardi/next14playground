import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-gray-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            prefetch={false}
            className="text-gray-800 hover:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            prefetch={false}
            className="text-gray-800 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/product" className="text-gray-800 hover:underline">
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
