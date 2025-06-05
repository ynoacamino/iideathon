import type { Metadata } from 'next';
import { Boogaloo } from 'next/font/google';
import './globals.css';
import metadataConfig from '@/config/metadata';

const boogaloo = Boogaloo({
  variable: '--font-boogaloo-sans',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${boogaloo.variable} antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}
