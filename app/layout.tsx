import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import './globals.css';

const display = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Soteria — Workforce Learning OS | Trainovate Technologies',
  description:
    'Soteria is a FedRAMP-aligned, compliance-first workforce learning OS built by Trainovate Technologies (SDVOSB). Train smarter. Comply faster. Perform better.',
  keywords: [
    'Soteria',
    'LMS',
    'Trainovate',
    'SDVOSB',
    'FedRAMP',
    'EHS',
    'Compliance Training',
    'Workforce Learning',
    'GovCon',
    'OSHA',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans bg-navy-800 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
