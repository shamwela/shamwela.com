const BlogLayout = ({ children, post }) => {
  // In this parameter, add type checking later
  return (
    <>
      {/* Add Head component here later */}
      <h1>{post.title}</h1>
      <div>{children}</div>
    </>
  )
}

export default BlogLayout
