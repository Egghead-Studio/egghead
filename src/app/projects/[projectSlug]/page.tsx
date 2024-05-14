import React from 'react'
import {SlimPageContent} from '@/components/Layout/SlimPage'
import Image from 'next/image'
import {redirect} from 'next/navigation'
import {Project, projectsList} from '@/projectsList'
import {PageTitle} from '@/components/Typography/PageTitle'

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
      <PageTitle color={'text-Projects'}>{project.name}</PageTitle>
      <p className={'text-xl'}>{firstParagraph}</p>
      <Image className={'my-4'} src={project.image} alt={`The website for ${project.name}`} width={'1000'} height={'300'} />
      {remainingParagraphs.map((paragraph: string, index: number) => (
        <p key={index} className={'text-xl'}>{paragraph}</p>
      ))}
    </SlimPageContent>
  )
}

export default IndividualProjectPage
