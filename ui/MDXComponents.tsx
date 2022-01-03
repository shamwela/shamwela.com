import NextLink from 'next/link'
import NextImage from 'next/image'
import React from 'react'

export const components = {
  a: ({ href = '', ...props }: { href: string }) => {
    if (href.startsWith('http')) {
      return <a href={href} target='_blank' rel='noreferrer' {...props} />
    }

    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    )
  },
  img: (props) => {
    return (
      <NextImage
        {...props}
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1MCIgaGVpZ2h0PSIxMDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=='
        // this blurDataURL is the blurDataURL of my photo on the home page
        // I'm not even sure this will work lol
      />
    )
  },
}
