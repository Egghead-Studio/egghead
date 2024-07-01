export interface Project {
  slug: string // Treat this as the primary key since we don't have a DB
  name: string
  url: string
  image: string
  description: string[] // This is list of paragraphs
}

export const projectsList: Project[] = [
  {
    slug: 'bentley-chiropractic',
    name: 'Bentley Chiropractic',
    url: 'https://bentleychiropracticstl.com/',
    image: '/bentley-chiropractic.jpg',
    description: [
      'We worked chiropractor Dr. Matthew Bentley to create a website that would help him reach more patients in the St. Louis area. The website is built with Next.js and Tailwind CSS and is hosted on Netlify.',
      'Dr. Bentley\'s primary goal was to increase the number of new patients he sees each month. Our strategy was to drive top-of-funnel leads into his practice so that his high conversion rate would maximize impact on his business. One month after launch, we saw a 15% increase in online new patient bookings - marking a 25% increase in monthly revenue.',
      'Given that Dr. Bentley\'s practice is relatively new (as is his online presence), it was also important to give him the tools to analyze his marketing campaigns to maximize returns given a tight budget. We gave him access to the popular product-analytics platform Mixpanel and configured a dashboard which shows him key traffic patterns and conversion rates split by marketing campaign so that he can make data-driven decisions about his business.',
      'As one of only two Gonstead chiropractors in the St. Louis area, he also wanted to make it easier for prospective patients to find information about his practice and the services he offers. By making new patients\' common questions and concerns more easily discoverable, we increased the discoverability of his website while maintaining a 4% conversion rate on new bookings.'
    ]
  },
  {
    slug: 'easy-rollout',
    name: 'Easy Rollout',
    url: 'https://featureflag.net/',
    image: '/easy-rollout.png',
    description: [
      'Easy Rollout is a fixed-cost, self-hosted feature management platform that removes the usage- or seat-based limitations of other feature management platforms. We built their landing page, which debuted on Product Hunt in 2024.',
      'The key challenge of this project was that we had only one week to create an interactive demo that would allow users to see the product in action without signing up for an account.',
      'We built a demo that allowed users to toggle features on and off, and see the impact of those changes in real time - all without leaving the landing page.',
      'This greatly reduced the amount of time and effort required to validate the idea, and allowed the Easy Rollout team to collect valuable feedback from potential users before the product was even released.',
      'Rather than delivering the entire platform at the time of release, we decided to roll out this interactive demo with a link to a waitlist. This allowed us to gauge interest in the product and collect email addresses for future marketing efforts.',
      'When we released, we were able to validate that the interest in the product was not there, and the team was able to pivot to a new idea - saving them months of development time and hundreds of dollars in costs.'
    ]
  },
  {
    slug: 'honeymoon-missouri',
    name: 'Honeymoon Missouri',
    url: 'https://honeymoonmissourifilm.com/',
    image: '/honeymoon-missouri.png',
    description: [
      'We had the distinct pleasure of building the official website of the award-winning short film Honeymoon Missouri - directed by Joe Eckstein and released in 2022.',
      'The primary concern of the film\'s director was to create a website that conveyed the tone and themes of the film while also providing a platform for the film to be discovered by new audiences. We worked with Joe to create a website that was both visually striking and easy to navigate, with a focus on the film\'s trailer.',
      'We incorporated the aloof suspense and dark tone of the film into the website\'s design, using a color palette that matched the film\'s aesthetic. The layout of the site has large swathes of negative space to reflect the film\'s themes of isolation and loss, and the typography was chosen to be reminiscent of the film\'s opening credits.',
      'The film was screened at the Catalina Film Festival, Hollywood Shorts Festival, and LA Shorts International Film Festival, and was the winner of the Best Acting Ensemble at the New York Indie Shorts Awards.'
    ]
  },
]
