import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import MainLayout from './components/MainLayout'
import './globals.css'
import NextAuthProvider from './providers/NextAuthProvider'
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
        <NextAuthProvider>
          <TanstackQueryProvider>
            <AppTheme>
              <MainLayout>{children}</MainLayout>
            </AppTheme>
          </TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
