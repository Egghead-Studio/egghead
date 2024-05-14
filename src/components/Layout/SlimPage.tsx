import React from 'react'
import {PageContent} from '@/components/Layout/Page'

interface SlimPageProps {
  children?: React.ReactNode
}

export const SlimPageContent: React.FC<SlimPageProps> = ({ children }) => {
  return (
    <PageContent className="md:w-9/12 lg:w-6/12 mx-auto">
      {children}
    </PageContent>
  )
}
