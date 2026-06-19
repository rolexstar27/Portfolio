import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Alex Chen | Creative Developer',
  description:
    'Portfolio of Alex Chen — a creative full-stack developer crafting beautiful, performant web experiences with modern technologies.',
  keywords: ['developer', 'portfolio', 'react', 'next.js', 'frontend', 'full-stack'],
  authors: [{ name: 'Alex Chen' }],
  openGraph: {
    title: 'Alex Chen | Creative Developer',
    description: 'Crafting beautiful, performant web experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-dark-950 text-dark-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
