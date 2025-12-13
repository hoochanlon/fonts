#!/usr/bin/env tsx
/**
 * 检查当前构建配置的 base 路径
 * 用于排查部署问题
 */

console.log('=== 构建配置检查 ===\n')

// eslint-disable-next-line node/prefer-global/process
const deployEnv = process.env.DEPLOY_ENV
// eslint-disable-next-line node/prefer-global/process
const astroBase = process.env.ASTRO_BASE
// eslint-disable-next-line node/prefer-global/process
const nodeEnv = process.env.NODE_ENV

console.log('环境变量:')
console.log(`  DEPLOY_ENV: ${deployEnv || '(未设置)'}`)
console.log(`  ASTRO_BASE: ${astroBase || '(未设置)'}`)
console.log(`  NODE_ENV: ${nodeEnv || '(未设置)'}`)

console.log('\n计算出的 base 路径:')
let base = '/fonts/' // 默认值（适用于 GitHub Pages 和 Deno Deploy）

if (astroBase) {
  base = astroBase
  console.log(`  ✓ 使用 ASTRO_BASE: ${base}`)
}
else {
  console.log(`  ✓ 使用默认值: ${base} (适用于 GitHub Pages 和 Deno Deploy)`)
}

console.log(`\n最终 base 路径: ${base}`)
console.log('\n=== 检查完成 ===\n')
