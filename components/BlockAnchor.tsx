interface BlockAnchorProps {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
}

const BlockAnchor = (props: BlockAnchorProps) => {
  const { href, target, rel, children } = props

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className='px-6 py-2 no-underline block w-max bg-secondary text-primary font-medium'
    >
      {children}
    </a>
  )
}

export default BlockAnchor
