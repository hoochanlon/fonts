import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import swup from '@swup/astro'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import UnoCSS from 'unocss/astro'
import devtoolsJson from 'vite-plugin-devtools-json'
import { themeConfig } from './src/.config'

// 根据环境变量动态设置 base 路径
// 如果设置了 ASTRO_BASE 环境变量，使用该值；否则根据 DEPLOY_ENV 判断
// DEPLOY_ENV=deno 时使用 '/'，其他情况使用 '/fonts/'
const getBasePath = () => {
  if (process.env.ASTRO_BASE) {
    return process.env.ASTRO_BASE
  }
  if (process.env.DEPLOY_ENV === 'deno') {
    return '/'
  }
  // 默认使用 GitHub Pages 路径
  return '/fonts/'
}

// https://astro.build/config
export default defineConfig({
  site: themeConfig.site.website,
  prefetch: true,
  base: getBasePath(),
  vite: {
    plugins: [
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-ignore
      devtoolsJson(),
    ],
  },
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: '\_blank',
          rel: ['noopener', 'noreferrer', 'external'],
        },
      ],
    ],
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  integrations: [
    UnoCSS({ injectReset: true }),
    mdx({}),
    robotsTxt(),
    sitemap(),
    swup({
      theme: false,
      animationClass: 'transition-swup-',
      cache: true,
      preload: true,
      accessibility: true,
      smoothScrolling: true,
      updateHead: true,
      updateBodyClass: true,
    }),
  ],
})
