import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Providers from './providers';
import ThemeSwitcher from './themeswitcher';

const font = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhiram Rishi Prattipati',
  description: 'Portfolio Website',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>   
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        
      </body>
    </html>
  )
}
