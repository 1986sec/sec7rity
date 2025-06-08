import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: '1986SEC - Siber Güvenlik. İstihbarat. Güç.',
  description: 'Profesyonel siber güvenlik hizmetleri: penetrasyon testleri, OSINT, red team operasyonları ve tehdit modellemesi. Dijital varlıklarınızı uzman güvenlik analizleri ile koruyun.',
  keywords: 'siber güvenlik, penetrasyon testi, OSINT, red team, tehdit modelleme, güvenlik denetimi, etik hacking, vulnerability assessment',
  authors: [{ name: '1986SEC' }],
  creator: '1986SEC',
  publisher: '1986SEC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://1986sec.xyz'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: '1986SEC - Siber Güvenlik. İstihbarat. Güç.',
    description: 'Profesyonel siber güvenlik hizmetleri: penetrasyon testleri, OSINT, red team operasyonları ve tehdit modellemesi.',
    url: 'https://1986sec.xyz',
    siteName: '1986SEC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1986SEC - Siber Güvenlik. İstihbarat. Güç.',
    description: 'Profesyonel siber güvenlik hizmetleri: penetrasyon testleri, OSINT, red team operasyonları ve tehdit modellemesi.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}