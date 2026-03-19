import type { HTMLAttributes } from 'astro/types'

interface Site {
  title: string
  description: string
  langCode: string
  heroImage: string
  pageType: 'website' | 'article'
  keywords: string[]
  facebook: Facebook
  author: Author
  copyright: Copyright
}

interface Copyright {
  license: string
  url: string
  year: number
}

interface Author {
  name: string
  email: string
  twitter: string
}

interface Facebook {
  appId: string
  admin: string
}

interface Link extends HTMLAttributes<'a'> {
  icon: string
}

export const SITE: Site = {
  title: 'I Think',
  description: 'Your site description',
  langCode: 'id',
  heroImage: './assets/default-image.jpg',
  pageType: 'website',
  keywords: ['blog', 'article', 'astro'],
  author: {
    name: 'John Doe',
    email: 'johndoe@email.example',
    twitter: '@johndoe'
  },
  facebook: {
    appId: '',
    admin: ''
  },
  copyright: {
    license: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    year: new Date().getFullYear()
  }
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Home',
    icon: 'bi:house',
    href: import.meta.env.BASE_URL
  },
  {
    name: 'Posts',
    icon: 'bi:globe',
    href: '/posts/'
  },
  {
    name: 'Tags',
    icon: 'bi:tags-fill',
    href: '/tags/'
  },
  {
    name: 'About',
    icon: 'bi:person-circle',
    href: '/about/'
  },
  {
    name: 'Github',
    icon: 'bi:github',
    href: 'https://github.com/masputrawae/i-think-astro-theme',
    target: '_blank'
  }
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Disclaimer',
    icon: 'bi:exclamation-circle',
    href: '/disclaimer/'
  },
  {
    name: 'Term of Service',
    icon: 'bi:info-circle',
    href: '/term-of-service/'
  },
  {
    name: 'Privacy Police',
    icon: 'bi:shield-lock',
    href: '/privacy-police/'
  },
  {
    name: 'About',
    icon: 'bi:person-circle',
    href: '/about/'
  },
  {
    name: 'Email',
    icon: 'bi:envelope-at-fill',
    href: 'mailto:johndoe@mail.example'
  }
]

export const SOCIAL_LINKS: Link[] = [
  {
    name: 'Twitter X',
    icon: 'bi:twitter-x',
    href: 'https://x.com',
    target: '_blank'
  },
  {
    name: 'Instagram',
    icon: 'bi:instagram',
    href: 'https://instagram.com',
    target: '_blank'
  },
  {
    name: 'Github',
    icon: 'bi:github',
    href: 'https://github.com/masputrawae/i-think-astro-theme',
    target: '_blank'
  }
]

export const FAVICONS: HTMLAttributes<'link'>[] = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png'
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico'
  }
]
