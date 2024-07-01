import React from 'react'
import {SlimPageContent} from '@/components/Layout/SlimPage'
import Image from 'next/image'
import {redirect} from 'next/navigation'
import {Project, projectsList} from '@/projectsList'
import {PageTitle} from '@/components/Typography/PageTitle'
import {LinkButton} from '@/components/Button/LinkButton'
import {EventName} from '@/events/types'

interface IndividualProjectPageProps {
  params: {
    projectSlug: string
  }
}

const IndividualProjectPage: React.FC<IndividualProjectPageProps> = ({ params }) => {
  const { projectSlug } = params
  const project: Project | undefined = projectsList.find((project) => project.slug === projectSlug)

  if (!project) {
    redirect('/uh-oh')
  }

  const firstParagraph: string = project.description[0]
  const remainingParagraphs: string[] = project.description.slice(1)

  return (
    <SlimPageContent>
      <div className={'bg-background sticky top-0 lg:top-16 py-4'}>
        <div className={'breadcrumbs text-sm'}>
          <ul>
            <li><a className={'underline'} href={'/projects'}>Projects</a></li>
            <li />
          </ul>
        </div>
        <div className={'flex flex-col gap-6'}>
          <PageTitle color={'text-Projects'}>{project.name}</PageTitle>
          <LinkButton
            href={project.url}
            eventName={EventName.ProjectVisitEvent}
            eventProperties={{project: project.name}}
          >
          Visit website
          </LinkButton>
        </div>
      </div>
      <p className={'text-xl'}>{firstParagraph}</p>
      <Image className={'my-4'} src={project.image} alt={`The website for ${project.name}`} width={'1000'} height={'300'} />
      {remainingParagraphs.map((paragraph: string, index: number) => (
        <p key={index} className={'text-xl'}>{paragraph}</p>
      ))}
    </SlimPageContent>
  )
}

export default IndividualProjectPage
