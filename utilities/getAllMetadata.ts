export {}
// import fs from 'fs'
// import grayMatter from 'gray-matter'
// import type { Metadata } from 'types/metadata'
// import { getFormattedDate } from './getFormattedDate'

// export const getAllMetadata = (folderPath: string) => {
//   // For example, ['my-blog-1.mdx', 'my-blog-2.mdx']
//   const mdxFileNames = fs.readdirSync(folderPath)

//   const allMetadata = mdxFileNames.map((mdxFileName) => {
//     // For example, 'D:/shamwela.com/my-blog-1.mdx'
//     const fullPath = `${folderPath}/${mdxFileName}`
//     const content = fs.readFileSync(fullPath, 'utf8')
//     const { data } = grayMatter(content)
//     const formattedDate = getFormattedDate(data.date)

//     // For example, 'my-blog-1'
//     const slug = mdxFileName.replace('.mdx', '')

//     const metadata = {
//       ...data,
//       formattedDate,
//       slug,
//     } as Metadata

//     return metadata
//   })

//   return allMetadata
// }
