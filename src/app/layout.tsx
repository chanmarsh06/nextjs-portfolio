import '@/styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { ThemeProvider } from '../context/ThemeContext';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Chan Portfolio',
    template: '%s | Chan Portfolio'
  },
  description: 'Frontend Developer | React.js | Next.js | Tailwind CSS | Framer Motion',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Chan' }],
  creator: 'Chan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Chan Portfolio',
    description: 'Frontend Developer | React.js | Next.js | Tailwind CSS | Framer Motion',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4f46e5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300 overflow-x-hidden antialiased">
        <ThemeProvider>
          <ParticleBackground />
          <div className="relative flex flex-col min-h-screen bg-gradient-light dark:bg-gradient-dark transition-colors duration-300">
            <Header />
            <main className="relative z-10 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
