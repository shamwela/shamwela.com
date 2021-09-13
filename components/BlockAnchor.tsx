const BlockAnchor = ({
  href,
  target,
  rel,
  children,
}: {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className='px-6 py-2 no-underline block w-max bg-accent text-primary font-bold'
    >
      {children}
    </a>
  )
}

export default BlockAnchor
