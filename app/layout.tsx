import type {Metadata} from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'EstateVista | Real Estate & Properties',
  description: 'Find your dream home, invest in plots, and explore new projects in Pakistan.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#2D2D2D] bg-[#F9F7F2]">{children}</body>
    </html>
  );
}
