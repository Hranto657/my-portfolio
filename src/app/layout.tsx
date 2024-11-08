import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Hrant Simonyan',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto w-full max-w-lg bg-[url('/assets/bg-explosion.png')] bg-cover bg-center bg-no-repeat px-0 antialiased sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg`}
      >
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
