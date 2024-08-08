import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t py-3 text-center text-xs">
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
            scroll={false}
            prefetch={false}
            href="/about"
            className="text-gray-800 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            replace={true}
            href="/product"
            className="text-gray-800 hover:underline"
          >
            Product
          </Link>
        </li>
      </ul>
      I&lsquo;m here to stay (Footer)
    </footer>
  );
};

export default Footer;
