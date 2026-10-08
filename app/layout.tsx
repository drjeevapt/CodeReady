import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '../lib/context/AppContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CodeReady — Medical Coding Practice & Job Readiness',
  description:
    'Practice realistic medical coding cases, improve your coding judgment, and measure your job readiness in ICD-10-CM Orthopedics & Rehabilitation.',
  keywords: [
    'medical coding practice',
    'ICD-10-CM',
    'medical coding fresher assessment',
    'orthopedic coding cases',
    'job readiness score',
    'coding judgment test',
  ],
  openGraph: {
    title: 'CodeReady — Medical Coding Practice & Job Readiness',
    description:
      'Stop memorizing codes. Start practicing decisions with real-world clinical documentation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-surface-bg text-content-primary antialiased selection:bg-teal-100 selection:text-teal-900">
        <AppProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
