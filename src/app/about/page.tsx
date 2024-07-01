import React from 'react'
import {SlimPageContent} from '@/components/Layout/SlimPage'
import {PageTitle} from '@/components/Typography/PageTitle'

const AboutPage: React.FC = () => {
  return (
    <SlimPageContent>
      <PageTitle color={'text-About'}>About us</PageTitle>
      <p>Welcome to Egghead Studios, a web development team founded by Stephen Kernan and Brent Dolan.</p>
      <p>We specialize in creating websites that not only look great but actively contribute to your business growth. Our expertise lies in crafting beautiful, fast, and SEO-friendly websites using modern tools like NextJS, TypeScript, React, and Tailwind.</p>

      <h2 className={'text-About font-heading text-3xl'}>Our Approach</h2>

      <p>We believe that great web development starts with understanding your business goals. That&apos;s why we begin every project by diving deep into your objectives, ensuring that every line of code we write serves a purpose in driving your success.</p>

      <h2 className={'text-About font-heading text-3xl'}>What Sets Us Apart</h2>

      <ol>
        <li><strong className={'text-About'}>1. Business-First Mindset</strong>: We focus on the outcomes that matter to you, whether it&apos;s increasing online bookings, showcasing your brand, or optimizing your digital presence.</li>
        <li><strong className={'text-About'}>2. Tech Stack that Delivers</strong>: With our expertise in NextJS, TypeScript, React, and Tailwind, we create websites that are not just visually stunning, but also performant and SEO-optimized.</li>
        <li><strong className={'text-About'}>3. Data-Driven Decisions</strong>: Our experience with Mixpanel ensures that you can track and analyze your website&apos;s performance, making informed decisions to drive growth.</li>
      </ol>

      <h2 className={'text-About font-heading text-3xl'}>Our Track Record</h2>

      <p>We don&apos;t just build websites; we create digital solutions that drive real business results. For instance, our work with Bentley Chiropractic led to a 15% increase in online patient bookings, directly impacting their bottom line. From local businesses to creative projects, we tailor our approach to meet the unique needs of each client, ensuring that your digital presence not only looks great but also performs exceptionally.</p>

      <h2 className={'text-About font-heading text-3xl'}>Why Choose Us?</h2>

      Small businesses often struggle with the complexities of web marketing and optimization. That&apos;s where we come in. We bridge the gap between your business expertise and the digital world, creating web solutions that not only look great but also deliver tangible results.

      Whether you&apos;re looking to increase online conversions, improve your SEO, or simply establish a strong web presence, Egghead Studios is here to turn your digital dreams into reality.

      Ready to take your online presence to the next level? Let&apos;s chat about how we can help your business thrive in the digital space.
    </SlimPageContent>
  )
}

export default AboutPage
