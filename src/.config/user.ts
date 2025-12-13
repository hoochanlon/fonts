import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },
  site: {
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/hoochanlon/hamulete',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://hoochanlon.github.io/twitter/',
      },
    ],
  },
}
