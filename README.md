# 免费可商用字体

缘起：众所周知，微软雅黑等于方正钓鱼体，由于笔者 web 项目较多，故开此 Repo 用做字体存储，助力提供优质中文 Web 字体的免费资源库，旨在为开发者、设计师提供多样化的中文字体选择。

字体列表见：https://fonts.hoochanlon.deno.net

## 使用方式

### 常规

> [!note]
>  字体文件夹由 assets 调整到 public

1 打开 https://www.jsdelivr.com/github 

![](https://cdn.jsdelivr.net/gh/hoochanlon/picx-images-hosting@master/imgs/uploads/2025/PixPin_2025-12-08_01-17-26.png)

2 导入

```CSS
@import url('https://cdn.jsdelivr.net/gh/hoochanlon/fonts@main/assets/LXGWWenKai-Regular/result.css');
```

### cdn

方式一：将 fonts.googleapis.com 替换为 fonts.loli.net、fonts.bunny.net

```
<!-- 替换前 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap" rel="stylesheet">

<!-- 替换后 -->
<link href="https://fonts.loli.net/css2?family=Noto+Sans+SC&display=swap" rel="stylesheet">

<link href="https://fonts.bunny.net/css2?family=Noto+Sans+SC&display=swap" rel="stylesheet">
```

方式二：staticdelivr

```
<!-- 示例 -->
https://cdn.staticdelivr.com/gfonts/css2?family=Font+Name

<!-- 应用方式 -->
https://cdn.staticdelivr.com/gfonts/css2?family=Open+Sans
```

### 对象存储、无服务器

推荐站点：

* https://imagekit.io
* https://backblaze.com

或无服务器部署：https://deno.com

![](https://cdn.jsdelivr.net/gh/hoochanlon/picx-images-hosting@master/imgs/uploads/2025/PixPin_2025-12-10_19-26-43.webp)

## 相关参考链接

* cdn：
    * https://www.jsdelivr.com/github
    * https://staticdelivr.com
    * https://cdnjs.com
    * https://www.cdnfonts.com
    * https://fontsource.org
    * https://fonts.zeoseven.com
* 完全免费字体：
    * [中文网计划](https://chinese-font.netlify.app/zh-cn/cdn/)
    * [阿里巴巴普惠体3.0 ](https://www.alibabafonts.com/#/font)
    * [字体日记网字体日记网（免费字体）](https://ziti.xxriji.cn)
    * [字体有线](https://font.doany.cn)

* 字体统计   
    * [doyoudo.com - 免费中文字体收集计划](https://flowus.cn/thelaws/share/12828fe3-8806-4350-bfbe-4fc1d032e5db#888c5596-dbbc-4cdb-be31-d72266a4a111)
    * [非而睿窝克斯 - 视频字体排版调查和分析](https://fontdiaocha.notion.site/)
* 字体导航：
   * https://zh.fonts2u.com
   * https://github.com/IBM/plex

* 字体识别：
   * https://www.fonthubs.com
   * https://www.whatfontis.com

