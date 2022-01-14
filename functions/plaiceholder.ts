import { getPlaiceholder } from 'plaiceholder'
import glob from 'glob'
import path from 'path'

const ROOT_PATH = process.cwd()
const IMAGES_FOLDER_PATH = path.join(ROOT_PATH, 'public', 'images')
const fullImagePaths = glob.sync(`${IMAGES_FOLDER_PATH}/**/*`)
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
