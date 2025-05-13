import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import MainLayout from './components/MainLayout'
import Navbar from './components/Navbar'
import './globals.css'
import TanstackQueryProvider from './providers/TanstackQueryProvider'
import AppTheme from './theme/Theme'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Chatbot',
  description: 'Created by determination',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackQueryProvider>
          <AppTheme>
            <MainLayout>
              <Navbar />

              {children}
            </MainLayout>
          </AppTheme>
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
