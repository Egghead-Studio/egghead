import React from 'react'
import {clsx} from 'clsx'

interface PageProps {
  className?: string
  children?: React.ReactNode
}

export const PageContent: React.FC<PageProps> = ({ children, className = '' }) => {
  return (
    <div className={clsx('flex flex-col gap-4 my-8', className)}>
      {children}
    </div>
  )
}
