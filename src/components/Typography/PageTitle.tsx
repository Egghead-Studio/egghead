import React from 'react'
import {clsx} from 'clsx'

interface PageTitleProps {
  color: string
  children: React.ReactNode
}

export const PageTitle: React.FC<PageTitleProps> = ({ color, children }) => {
  return (
    <h1 className={clsx('text-6xl font-heading', color)}>{children}</h1>
  )
}
