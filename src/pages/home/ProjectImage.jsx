import { useState } from 'react'
import { Box, Typography, Fade} from '@mui/material'
import Image from 'mui-image'
import CollectionsIcon from '@mui/icons-material/Collections';
import ImageCarousel from './ImageCarousel';
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react';

const boxContainerProps = {
  border: 1, 
  borderColor: "rgba(255,255,255,.1)", 
  height: {sm: 400, md: 240, lg: 240,  xl: 275},
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "300ms width ease",
  display: {xs: "none", md: "initial"}
}

const infoBoxProps = {
  position: "absolute",
  top: 0,
  left:0,
  height: "100%",
  width: "100%",
  backdropFilter: "brightness(60%) contrast(70%) saturate(170%)",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p:2,
}

const textProps={
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: 15,
  textAlign: "center"
}


const ProjectImage = ({ title, images, softwares, style, setIsModalVisible, id }) => {
  const [ isHovered, setIsHovered ] = useState(false)

  const coverImage = images[0].src
  const newStr = `${coverImage.substring(0, coverImage.indexOf("q5892cimh/") + 10)}tr:w-0.4/${coverImage.slice(coverImage.indexOf("q5892cimh/") + 10)}`;
  return (
    <>
      <Box sx={boxContainerProps} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => setIsModalVisible({ isVisible: true, id })}>
        {/* hover info container */}
        {isHovered && 
        <Fade in={true} timeout={{enter: 250}}>
          <Box sx={infoBoxProps}>
            <Box 
              sx={{
                borderBottom: 1,
                py: .75,
                px: 1,
                borderColor: "rgba(255,255,255, .3)",
                overflow: "hidden"
              }}
            >
              <Typography sx={textProps}>{title}</Typography>
            </Box>
          </Box>
        </Fade>}

        {images.length > 1 && <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 1,
            zIndex: 1,
            fontSize: 20,
            transition: "300ms width ease"
          }}
        >
          <CollectionsIcon style={{fontSize: "inherit", filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, 0.7))"}}/>
        </Box>}
          {/* <IKImage 
            src={images[0].src} 
            urlEndpoint="https://ik.imagekit.io/q5892cimh" 
            transformation={[{cropMode: 'c-maintain_ratio with fo-custom', }]}
            style={{"object-fit": "cover"}} 
            loading="lazy"
            // lqip={{ active: true, quality: 20 }}  
          /> */}
        <Image src={newStr} duration={100} sx={{transition: "300ms width ease"}} />
      </Box>
      <Box
        sx={{
          border: "none",
          display: {xs: "initial", md: "none"}
        }}
      >
        <ImageCarousel title={title} images={images} softwares={softwares} style={style} id={id}/>
      </Box>
    </>
  )
}

export default ProjectImage