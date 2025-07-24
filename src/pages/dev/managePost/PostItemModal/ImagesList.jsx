import { useState } from 'react'
import { Box, Tooltip } from '@mui/material';
import Image from 'mui-image';
import CancelIcon from '@mui/icons-material/Cancel';


const containerProps = {
  display: "grid",
  // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
  // gap: 1,
  maxHeight: {xs: 300, sm:400},
  background: "rgba(255,255,255,.1)",
  overflow: "auto",
  px: 1,
  py: {xs: 1, sm:2},
  borderRadius: 2,
}

const imageContainerProps = {
  width: {xs: "auto", sm: 100, md: 120},
  height: "auto",
  position: "relative",
  border: 1,
  borderColor: "rgba(255,255,255,.2)"
}

const deleteButtonProps = {
  position: "absolute",
  top: 0,
  right: 0,
  cursor: "pointer", 
}


const ImagesList = ({ images, width={sm: "65%"}, isEditable=false }) => {
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
    <Box sx={{...containerProps, width}}>
      {images.map(item => <Box sx={imageContainerProps} key={item.filename}>
        <Image 
          src={handleImgTransform(item.src)} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt={item.filename}
          showLoading
        />
        {isEditable && <Tooltip title="Delete Image" arrow>
          <Box sx={deleteButtonProps}>
            <CancelIcon color='secondary'/>
          </Box>
        </Tooltip>}

      </Box>)}
    </Box>
  )
}

export default ImagesList