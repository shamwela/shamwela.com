const BlogLayout = ({ children, blog }) => {
  // In this parameter, add type checking later
  return (
    <>
      {/* Add Head component here later */}
      <h1>{blog.title}</h1>
      <div>{children}</div>
    </>
  )
}

export default BlogLayout
