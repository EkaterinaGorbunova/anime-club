import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anime Club',
  description:
    'Your favorite anime, all in one place. Explore a comprehensive list of anime! Find classic and new releases and discover your next anime obsession',
  other: {
    'theme-color': '#222222',
    'og:type': 'website',
    'og:title': 'Your Ultimate Anime Exploration Guide',
    'og:image': '/anime-social-media-preview.png',
    'og:url': 'https://animes-club.vercel.app',
    'og:site_name': 'Anime Club',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <main className='max-w-7xl mx-auto bg-[#0F1117]'>
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
