import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moe Kyaw Aung | Senior Android Engineer — Blueprint Portfolio',
  description: 'Senior Android Engineer portfolio built with engineering blueprint design principles. Precision grid layouts, technical diagrams, and AI-powered architecture breakdowns.',
  keywords: [
    'Android Engineer',
    'Kotlin',
    'Jetpack Compose',
    'Clean Architecture',
    'Blueprint Design',
    'Engineering Portfolio',
    'Moe Kyaw Aung',
  ],
  authors: [{ name: 'Moe Kyaw Aung' }],
  creator: 'Moe Kyaw Aung',
  openGraph: {
    title: 'Moe Kyaw Aung | Senior Android Engineer',
    description: 'Engineering blueprint portfolio — precision, architecture, and technical excellence.',
    url: 'https://moekyawaung.dev',
    siteName: 'Moe Kyaw Aung — Engineering Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moe Kyaw Aung | Senior Android Engineer',
    description: 'Engineering blueprint portfolio — precision, architecture, and technical excellence.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F0E8] text-[#1E3A5F] antialiased">
        {children}
      </body>
    </html>
  );
}
