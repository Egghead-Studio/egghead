import React from 'react'
import type { Metadata } from 'next'
import {Anton, Space_Grotesk} from 'next/font/google'
import './globals.css'
import {clsx} from 'clsx'
import {Nav} from '@/components/Nav/Nav'
const anton = Anton({ subsets: ['latin'], weight: ['400'], variable: '--font-heading' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Egghead Studios',
  description: 'A creative agency specializing in web design and software development.',
  icons: '/final-logo-transparent.png',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'bg-background'}>
      <body className={clsx('px-4 lg:px-8 bg-background text-eggshell text-lg', spaceGrotesk.className, spaceGrotesk.variable, anton.className, anton.variable)}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
