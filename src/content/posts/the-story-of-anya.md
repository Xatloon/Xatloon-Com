---
tags:
  - post
  - "🧑‍💻Coding"
title: 名为 Hexo-theme-anya 的故事
sources:
  - xlog
summary: 楔子 大概在 2013 年的秋季，小升初的我开始对 Lofter 有限的自定义感觉到厌倦，开始了解
  WordPress，也在这途中机缘巧合第一次接触到了 DIYgod 大佬的 Amativeness（没错，当时大佬还是用的 WordPress
  平台，博客名为…
attributes:
  - value: the-story-of-anya
    trait_type: xlog_slug
external_urls:
  - https://i.xiangnorth.com/the-story-of-anya
date_published: 2022-06-04T00:05:00.000Z

---

## 楔子

大概在 2013 年的秋季，小升初的我开始对 Lofter 有限的自定义感觉到厌倦，开始了解 WordPress，也在这途中机缘巧合第一次接触到了 DIYgod 大佬的 [Amativeness](https://github.com/DIYgod/Amativeness)（没错，当时大佬还是用的 WordPress 平台，博客名为「Anotherhome」，后面才迁移到 Hexo），这便是 [hexo-theme-sagiri](https://github.com/DIYgod/hexo-theme-sagiri) 的前身。

![Anotherhome](../../assets/the-story-of-anya/anotherhome.jpeg)

我首先是试着更改 Amativeness 的配色（原始色为红色，对应主题概念 Amativeness 即「恋爱」，顺便一提这是我第一次学到牛津大词典都没有的单词）以符合自己风格，因为当时对 HTML CSS JavaScript 一窍不通，改色便是用的控制台找到颜色 Hex 码，在代码里直接查找并替换的「土方法」，后期因为种种原因，建站计划终归是放弃了。

一晃几年后，在升入高中的同时我也开始逐渐零星学习一点前端知识，大佬也与时俱进的更新博客为 Hexo 驱动，并发布了 hexo-theme-sagiri。只记得**不知 webpack 为何物**的我对着 `*.min.js & *.css` 一通乱改，最后也误打误撞完成了一个修改版，即「sagiri-x」（现已被我当做黑历史删除）。我也试着将其发布到 GitHub 与 npmjs 上，后续的发展反而出乎我的意料。

![sagiri-x](../../assets/the-story-of-anya/sagiri-x.png)

由于高中三年都是月假，加上本身没什么关注，我便很快忘了这事。高考完后的一天，我登上许久未上的微博，才发现快半年前收到了一位用户关于「sagiri-x」提的使用问题，之后，我也零星在各个平台（哔哩哔哩，QQ，etc）都发现了许多关于「sagiri-x」的留言，我才意识到，是博客上留下了这些联系方式。

在大学里，我虽然不是与前端有关专业（交通运输），但我也抽出很多时间去了解前端相关知识，也通过加入自媒体的技术部门，认识了许多计算机专业的同学，有了初步的系统化学习。

于是在 2022 年，我选择了制作「Hexo-theme-anya」。它基于[「sagiri-x」](https://github.com/XiangNorth/Hexo-theme-anya/commit/dbf2b15518bedb5cbad6f666e024afb101644e58)，在此基础处上移除了无用代码，去除了 jQuery 依赖，目的是做出「**开箱即用的 sagiri**」，实际上他的样式基本全部继承 sagiri，我也暂时没有想做出大的改变，只想告诉九年前的自己：**你想做的事，我现在已经为你完成了**。

实际上，现在 DIYgod 大佬的 「sagiri」已经十分完善，只需一步`npm i`即可开始配置使用，我也推荐大家去大佬的博客：https://diygod.me 去学习。大佬十分友善，我在初中时期还曾加过大佬的 QQ，有过相关交流，当时他还记得我是在博客下留言的那位，我开心了许久。

### Task 1: Delete

「sagiri」基于大名鼎鼎的[「NexT」](https://theme-next.js.org/https://theme-next.js.org/)主题，该主题至今仍在更新，不由得感叹时间飞逝。由于其强大的拓展能力（详情可见[「NexT 官方文档自定义页」](https://theme-next.js.org/docs/#Customize-Your-NexT=)）,「sagiri」中也遗留了不少并未使用到的代码，因此主要做了以下工作。

- 删除「sagiri」所基于的 Pisces 主题外的其余主题及其相关配置文件
- 删除背景不规则三角彩条，想添加可参考：https://zhuanlan.zhihu.com/p/28257724
- 删除鼠标点击动画，想添加可参考：https://github.com/DIYgod/hexo-theme-sagiri/blob/master/src/cursor-effects.js
- 删除 APlayer，DPlayer
- 删除多余评论系统（暂时只保留「gitment」「valine」），删除网站分析，删除第三方搜索
- 删除相关无用布局及样式文件

### Task 2: Update

「sagiri」中使用了部分 jQuery 根据观察都可以通过现有的 DOM api 进行替换，出于学习角度考虑，也是一部分[「vanilla JavaScript」](https://www.javatpoint.com/what-is-vanilla-javascript)强迫症的考虑，我进行了改写。

大概有如下：

```jsx
// 选择元素$(".element") => document.querySelector(".element")/document.querySelectorAll(".element")// 添加事件$(".element").[event](function) => document.querySelector(".element").addEventListener("click", function)// 更改样式$(".element").css("color", "#666") => document.querySelector(".element").style.color = "#666"// 类相关更改，removeClass 同理$(".element").addClass("active") => document.querySelector(".element").classList.add("active")
```

还有许多不再枚举（主要是我也记不得了）。

此外是对配置文件进行了部分改进，增加了几项可用配置，删除了无用配置。

### Task 3: Create

在项目初期，我仍然叫她「sagiri」即[「和泉纱雾」](https://zh.moegirl.org.cn/%E5%92%8C%E6%B3%89%E7%BA%B1%E9%9B%BE)。名字是曾风靡一时的动漫「埃罗芒阿老师」中的女主角~~之一~~，因为我本身也是妹控（嘻嘻），所以也是和 DIYgod ~~老师~~一样当时喜欢上了这部动漫。

某一天我突然意识到，既然要做一个自己的主题，为什么不更改点特色呢。于是我选择以「anya」即「SPY×FAMILIY」中的「阿妮亚」为主题，进行了取色（图片源自 Twitter[@sc_ome](https://twitter.com/sc_ome/status/1218826941555363842)）。

![Figma](../../assets/the-story-of-anya/figma.jpeg)

进行应用后主页的基本样式便形成了（顶部图片源自 pixiv[@みつなり都](https://www.pixiv.net/users/7849704)）：

![Anya](../../assets/the-story-of-anya/anya.png)

当然，目前看来「anya」仍然只是「sagiri」的换皮版本，我也不否认这点。我会在今后的过程中不断完善、提升主题特色~~（怎么听起来有点像画大饼啊）~~。

### Task 4: Read

对于整体「anya」主题的「读」呢，实际上是更加完善的安装体验。

### 开箱即用

在用 「vanilla JavaScript」替换 jQuery 后，已经省去许多依赖项。仅在改动`*.js & *.styl` 后需要执行依赖进行打包，这时需要安装依赖。因此我将其全部设为`devDependencies`。

不管是从 `npm & yarn & pnpm`等包管理器处安装，还是直接在主题项目的`Release`页面安装，都能够直接使用，而无需安装依赖。

### 安装途径多元

据我的回忆，「sagiri」早期是支持 npm 安装的，不知为何几年后再看已经在 README 中删去这一行。

因此我将「anya」同步发行到 Release 及 npmjs，你也可以直接使用`git clone`克隆到你的`Hexo/themes`目录下。

顺便一提我一直以为 npm 等包管理器安装需要额外添加内容，后续查找许多资料才在 Sukka 的 [这篇博文](https://blog.skk.moe/post/hexo-5/) 里发现了是 Hexo 自身新添的特性。

![Sukka](../../assets/the-story-of-anya/sukka.png)

### 跋

回首当年那个好奇「Amativeness」的少年，已九年过去，我在不断学习中，仍然时刻感觉到自己的无知与无力。还有很多要做的事，还有很多要学习才能去的地方，我感觉到有着满腔热情，还没耗尽，还得一点点去学习方法，不让这热情慢慢凉下去，无从发挥。

「anya」也只是刚刚开始，在今后的日子里我也会不断完善她，希望这篇文章也能随着完善不断更新。
