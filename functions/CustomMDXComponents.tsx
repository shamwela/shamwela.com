import Image from 'next/image'
import Link from 'next/link'
import type { imagesProperties } from 'types/imagesProperties'

export const getCustomMDXComponents = (imagesProperties: imagesProperties) => {
  const CustomImage = ({
    src = '',
    alt = '',
  }: {
    // These optional and undefined are because of mdx-bundler
    src?: string | undefined
    alt?: string | undefined
  }) => {
    let imageProperties = imagesProperties.find(
      (imageProperties) => imageProperties.src === src
    )

    if (!imageProperties) {
      imageProperties = {
        src: '',
        blurDataURL: '',
        width: 0,
        height: 0,
        type: '',
      }
    }

    return (
      <Image {...imageProperties} placeholder='blur' alt={alt} quality={100} />
    )
  }

  const CustomLink = ({
    href = '',
    children = '',
  }: {
    // These optional and React.ReactNode are because of mdx-bundler
    href?: string | undefined
    children?: React.ReactNode
  }) => {
    if (href.startsWith('http')) {
      return (
        <a href={href} target='_blank' rel='noreferrer'>
          {children}
        </a>
      )
    } else {
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )
    }
  }

  return { img: CustomImage, a: CustomLink }
}
