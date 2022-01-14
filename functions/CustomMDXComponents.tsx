import Image from 'next/image'
import Link from 'next/link'
import type { imagesProperties } from 'types/imagesProperties'

export const getCustomMDXComponents = (imagesProperties: imagesProperties) => {
  const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
    const imageProperties = imagesProperties.find(
      (imageProperties) => imageProperties.src === src
    )

    return (
      <Image {...imageProperties} placeholder='blur' alt={alt} quality={100} />
    )
  }

  const CustomLink = ({ href, ...props }: { href: string }) => {
    if (href.startsWith('http')) {
      return <a href={href} target='_blank' rel='noreferrer' {...props} />
    }

    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return { img: CustomImage, a: CustomLink }
}
