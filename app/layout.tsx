import Link from 'next/link';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans text-[0.9rem] antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-10">
            <header className="container">
              <div className="flex items-center justify-between border-b py-4">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="flex flex-col space-y-1 text-sm leading-none">
                    <div className="flex flex-col space-y-1 text-sm leading-none">
                      <span className="text-lg font-bold">Tim Twiest</span>
                      <span>Turns out I create, break, and fix things.</span>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center space-x-2">
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
