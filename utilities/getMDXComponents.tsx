import ExternalLink from 'components/ExternalLink'
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
    href: string
    children: React.ReactNode
  }) => {
    if (href.startsWith('http')) {
      return <ExternalLink href={href}>{children}</ExternalLink>
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
