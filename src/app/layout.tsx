import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
// const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})

export const metadata: Metadata = {
  title: 'Next 14 Playground',
  description: 'Next 14 Playground',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
        <link
          rel="icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/icon.png"
          type="image/png"
          sizes="16x16"
        />
      </head>
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
}
