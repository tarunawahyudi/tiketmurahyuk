import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsappButton } from '@/components/whatsapp-button';
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tiket Murah Yuk - Jelajahi Indonesia dengan Mudah',
  description: 'Platform travel terpercaya untuk tiket pesawat, kereta api, dan paket perjalanan dengan harga terbaik.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextTopLoader />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsappButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}