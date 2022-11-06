---
title: Web font best practices
date: 2022-05-28
---

Prefer using system fonts. But if you want to use custom web fonts, these tips will help you.

## 1. Download the font files

Try to use .woff2 or .woff files because they're lighter and faster than other font formats. [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts) is a good website to download them.

## 2. Preload

If you don't preload your font files, they might not be downloaded soon enough. To preload, put the following `link` tag in all `head` tags of all pages.

```html
<link
  rel="preload"
  href="/fonts/your-font.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

## 3. Use in CSS

```css
@font-face {
  font-family: 'Your Font';
  src: local('Your Font'), url('/fonts/your-font-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

## 4. Cache

You should always cache your font files to improve performance. Caching is different for each platform. Here's an example for Vercel.

```json:vercel.json
{
  "headers": [
    {
      // Cache all woff2 files inside the `fonts` folder
      "source": "/fonts/(.*).woff2",
      "headers": [
        {
          "key": "Cache-Control",
          // Cache for a year
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## If you use Tailwind CSS

```js:tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Your Font', ...fontFamily.sans],
      },
    },
  },
}
```
