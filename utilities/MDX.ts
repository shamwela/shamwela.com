import fs from 'fs'
import glob from 'glob'
import grayMatter from 'gray-matter'
import path from 'path'
import type { Metadata } from 'types/metadata'

export const getAllMetadata = (folderPath: string) => {
  const mdxFullPaths = glob.sync(folderPath + '/*.mdx')
  const allMetadata = mdxFullPaths.map((mdxFullPath) => {
    const mdxFileName = path.basename(mdxFullPath)
    const slug = mdxFileName.replace('.mdx', '')
    const content = fs.readFileSync(mdxFullPath, 'utf8')
    const data = grayMatter(content).data
    const formattedDate = getFormattedDate(data.date)
    const metadata = {
      ...data,
      slug,
      formattedDate,
    } as Metadata

    return metadata
  })

  return allMetadata
}
