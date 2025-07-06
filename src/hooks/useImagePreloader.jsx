import { useEffect, useState } from 'react'

function preloadImage (src) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = function() {
        resolve(img)
      }
      img.onerror = img.onabort = function() {
        reject(src)
      }
      img.src = src
    })
  }


const useImagePreloader = (imageList) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false)
  const [ maxDimensions, setMaxDimensions ] = useState({height: 0, width: 0, ratio: 0})

  useEffect(() => {
    let isCancelled = false

    async function effect() {

      if (isCancelled) {
        return
      }
      const imagesPromiseList = []
      
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i))
        const img = new Image();
        img.src = i;

        img.onload = () => {
          if(img.complete && (img.height / img.width) > maxDimensions.ratio) {
            setMaxDimensions({height: img.height, width: img.width, ratio: (img.height / img.width)})
          }
        }
      }
  
      await Promise.all(imagesPromiseList)

      if (isCancelled) {
        return
      }

      
      setTimeout(() => setImagesPreloaded(true), 10)
    }

    effect()
    return () => {
      isCancelled = true
    }
  }, [imageList])

  return { imagesPreloaded, maxDimensions }
}


  
export default useImagePreloader