import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Krishna Mohanty | Full Stack Web Developer',
  description: 'Computer Science Undergraduate at KIIT University specializing in full-stack web development. Building scalable, performant web applications with React, Next.js, Node.js, and Firebase.',
  keywords: ['Krishna Mohanty', 'Full Stack Developer', 'Web Developer', 'KIIT University', 'React', 'Next.js', 'Node.js', 'Firebase', 'Portfolio'],
  authors: [{ name: 'Krishna Mohanty' }],
  creator: 'Krishna Mohanty',
  icons: {
    icon: '/favicon-icon.png',
    apple: '/favicon-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krishnamohanty.dev',
    siteName: 'Krishna Mohanty Portfolio',
    title: 'Krishna Mohanty | Full Stack Web Developer',
    description: 'Building scalable, performant web applications',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Mohanty | Full Stack Web Developer',
    description: 'Building scalable, performant web applications',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
