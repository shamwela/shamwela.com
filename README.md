# shamwela.com

## Introduction

This is my website to share about me, my projects, and my blog. Almost everything is pre-rendered using Static Site Generation. So, this is extremely fast.

## Technologies used

- **Main framework**: Next.js
- **Main language**: TypeScript
- **Content**: MDX
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Others**: Plaiceholder, ESLint, Prettier.

## Purpose and goal

I built this website because I want to improve my existing tech stack knowledge and try out new ones. This started as a blog and later I showcased my projects. My expected outcome is to get a developer job. This website design hasn't changed much. I like to keep it simple and dark.

## Spotlight

Setting up [MDX](https://mdxjs.com) was hard. MDX is great for content-heavy websites like mine. There're many ways to implement MDX with Next.js. I chose `mdx-bundler` because it's simple, feature-rich, and recommended by a lot of people.

If I statically import the images and add `placeholder='blur'`, Next.js will automatically generate a blur image placeholder. But I can't statically import images in my MDX files. So, I use the following approach.

I implemented blur image placeholders using `plaiceholder`. Without a blur image placeholder, the user will see a blank area while the image is loading. This is confusing for the user. With a blur image placeholder, the user will see a blurred image while the image is loading. This tells the user that the image is loading. This also gives an illusion that the image loads faster.

## Current status

I usually share my blogs with my friends. They read them to learn about web development. They say they like my website 😅.

## Lessons learned

I learned about [the Open Graph protocol](https://ogp.me) and [Twitter Card Tags](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup). These two are important for Search Engine Optimization.

Another thing is preloading font files. Preloading is downloading and caching as soon as possible. In `vercel.json`, I cached my font files for a year.

Next.js is great. I used Static Site Generation to make this website fast. Next.js also provides image optimization, file-based routing, and much more.

I used to make silly type errors with JavaScript. TypeScript helped me with type checking, autocompletion, and gave me confidence.

For accessibility, I used `aria-current='page'` for the active navigation link. I also added `alt` in every image. I tested my website using the Screen Reader extension and made sure everything is easy to use. I also tested only using the keyboard to navigate and it works fine.
