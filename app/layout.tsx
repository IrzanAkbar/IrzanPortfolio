import type { Metadata } from 'next';
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zann — Web Developer & AI Builder",
  description: "Portfolio Andi Irzan Akbar Hasanuddin, developer muda dari Indonesia yang membangun web apps dan AI tools.",
  openGraph: {
    title: "Zann | Developer Portfolio",
    description: "Portfolio Andi Irzan Akbar Hasanuddin, developer muda dari Indonesia yang membangun web apps dan AI tools.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body suppressHydrationWarning className="font-mono">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
