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
  Image: (props) => {
    return <NextImage {...props} />
  },
}
