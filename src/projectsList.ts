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
    image: '/project-sample.jpg',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.'
    ]
  },
  {
    slug: 'only-taylors-version',
    name: 'Only Taylor\'s Version',
    url: 'https://onlytaylorsversion.com/',
    image: '/taylors-version.jpg',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.'
    ]
  },
  {
    slug: 'honeymoon-missouri',
    name: 'Honeymoon Missouri',
    url: 'https://honeymoonmissourifilm.com/',
    image: '/honeymoon-missouri.png',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.'
    ]
  },
  {
    slug: 'quick-chat',
    name: 'Quick Chat',
    url: 'https://quickchat.com/',
    image: '/project-sample.jpg',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.'
    ]
  },
  {
    slug: 'quick-saas',
    name: 'Quick SaaS',
    url: 'https://quicksaas.com/',
    image: '/project-sample.jpg',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deserunt ea eligendi enim fuga quis. Beatae cum distinctio doloremque dolores, eligendi esse illo, iusto mollitia quidem ratione temporibus totam.'
    ]
  }
]
