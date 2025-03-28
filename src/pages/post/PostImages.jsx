import React from 'react'
import { Box, IconButton } from '@mui/material'
import Image from 'mui-image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const mainContainerProps = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  maxHeight: "90vh",
  borderRadius: 5,
  backgroundColor: "rgba(0,0,0,0.75)",
  // pb:2,
}
const boxContainerProps = {
  position: "relative",
  overflow: "auto",
  display: "flex",
  flexDirection: "row",
  userSelect: "none",
  px: 5,
  width: "auto",
  my:2,
}

const imagesListContainerProps = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  py: 4,
}
const navButtonContainerProps = {
  width: "1px",
  position: "absolute",
  top: "50%",
  zIndex: 5,
}

const navButtonProps = {
  borderRadius: "50%",

  // backgroundColor: "rgba(255,255,255,.45)",
  // p:.9,
  fontSize: {xs: 30, sm: 32, md: 34, lg:40},
  // boxShadow: 5
}


const PostImages = ({ project }) => {
  return (
    <Box sx={mainContainerProps}>
      <Box
        sx={{...navButtonContainerProps, left: -25}}
      >
        <IconButton>
          <ArrowBackIosNewIcon sx={navButtonProps}/>
        </IconButton>
      </Box>

      <Box sx={boxContainerProps}>
        <Box sx={imagesListContainerProps}>
          {project.images.map(item => <Box sx={{maxHeight: "80vh"}}>
            <Image src={item.src} alt={item.filename} fit="contain" duration={100}/>
          </Box>)}
        </Box>
      </Box>
      
      <Box
        sx={{...navButtonContainerProps, right: 25}}
      >
        <IconButton>
          <ArrowForwardIosIcon sx={navButtonProps}/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default PostImages