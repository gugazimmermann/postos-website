'use client';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer, Drawer } from './components/layout';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const app = initializeApp(firebaseConfig);
  if (process.env.NODE_ENV === 'production') {
    getAnalytics(app);
  }
  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/android-icon-96x96.png' />
        <meta name='theme-color' content='#f59e0b' />
        <meta name='apple-mobile-web-app-status-bar' content='#f59e0b' />
        <meta name='robots' content='all' />
        <meta name='googlebot' content='index,follow' />
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
