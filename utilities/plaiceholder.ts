import { getPlaiceholder } from 'plaiceholder'
import glob from 'glob'
import path from 'path'
import { rootPath } from './rootPath'

const imageFolderPath = rootPath + '/public/images'
const fullImagePaths = glob.sync(`${imageFolderPath}/**/*`)
const relativeImagePaths = fullImagePaths.map((fullImagePath) => {
  const imageName = path.basename(fullImagePath)
  return '/images/' + imageName
})

export const getImagesProperties = async () => {
  const imagesProperties = await Promise.all(
    relativeImagePaths.map(async (relativeImagePath) => {
      const { img: imageProperties, base64: blurDataURL } =
        await getPlaiceholder(relativeImagePath)

      return {
        ...imageProperties,
        blurDataURL,
      }
    })
  )

  return imagesProperties
}
