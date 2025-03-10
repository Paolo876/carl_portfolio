import React from 'react'
import { Box } from '@mui/material'
import Image from 'mui-image'


const boxContainerProps = {
  borderRadius: 5,
  backgroundColor: "rgba(0,0,0,0.75)",
  mt:1,
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  px: 5,
  gap: 4,
  height: "100%",
  width: "100%",
  py: 4,
  
}



const PostImages = ({ project }) => {
  return (
    <Box sx={boxContainerProps}>
      {project.images.map(item => <Box sx={{maxHeight: "80vh"}}>
        <Image src={item.src} alt={item.filename} fit="contain" duration={100}/>
      </Box>)}
    </Box>
  )
}

export default PostImages