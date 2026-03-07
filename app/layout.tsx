import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Habeeba Faiza | International Education & Admissions Specialist',
  description: 'Experienced Admission Officer specializing in international higher education, university admissions processing, and student guidance. Trusted by leading UK universities.',
  keywords: 'international education, university admissions, admission officer, higher education, student counseling, UK universities',
  authors: [{ name: 'Habeeba Faiza' }],
  openGraph: {
    title: 'Habeeba Faiza | International Education & Admissions Specialist',
    description: 'Experienced Admission Officer specializing in international higher education, university admissions processing, and student guidance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
