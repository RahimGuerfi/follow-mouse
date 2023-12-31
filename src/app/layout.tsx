import type { Metadata } from 'next';

import './globals.css';

import { Lato } from 'next/font/google';

import { cn } from '@/lib/utils';

export const fontSans = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900']
});

export const metadata: Metadata = {
  title: 'Follow The Mouse App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('min-h-screen', fontSans.variable)}>
      <body className="min-h-screen bg-stone-50">{children}</body>
    </html>
  );
}
