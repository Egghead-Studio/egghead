'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import {clsx} from 'clsx'

export const Nav: React.FC = () => {
  'use client'
  const navLinks = [
    {
      path: '/projects',
      label: 'Projects',
      colorClass: 'text-Projects',
      hoverClass: 'hover:text-Projects'
    },
    {
      path: '/about',
      label: 'About',
      colorClass: 'text-About',
      hoverClass: 'hover:text-About'
    },
    {
      path: '/referrals',
      label: 'Referrals',
      colorClass: 'text-Referrals',
      hoverClass: 'hover:text-Referrals'
    },
  ]

  const currentPathName = usePathname()

  return (
    <nav className="flex justify-between items-center py-4 font-heading">
      <a href="/" className={clsx('text-5xl')}>Egghead Studios</a>
      <div className="flex gap-6 text-3xl">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={clsx(
              'transition-colors',
              link.hoverClass,
              currentPathName.startsWith(link.path) && link.colorClass
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
