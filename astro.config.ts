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
// 如果设置了 ASTRO_BASE 环境变量，使用该值；否则默认使用 '/fonts/'
// GitHub Pages 和 Deno Deploy 都使用 '/fonts/' 作为 base 路径
function getBasePath() {
  // eslint-disable-next-line node/prefer-global/process
  if (process.env.ASTRO_BASE) {
    // eslint-disable-next-line node/prefer-global/process
    const base = process.env.ASTRO_BASE
    console.log(`[Astro Config] Using ASTRO_BASE: ${base}`)
    return base
  }
  // 默认使用 '/fonts/'（适用于 GitHub Pages 和 Deno Deploy）
  const defaultBase = '/fonts/'
  // eslint-disable-next-line node/prefer-global/process
  const deployEnv = process.env.DEPLOY_ENV || '(not set)'
  console.log(`[Astro Config] Using default base: ${defaultBase} (DEPLOY_ENV=${deployEnv})`)
  return defaultBase
}

const basePath = getBasePath()

// https://astro.build/config
export default defineConfig({
  site: themeConfig.site.website,
  prefetch: true,
  base: basePath,
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
