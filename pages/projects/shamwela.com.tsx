import Head from 'components/Head'

const ShaMweLaDotCom = () => {
  return (
    <>
      <Head
        title='shamwela.com'
        description='shamwela.com'
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />
      <h1>shamwela.com</h1>
      <h2>Introduction</h2>
      <p>This is my website to share about me, my projects, and blog.</p>
      <p>
        Almost everything is pre-rendered using Static Site Generation. So, this
        is extremely fast.
      </p>
      <h2>Technologies used</h2>
      <p>
        Main framework: Next.js
        <br />
        Main language: TypeScript
        <br />
        Content: MDX and mdx-bundler
        <br />
        Styling: Tailwind CSS
        <br />
        Deployment: Vercel
        <br />
        Others: Plaiceholder, ESLint, Husky, Prettier.
      </p>
      <p>
        Source code is currently private because I don't want others to copy my
        work.
      </p>
      <h2>Purpose and goal</h2>
      <p>
        I built this website because I want to improve my existing tech stack
        knowledge and try out new ones.
      </p>
      <p>
        This started out as a blog and later I showcased my projects. My
        expected outcome is to get a developer job.
      </p>
      <p>
        This website design hasn't changed much. I like to keep it simple and
        dark.
      </p>
      <h2>Spotlight</h2>
      <p>
        MDX was the hardest part. MDX is great for content-heavy website like
        mine. There're many ways to implement MDX with Next.js. I chose{' '}
        <code>mdx-bundler</code> because it's simple, feature-rich, and
        recommended by a lot of people.
      </p>
      <p>
        If I statically import the images and add{' '}
        <code>placeholder='blur'</code>, Next.js will automatically generate a
        blur image placeholder. But I can't statically import images in my MDX
        files. So, I use the following approach.
      </p>
      <p>
        I implemented blur image placeholder using <code>plaiceholder</code>.
        Without blur image placeholder, the user will see a blank area while the
        image is loading. This is confusing for the user. With blur image
        placeholder, the user will see a blur image while the image is loading.
        This tells the user that the image is loading. This also gives an
        illusion that the image loads faster.
      </p>
      <h2>Current status</h2>
      <p>
        I usually share my blogs with my friends. They read them to learn about
        web development. They say they like my website 😅.
      </p>
      <h2>Lessons learned</h2>
      <p>
        I learned how to use Husky to add pre-commit git hooks. I check
        formatting using Prettier, linting using ESLint, and check TypeScript
        errors using the TypeScript compiler.
      </p>
      <p>
        I also learned about the Open Graph protocol and Twitter Card Tags.
        These two are important for Search Engine Optimization.
      </p>
      <p>
        Another thing is preloading font files. Preloading is downloading and
        caching as soon as possible. In <code>vercel.json</code>, I cached my
        font files for a year.
      </p>
      <p>
        Next.js is great. I used Static Site Generation to make this website
        fast. Next.js also provides image optimization, file-based routing, and
        much more.
      </p>
      <p>
        I used to make silly type errors with JavaScript. TypeScript helped me
        with type checking, autocompletion, and confidence with my code.
      </p>
      <p>
        For accessibility, I used <code>aria-current='page'</code> for the
        active navigation link. I also added <code>alt</code> in every image. I
        tested my website using Screen Reader extension and made sure everything
        is easy to use. I also tested using only keyboard to navigate and it
        works fine.
      </p>
    </>
  )
}

export default ShaMweLaDotCom
