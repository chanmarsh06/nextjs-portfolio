import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';

export const metadata = {
  title: 'Chan Portfolio',
  description: 'Frontend Developer | React.js | Next.js | Tailwind CSS | Framer Motion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
