import ExternalLink from 'components/ExternalLink'
import Image from 'next/image'
import Link from 'next/link'
import type { ImageProperty } from 'types/imageProperty'

export const getMDXComponents = (imagesProperties: ImageProperty[]) => {
  const CustomImage = ({ src, alt = '' }: { src?: string; alt?: string }) => {
    const imageProperties = imagesProperties.find(
      (properties) => properties.src === src
    )
    if (!imageProperties) {
      return <div>(Image not found.)</div>
    }
    return <Image {...imageProperties} placeholder='blur' alt={alt} />
  }

  const CustomLink = ({
    href,
    children,
  }: {
    href?: string
    children?: React.ReactNode
  }) => {
    if (!href) {
      return <>{children} (broken link)</>
    }
    if (href.startsWith('http')) {
      return <ExternalLink href={href}>{children}</ExternalLink>
    }
    return <Link href={href}>{children}</Link>
  }

  return { img: CustomImage, a: CustomLink }
}
