---
title: 'Web rendering strategies'
date: '2022-05-30'
---

Knowing how to render can make your website faster, cheaper to host, and easier to develop. Also, there's no such thing as the best rendering method. You have to choose the most suitable one for each page.

## Static Site Generation (SSG)

HTML is generated at build time. This generated HTML is reused every time someone visits your web page and can be cached by a CDN. Use SSG for blog, documentation, marketing page, etc.

### Pros

- Fastest
- Cheapest
- Easiest to deploy
- Good for [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)
- Little to no layout shift
- Secure because you can't really hack HTML files

### Cons

- Can't manage dynamic data
- Need to rebuild every time you make a change => more database or CMS calls => potentially more cost
- In big projects, the build will take long and it will be hard to iterate fast.

## Incremental Static Regeneration (ISR)

This is similar to SSG. But instead of rebuilding the site every time, you set `revalidate` time (for example, every 10 seconds). I personally like to think of this as "Time-based" ISR.

### Pros

- All pros of SSG
- Builds faster than SSG

### Cons

- Because this revalidates more often than SSG, it may cost more.

## On-demand Incremental Static Regeneration

This is similar to SSG but only regenerates when an event happens. This event can be a change in the database for example.

### Pros

- All pros of ISR

### Cons

- As the time of writing this, this is still in [beta version](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta). So, it's still unstable.
- Needs a server or serverless function to revalidate.

## Server-Side Rendering (SSR)

This generates HTML every time someone visits your web page. This is good for websites with dynamic data and a lot of different pages. Use SSR for newsfeed, chat app, etc.

### Pros

- Builds are faster
- Good for SEO
- Data is always fresh

### Cons

- Frequent server requests
- Potentially the most expensive
- Deployment might be harder than SSG.
- Slow TTFB (Time to First Byte). Time to First Byte is the time between clicking a link and the first bit of content coming in.
- Full page reloads
- Long cold boots

Note: most of these cons can be solved with a CDN but I won't write about it here. Vercel is currently [exploring Edge SSR](https://youtu.be/PN1HgvAOmi8?t=1034). Edge basically means "globally distributed". Edge SSR will also have near-zero cold boots.

## Client-Side Rendering (CSR)

First, the browser loads an HTML with little to no content. Then, it fetches JavaScript and compiles everything. If the user disabled JavaScript, your website won't work.

### Pros

- Good for data-heavy pages (for example, dashboards, account pages)
- Fast rendering after the initial load

### Cons

- Initial load is slow because the browser needs to download the JavaScript first
- Bad SEO because search engines can't crawl the web page well
- Might cause CLS (Cumulative Layout Shift)

## How to choose

Here's an oversimplified guide to choosing a rendering method. This might be wrong in some cases.

![Rendering decision](/images/rendering-decision.png)
