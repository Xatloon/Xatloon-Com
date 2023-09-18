---
tags:
  - post
  - "🧑‍💻Coding"
title: ChatGPT 使用之旅
sources:
  - xlog
summary: >-
  Intro. 去年年末开始，逐渐在 Twitter 上见到许多关于 ChatGPT
  的话题，再体验一段时间过后，仿佛大梦初醒一般，已意识到市面上已经出现许许多多 AI 产品。


  有早先关注到的 AI 作画 Disco Diffusion…
attributes:
  - value: chatgpt-for-me
    trait_type: xlog_slug
external_urls:
  - https://i.xiangnorth.com/chatgpt-for-me
date_published: 2023-03-04T00:02:34.000Z

---

# ChatGPT 使用之旅

## Intro.

去年年末开始，逐渐在 Twitter 上见到许多关于 ChatGPT 的话题，再体验一段时间过后，仿佛大梦初醒一般，已意识到市面上已经出现许许多多 AI 产品。

---

有早先关注到的 AI 作画 Disco Diffusion，当时寝室里不关注的室友都下载下来跑一些有意思的图片，当然，这也少不了 AI 作画本身与「二次元」关联甚深的缘故，而我这几名同学的确是「二次元」爱好者。

也有 Midjourney 这样的图片生成 AI，Notion AI 这样的写作辅助 AI。

以及今天的主角：ChatGPT

## Who is ChatGPT?

> ChatGPT is a sibling model to [InstructGPT](https://openai.com/blog/instruction-following/)
, which is trained to follow an instruction in a prompt and provide a detailed response.
> 

简单来讲就是一个可以按照你的指令提供详细回应的语言模型。

更详细的原理想了解的可以去搜索相关文章，Twitter 上已经有了许多优秀的解释，我个人并没有太多深入了解。

你可以发挥自己想象，或是使用类似于 https://github.com/f/awesome-chatgpt-prompts 中举出的用法来让 ChatGPT 成为你的生产力工具。

## 开始折腾

### 注册

首先是注册，首先当然是总所周知的网络环境问题，建议是自备梯子🪜，开全局代理。

打开 OpenAI 官网注册，标准的邮箱密码注册然后验证手机号，目前无法用大中华地区手机号码注册，不过手机号码只是在注册时需要接受验证码，所以我是选择了 smsActivateru 的接码服务，大概花费不到 5 元（记不清了捏）。

### 申请 API 并部署

新账号会赠送 \$18 的免费额度，之后你与 ChatGPT 的对话就会按 \$0.002 一千个 tokens 的价格计费。

除了直接在网页端使用外，更方便的方式是用 API 调用，这样你不仅可以免去烦人的「在您的国家不可用」等提示，也能集成到各种工作环境中。

由于 WeChat 存在的诸多限制，我更多是选择了将 ChatGPT 搭建在飞书上，GitHub 社区上已经有了很多优秀的「ChatGPT for Feishu」项目，我使用的是 https://github.com/Leizhenpeng/feishu-chatGpt 。

- 在 OpenAI 个人界面生成 API-key
- 按照项目 README 中的引导搭建并调整配置
- 在飞书中使用

由于我更多是用来偶尔试着玩玩，所以并没有集成到更丰富的工作环境。

### 更多玩法

如果你想深入了解 ChatGPT 的 API 用法，可以看看官方的文档，更多有意思的用法可以看看官方的 GitHub 项目：https://github.com/openai/openai-cookbook

## Outro.

现在越来越多的领域都开始涉足 AI，似乎 ChatGPT 为整个行业又探索了一条新的路线，至少同比其他 AI 作品，在我看来 ChatGPT 的宣传、推广和影响力都是惊人的。但这真的是主流方向吗？OpenAI 拒绝开源 ChatGPT 这样似乎违背其创立宗旨的行为又对整个行业有什么影响？

抛开疑问，有一件事是很清楚的，ChatGPT 作为一款产品，成功了。