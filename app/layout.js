'use client';

import { useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header, Footer, Drawer } from './components/layout';

const inter = Inter({ subsets: ['latin'] });

const TITLE = process.env.NEXT_PUBLIC_TITLE || '';
const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION || '';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/android-icon-96x96.png' />
        <meta name='theme-color' content='#f59e0b' />
        <meta name='apple-mobile-web-app-status-bar' content='#f59e0b' />
      </head>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <Header toggleDrawer={toggleDrawer} />
          <main className='flex flex-grow flex-col items-center justify-start'>{children}</main>
          <Footer />
        </div>
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </body>
    </html>
  );
}
