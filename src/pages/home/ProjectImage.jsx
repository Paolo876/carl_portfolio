import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Box, Typography, Fade} from '@mui/material'
import Image from 'mui-image'
import CollectionsIcon from '@mui/icons-material/Collections';
import ImageCarousel from './ImageCarousel';
import { useInView } from 'react-intersection-observer';

const boxContainerProps = {
  border: 1, 
  borderColor: "rgba(255,255,255,.1)", 
  height: {md: 240, lg: 240,  xl: 275},
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  // transition: "300ms width ease",
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


const ProjectImage = ({ title, images, softwares, style, id }) => {
  const navigate = useNavigate();
  const [ isHovered, setIsHovered ] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
    // rootMargin: "0% 0px -35% 0px",
    delay: 250,
    triggerOnce: true
  });

  if(inView) console.log(title)

  const coverImage = images[0].src
  const newStr = `${coverImage.substring(0, coverImage.indexOf("q5892cimh/") + 10)}tr:h-300/${coverImage.slice(coverImage.indexOf("q5892cimh/") + 10)}`;
  return (
    <>
      <Box 
        sx={boxContainerProps} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        onClick={() => navigate(`/post/${id}`)}
        ref={ref}
        >
        {/* hover info container */}
        {isHovered && 
        <Fade in={true} timeout={{enter: 350}} style={{ transitionDelay: `150ms` }}>
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
          }}
        >
          <CollectionsIcon style={{fontSize: "inherit", filter: "drop-shadow( 1px 1px 1px rgba(0, 0, 0, 0.7))"}}/>
        </Box>}
        <Image src={newStr} duration={250} sx={{transition: "300ms width ease"}} fit='cover' showLoading easing="ease-in-out"/>
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