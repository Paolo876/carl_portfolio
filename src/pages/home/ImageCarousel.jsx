import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box,  Typography, List, ListItem } from '@mui/material'
import useImagePreloader from '../../hooks/useImagePreloader'
import Image from 'mui-image'


const containerProps = {

}

const carouselContainerProps = {
  border: 1,
  borderColor: "rgba(255,255,255,.1)", 
  borderRadius: 0,
  maxHeight: "80vh",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "300ms width ease",
  background: "rgba(5,5,5,.5)"
}

const infoContainerProps = {
  py: .75,
  align: "left"
}

const listProps = {
  m:0,
  p:0,
  mt: {sm: 1,},
  mb: 2,
  pb: 3,
  borderBottom: 1,
  borderColor: "rgba(255,255,255, .2)",
}

const listItemProps = {
  m:0,
  p:0,
  mt: {sm: .75},
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: {sm: 11},
  opacity: .8,
}


const ImageCarousel = ({ src, title, images, softwares, style, id }) => {

  const { imagesPreloaded, maxDimensions } = useImagePreloader(images.map(item => item.src))
  console.log(maxDimensions.ratio * window.innerWidth)
  return (
    <Box sx={containerProps}>
      {imagesPreloaded && <Carousel
        indicators={true}
        autoPlay={false}
        animation='slide'
      >
        {images.map(item => <Box 
          sx={{
            ...carouselContainerProps, 
            // height: maxDimensions.width > maxDimensions.height ? (maxDimensions.height / maxDimensions.width) * window.innerWidth : "100%",
            height: maxDimensions.ratio * window.innerWidth
          }} 
          key={item.filename}
        >
          <Image 
            src={item.src} 
            duration={100} 
            sx={{transition: "300ms width ease"}} 
            fit="scale-down"
            alt={item.title}
          />
        </Box>)}

      </Carousel>}

      <Box sx={infoContainerProps}>
        <Typography 
          sx={{  
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: 13,
          }}
        >
          {title} <Box component="small" sx={{fontWeight: 300, fontSize: 10, letterSpacing: .75}}>| {style}</Box>
        </Typography>
        <List sx={listProps}>
          {softwares.map(item => <ListItem sx={listItemProps} key={item}>{item}</ListItem>)}
        </List>
      </Box>
    </Box>
  )
}

export default ImageCarousel