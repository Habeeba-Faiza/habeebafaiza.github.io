import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://habeeba-faiza.github.io'),
  title: 'Habeeba Faiza | International Education & Admissions Specialist',
  description:
    'Experienced admission officer specializing in international higher education, UK university admissions, and student recruitment operations.',
  keywords: [
    'international admissions',
    'UK university admissions',
    'education consulting',
    'student recruitment',
    'admissions operations',
    'CRM admissions management',
  ],
  authors: [{ name: 'Habeeba Faiza' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Habeeba Faiza | International Education & Admissions Specialist',
    description:
      'Experienced admission officer specializing in international higher education, UK university admissions, and student recruitment operations.',
    url: 'https://habeeba-faiza.github.io',
    siteName: 'Habeeba Faiza Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habeeba Faiza | International Education & Admissions Specialist',
    description:
      'Experienced admission officer specializing in international higher education, UK university admissions, and student recruitment operations.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
