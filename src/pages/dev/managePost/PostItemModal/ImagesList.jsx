import { useState } from 'react'
import { Box } from '@mui/material';
import Image from 'mui-image';
import Carousel from 'react-material-ui-carousel'


const containerProps = {
  display: "grid",
  // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
  gap: {lg: 1},
  width: "65%",
  maxHeight: 400,
  background: "rgba(255,255,255,.1)",
  overflow: "auto",
  px: 1,
  py: 2,
  borderRadius: 2,
}

const imageContainerProps = {
  width: {lg: 120},
  height: "auto"
}


const ImagesList = ({ images }) => {
  const [ currentIdx, setCurrentIdx ] = useState(0)
  
  const handleImgTransform = (src) => {
    let newStr;
      if(src.includes("firebase")) {
        let domain = new URL(src);
        newStr = `https://ik.imagekit.io/q5892cimh/tr:h-150/${domain.pathname}${domain.search}`;
      } else {
        newStr = `${src.substring(0, src.indexOf("q5892cimh/") + 10)}tr:h-150/${src.slice(src.indexOf("q5892cimh/") + 10)}`;
      }
    return newStr
  }

  return (
    <Box sx={containerProps}>
      {images.map(item => <Box sx={imageContainerProps} key={item.filename}>
        <Image 
          src={handleImgTransform(item.src)} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt={item.filename}
          showLoading
        />
      </Box>)}
    </Box>
  )
}

export default ImagesList