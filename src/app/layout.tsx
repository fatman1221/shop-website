import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '环球贸易进出口有限公司',
  description: '专业的百货类产品跨境进出口贸易公司，致力于为客户提供优质的产品和服务',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
