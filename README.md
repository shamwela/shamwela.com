# shamwela.com

## Technologies used

- Deployment with Vercel
- Main framework is Next.js
- Static types with TypeScript
- Content with MDX
- Styling with Tailwind CSS
- Code formatting with Prettier
- Linting with ESLint

## Purpose and goal

I built this website because I want to improve my existing tech stack knowledge and try out new ones. My expected outcome is to get a developer job. This website design hasn't changed much. I like to keep it simple and dark.

## Spotlight

Setting up [MDX](https://mdxjs.com) was hard. MDX is great for content-heavy websites like mine. There're many ways to implement MDX with Next.js. I chose `mdx-bundler` because it's simple, feature-rich, and recommended by a lot of people.

If I statically import the images and add `placeholder='blur'`, Next.js will automatically generate a blur image placeholder. But I can't statically import images in my MDX files. So, I use the following approach.

I implemented blur image placeholders using `plaiceholder`. Without a blur image placeholder, the user will see a blank area while the image is loading. This is confusing for the user. With a blur image placeholder, the user will see a blurred image while the image is loading. This tells the user that the image is loading. This also gives an illusion that the image loads faster.

## Lessons learned

I learned about [the Open Graph protocol](https://ogp.me) and [Twitter Card Tags](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup). These two are important for Search Engine Optimization.

Next.js is great. I used Static Site Generation to make this website fast. Next.js also provides image optimization, file-based routing, and much more.

I used to make silly type errors with JavaScript. TypeScript helped me with type checking, autocompletion, and gave me confidence.

For accessibility, I used `aria-current='page'` for the active navigation link. I also added `alt` in every image. I tested my website using the Screen Reader extension and made sure everything is easy to use. I also tested only using the keyboard to navigate and it works fine.
