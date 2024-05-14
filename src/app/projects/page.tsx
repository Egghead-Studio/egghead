import React from 'react'
import {ProjectsGrid} from '@/components/ProjectsGrid/ProjectsGrid'
import {PageContent} from '@/components/Layout/Page'

const ProjectsPage: React.FC = () => {
  return (
    <PageContent className={'md:w-10/12 lg:w-9/12 mx-auto'}>
      <ProjectsGrid />
    </PageContent>
  )
}

export default ProjectsPage
