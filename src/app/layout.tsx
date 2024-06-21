import type { Metadata } from 'next';
// import { Inter, Playfair_Display } from 'next/font/google';
import { oswald } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
//   // preload: false,
// });

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-playfair-display',
//   // preload: false,
// });

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
    // <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
      <body
        className={`${oswald.className} p-4 min-h-screen flex flex-col bg-gray-100`}
      >
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          I&lsquo;m here to stay (Footer)
        </footer>
      </body>
    </html>
  );
}
