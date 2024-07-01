'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
import {clsx} from 'clsx'
import {Project} from '@/projectsList'
import Link from 'next/link'


interface ProjectCardProps {
  project: Project
  spanClasses: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, spanClasses }) => {
  const router = useRouter()

  const redirectToProject = () => {
    void router.push(`/projects/${project.slug}`)
  }

  return (
    <div
      onClick={redirectToProject}
      className={clsx(
        'flex',
        'flex-col',
        'bg-Projects',
        'transition-colors',
        'text-background',
        'hover:bg-background-light hover:text-white hover:saturate-0',
        'font-bold',
        'text-3xl',
        'cursor-pointer',
        'h-full',
        'overflow-hidden',
        spanClasses
      )}
    >
      <Link href={`/projects/${project.slug}`} className={'h-full'}>
        <h2 className={'p-4'}>{project.name}</h2>
        <div className={'w-full h-full min-h-56 bg-contain'} style={{ backgroundImage: `url(${project.image})`}} />
      </Link>
    </div>
  )
}
