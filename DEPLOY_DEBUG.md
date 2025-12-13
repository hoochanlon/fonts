# 部署问题排查指南

## 配置说明

**当前配置**：GitHub Pages 和 Deno Deploy 都使用 `/fonts/` 作为 base 路径。

如果需要自定义 base 路径，可以通过 `ASTRO_BASE` 环境变量设置。

## Deno Deploy 样式走样排查步骤

### 1. 检查构建时的 base 路径

运行检查脚本：

```bash
pnpm check:base
```

或者在构建前设置环境变量并检查：

```bash
# Windows PowerShell
$env:DEPLOY_ENV="deno"; pnpm check:base

# Windows CMD
set DEPLOY_ENV=deno && pnpm check:base

# Linux/Mac
DEPLOY_ENV=deno pnpm check:base
```

### 2. 检查构建输出

构建后检查 `dist/index.html` 文件中的资源路径：

```bash
# 构建项目（GitHub Pages 和 Deno Deploy 使用相同的构建）
pnpm build

# 检查 HTML 中的资源路径
# 应该看到类似这样的路径：
# <link rel="stylesheet" href="/fonts/_astro/xxx.css">
# 注意：base 路径是 /fonts/
```

### 3. 检查 Deno Deploy 配置

**注意**：当前配置下，Deno Deploy 不需要特殊的环境变量设置，默认使用 `/fonts/` 作为 base 路径。

如果需要自定义 base 路径，可以在 Deno Deploy 控制台中：

1. 进入项目设置
2. 查看 "Environment Variables" 部分
3. 添加环境变量 `ASTRO_BASE`，值为你想要的路径（如 `/` 或其他路径）
4. 重新部署项目

### 4. 检查浏览器控制台

访问部署后的网站，打开浏览器开发者工具（F12）：

1. 查看 **Console** 标签，检查是否有 404 错误
2. 查看 **Network** 标签，检查 CSS/JS 文件是否加载成功
3. 查看失败的资源路径是否正确

### 5. 验证 base 路径

在浏览器控制台运行：

```javascript
// 检查当前页面的 base 路径
console.log(document.querySelector('base')?.href || 'No base tag found')

// 检查资源路径
document.querySelectorAll('link[rel="stylesheet"], script[src]').forEach((el) => {
  console.log(el.href || el.src)
})
```

### 6. 常见问题

#### 问题 1: Deno Deploy 构建时没有环境变量

**解决方案**: 在 Deno Deploy 项目设置中添加环境变量 `DEPLOY_ENV=deno`

#### 问题 2: Windows 上构建脚本不工作

**解决方案**: 使用 `cross-env` 包（已添加到 package.json），运行：

```bash
pnpm install
pnpm build:deno
```

#### 问题 3: 构建输出中 base 路径错误

**解决方案**:

1. 确认环境变量已正确设置
2. 查看构建日志中的 `[Astro Config]` 输出
3. 如果显示错误的 base，检查环境变量设置

### 7. 手动验证

如果自动检测不工作，可以手动设置：

```bash
# 方式 1: 使用 ASTRO_BASE 环境变量（最高优先级）
# Windows PowerShell:
$env:ASTRO_BASE="/"; pnpm build

# Linux/Mac:
ASTRO_BASE="/" pnpm build

# 方式 2: 直接修改 astro.config.ts（不推荐，仅用于测试）
# 临时将 base 改为 '/'
```

### 8. 检查构建日志

构建时会输出 base 路径信息，注意查看：

```
[Astro Config] DEPLOY_ENV=deno detected, using base: /
```

如果没有看到这个输出，说明环境变量没有正确传递。
