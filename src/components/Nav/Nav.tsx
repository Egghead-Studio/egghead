'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import {clsx} from 'clsx'
import {Menu} from 'react-feather'

export const NavLogo: React.FC = () => {
  return (
    <a href="/" className={clsx('text-5xl')}>Egghead Studios</a>
  )
}

const NavLinks: React.FC = () => {
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
    // {
    //   path: '/referrals',
    //   label: 'Referrals',
    //   colorClass: 'text-Referrals',
    //   hoverClass: 'hover:text-Referrals'
    // },
  ]

  const currentPathName = usePathname()
  return (
    <>
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
    </>
  )
}

export const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 font-heading lg:sticky lg:top-0 bg-background">
      {/* Desktop Nav */}
      <div className="w-full gap-6 text-3xl hidden lg:flex">
        <NavLogo />
        <div className="flex gap-6 items-center ml-auto">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="navbar drawer drawer-end lg:hidden bg-background">
        <input id="sidenav" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex gap-2 items-center justify-between">
          {/* Page content here */}
          <NavLogo />
          <label htmlFor="sidenav" className="btn bg-transparent hover:bg-background border-transparent hover:border-transparent stroke-primary drawer-button"><Menu /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidenav" aria-label="close sidebar" className="drawer-overlay" />
          <div className="menu p-4 w-80 min-h-full bg-background text-eggshell text-3xl">
            <span className={'mb-4'}>
              <NavLogo />
            </span>
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}
