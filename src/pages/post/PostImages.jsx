import React from 'react'
import { useNavigate } from 'react-router';
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
  fontSize: {xs: 30, sm: 32, md: 34, lg:40},
}


const PostImages = ({ project, prevProjectId, nextProjectId }) => {
  const navigate = useNavigate();


  return (
    <Box sx={mainContainerProps}>
      {prevProjectId && <Box sx={{...navButtonContainerProps, left: -25}}>
        <IconButton onClick={() => navigate(`/post/${prevProjectId}`)}>
          <ArrowBackIosNewIcon sx={navButtonProps}/>
        </IconButton>
      </Box>}

      <Box sx={boxContainerProps}>
        <Box sx={imagesListContainerProps}>
          {project.images.map(item => <Box sx={{maxHeight: "80vh"}} key={item.filename}>
            <Image src={item.src} alt={item.filename} fit="contain" duration={100}/>
          </Box>)}
        </Box>
      </Box>
      
      {nextProjectId && <Box sx={{...navButtonContainerProps, right: 30}}>
        <IconButton onClick={() => navigate(`/post/${nextProjectId}`)}>
          <ArrowForwardIosIcon sx={navButtonProps}/>
        </IconButton>
      </Box>}
    </Box>
  )
}

export default PostImages