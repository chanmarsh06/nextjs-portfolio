import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';

export const metadata = {
  title: 'Chan Portfolio',
  description: 'Frontend Developer | React.js | Next.js | Tailwind CSS | Framer Motion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <AnimatedBackground />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
