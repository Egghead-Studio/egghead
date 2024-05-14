import React from 'react'
import {Project, projectsList} from '@/projectsList'
import {ProjectCard} from '@/components/ProjectsGrid/ProjectCard'


function getSpanClasses(index: number) {
  switch (index % 5) {
  case 0:
    return 'col-span-full row-span-1 lg:col-span-8 lg:row-span-2'
  case 1:
    return 'col-span-full row-span-1 lg:col-span-4 lg:row-span-1'
  case 2:
    return 'col-span-full row-span-1 lg:col-span-4 lg:row-span-1'
  case 3:
    return 'col-span-full row-span-1 lg:col-span-4 lg:row-span-1'
  case 4:
    return 'col-span-full row-span-1 lg:col-span-4 lg:row-span-1'
  default:
    return ''
  }
}

export const ProjectsGrid: React.FC = () => {
  return (
    <div className={'grid gap-8 grid-cols-12'}>
      {projectsList.map((project: Project, index : number) => (
        <ProjectCard key={project.slug} project={project} spanClasses={getSpanClasses(index)} />
      ))}
    </div>
  )
}
