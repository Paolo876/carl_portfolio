import { useState } from 'react'
import { Box, Typography, ListItem, List } from '@mui/material'
import Image from 'mui-image'
import CollectionsIcon from '@mui/icons-material/Collections';

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


const ProjectImage = ({ src, title, images, softwares, style, setIsModalVisible, id }) => {
  const [ isHovered, setIsHovered ] = useState(false)


  return (
    <>
      <Box sx={boxContainerProps} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => setIsModalVisible({ isVisible: true, id })}>
        {isHovered && <Box sx={infoBoxProps}>
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
        </Box>}
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
        <Image src={images[0].src} duration={100} sx={{transition: "300ms width ease"}} />
      </Box>
      <Box
        sx={{
          border: "none",
          display: {xs: "initial", md: "none"}

        }}
      >
        <Box
          sx={{
            border: 1,
            borderColor: "rgba(255,255,255,.1)", 
            borderRadius: 1,
            maxHeight: "80vh",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transition: "300ms width ease",
          }}
        >
          <Image 
            src={images[0].src} 
            duration={100} 
            sx={{transition: "300ms width ease"}} 
            fit="scale-down"
          />
        </Box>
        <Box 
          sx={{
            // borderBottom: 1,
            py: .75,
            // px: 1,
            // borderColor: "rgba(255,255,255, .3)",
            // overflow: "hidden"
            align: "left"
          }}
        >
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
    </>
  )
}

export default ProjectImage