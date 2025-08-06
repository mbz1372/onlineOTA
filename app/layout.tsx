import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkGenius - داشبورد مدیریت',
  description: 'داشبورد مدیریت LinkGenius',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 font-persian">
        {children}
      </body>
    </html>
  )
}