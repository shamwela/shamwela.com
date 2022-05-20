import Image from 'next/image'
import Link from 'next/link'
import type { ImageProperty } from 'types/imageProperty'

export const getMDXComponents = (imagesProperties: ImageProperty[]) => {
  const CustomImage = ({ src, alt }: { src?: string; alt?: string }) => {
    const imageProperties = imagesProperties.find(
      (properties) => properties.src === src
    )

    if (imageProperties) {
      return <Image {...imageProperties} placeholder='blur' alt={alt} />
    } else {
      return <div>(Image not found.)</div>
    }
  }

  const CustomLink = ({
    href,
    children,
  }: {
    href?: string
    children?: React.ReactNode
  }) => {
    if (!href) {
      return <></>
    }

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