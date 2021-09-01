interface BlockAnchorProps {
  href: string
  target?: string
  children: React.ReactNode
}

export default function BlockAnchor(props: BlockAnchorProps) {
  const { href, target, children } = props

  return (
    <a
      href={href}
      target={target}
      className='px-6 py-2 no-underline block w-max bg-secondary text-primary font-medium'
    >
      {children}
    </a>
  )
}