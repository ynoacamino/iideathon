import type { Metadata } from 'next';
import { Boogaloo } from 'next/font/google';
import './globals.css';
import metadataConfig from '@/config/metadata';

const boogaloo = Boogaloo({
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
        className={`${boogaloo.className} antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}
