import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useSwipeable } from 'react-swipeable';
import { Box,  Typography, List, ListItem } from '@mui/material'
import useImagePreloader from '../../hooks/useImagePreloader'
import Image from 'mui-image'
import CircleIcon from '@mui/icons-material/Circle';

const containerProps = {
  borderBottom: 1,
  borderColor: "rgba(255,255,255, .25)",
  mb: 2,
  pb: 4,
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
  px: 1.25,
  align: "left",
  mt: 1,
}

const listProps = {
  m:0,
  p:0,
  pt: 1,

}

const listItemProps = {
  m:0,
  p:0,
  mt: .5,
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: 11,
  opacity: .8,
}


const ImageCarousel = ({ title, images, softwares, style }) => {
  const { imagesPreloaded, maxDimensions } = useImagePreloader(images.map(item => item.src));
  const [ currentIdx, setCurrentIdx ] = useState(0)



  const handlers = useSwipeable({
    onSwiped: e => {
      if(e.dir === "Left"){
        setCurrentIdx(prevState => images.length - 1 > prevState ? prevState + 1 : 0)
      } else if (e.dir === "Right") {
        setCurrentIdx(prevState => prevState > 0 ? prevState - 1 : images.length - 1)
      }
    },
  });


  if(imagesPreloaded) return (
    <Box sx={containerProps}>
      <Box  {...handlers}>
        <Carousel
          indicators={true}
          navButtonsAlwaysInvisible={true}
          autoPlay={false}
          animation='slide'
          swipe={false}
          index={currentIdx}
          indicatorIconButtonProps={{
            style: {
              color: 'rgba(50,50,50,1)',
              margin: "0 1px",
            }
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: '#036b91',
            }
          }}
          IndicatorIcon={<CircleIcon style={{fontSize: 10}}/>}
        >
          {images.map(item => <Box 
            sx={{
              ...carouselContainerProps, 
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

        </Carousel>
      </Box>
      <Box sx={infoContainerProps}>
        <Typography 
          sx={{  
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: 14,
          }}
        >
          {title} <Box component="small" sx={{fontWeight: 300, fontSize: 11, letterSpacing: .75}}>| {style}</Box>
        </Typography>
        <List sx={listProps}>
          {softwares.map(item => <ListItem sx={listItemProps} key={item}>{item}</ListItem>)}
        </List>
      </Box>
    </Box>
  )
}

export default ImageCarousel