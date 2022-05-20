export {}
// import { getPlaiceholder } from 'plaiceholder'
// import fs from 'fs'

// export const getImageProperties = async () => {
//   const imageFolderPath = process.cwd() + '/public/images'
//   const imageNames = fs.readdirSync(imageFolderPath)
//   const imagePaths = imageNames.map((imageName) => '/images/' + imageName)

//   const imageProperties = await Promise.all(
//     imagePaths.map(async (imagePath) => {
//       const { img: imageProperties, base64: blurDataURL } =
//         await getPlaiceholder(imagePath)

//       return {
//         ...imageProperties,
//         blurDataURL,
//       }
//     })
//   )

//   return imageProperties
// }
