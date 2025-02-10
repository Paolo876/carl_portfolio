import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
import CollectionsIcon from '@mui/icons-material/Collections';

const boxContainerProps = {
  border: 1, 
  borderColor: "rgba(255,255,255,.1)", 
  height: 275,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden"

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



// image = {src, filename, title}
const ProjectImage = ({ src, title, images, software, style, setIsModalVisible, id }) => {
  const [ isHovered, setIsHovered ] = useState(false)

  
  return (
    <Box sx={boxContainerProps} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => setIsModalVisible({ isVisible: true, id })}>
      {isHovered && <Box sx={infoBoxProps}>
        <Box 
          sx={{
            // borderTop: 1,
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
        }}
      >
        <CollectionsIcon style={{fontSize: "inherit", filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, 0.7))"}}/>
      </Box>}
      <Image src={images[0].src} duration={100}/>
    </Box>
  )
}

export default ProjectImage