import { Inter, Oswald, Playfair_Display } from 'next/font/google';

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  // preload: false,
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  // preload: false,
});
