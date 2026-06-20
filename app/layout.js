import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Hay Mar Maw | Creative Developer',
  description:
    'Portfolio of Hay Mar Maw — a creative full-stack developer crafting beautiful, performant web experiences with modern technologies.',
  keywords: ['developer', 'portfolio', 'react', 'next.js', 'frontend', 'full-stack'],
  authors: [{ name: 'Hay Mar Maw' }],
  openGraph: {
    title: 'Hay Mar Maw | Creative Developer',
    description: 'Crafting beautiful, performant web experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-white dark:bg-dark-950 text-gray-900 dark:text-dark-100 antialiased transition-colors duration-500`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
