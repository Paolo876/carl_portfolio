import React from 'react'
import { Box, Tooltip, IconButton, Typography, ButtonBase, Fade } from '@mui/material'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const boxBorderProps = {
  mt: {sm: 2, md: 2, lg: 3, xl: 4},
  pt: {sm: 2, emd: 3, lg: 4, xl: 6},
  borderTop: 1,
  borderColor: "primary.dark"
}

const textProps = {
  fontWeight: 500,
  letterSpacing: 1.5,
  fontSize: { xs: 11, md: 11, lg: 12},
}

const iconsContainerProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center"
}

const iconProps = {
  fontSize: "inherit", 
  opacity: .7
}

const iconButtonProps = {
  background: "rgba(255,255,255,0.05)",
  transition: "200ms all ease",
  "&:hover svg" : {
    color: "primary.light"
  }
}

const buttonProps = {
  px:.75,
  py: .25,
  m:0,
  my: 1.8,
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  gap: 1.5,
  opacity: .8,
  transition: "200ms all ease",
  "&&:hover" : {
    filter: "brightness(130%)",
    opacity: 1,
  },
  "&:hover svg" : {
    color: "primary.light"
  }
}


const SocialLinksList = ({ state }) => {


  return (
    <Box sx={boxBorderProps}>
      {state ? 
        <Box sx={iconsContainerProps}>
          <Tooltip title="LinkedIn" placement="left" arrow>
            <IconButton 
              sx={iconButtonProps}
              href="https://www.linkedin.com/in/carladriantdimabuyu/" 
              target="_blank" 
              rel="noreferrer"
            >
              <LinkedInIcon style={iconProps}/>
            </IconButton>
          </Tooltip>
          <Tooltip  title="Facebook" placement="left" arrow>
            <IconButton 
              sx={iconButtonProps}
              href="https://www.facebook.com/adobotrash" 
              target="_blank" 
              rel="noreferrer"
            >
              <FacebookIcon style={iconProps}/>
            </IconButton>
          </Tooltip>
          <Tooltip  title="Instagram" placement="left" arrow>
            <IconButton 
              sx={iconButtonProps}
              href="https://www.instagram.com/adobotrash/" 
              target="_blank" 
              rel="noreferrer"
            >
              <InstagramIcon style={iconProps}/>
            </IconButton>
          </Tooltip>
        </Box>:
        <Fade in={!state} timeout={{enter: 350}} style={{transitionDelay: "450ms"}}>
          <Box>
            <Typography variant='h6' sx={{fontSize: {md: 11, lg: 12}, letterSpacing: 1.5, fontWeight: 300, mb: 3, opacity: .8}}>FOLLOW MY SOCIAL:</Typography>
            <ButtonBase 
              sx={buttonProps}
              href="https://www.linkedin.com/in/carladriantdimabuyu/" 
              target="_blank" 
              rel="noreferrer"  
            >
              <LinkedInIcon style={iconProps}/>
              <Typography variant='h6' sx={textProps}>LINKEDIN</Typography>
            </ButtonBase>
            <ButtonBase 
              sx={buttonProps}
              href="https://www.facebook.com/adobotrash" 
              target="_blank" 
              rel="noreferrer"
            >
              <FacebookIcon style={iconProps}/>
              <Typography variant='h6' sx={textProps}>FACEBOOK</Typography>
            </ButtonBase>
            <ButtonBase 
              sx={buttonProps}
              href="https://www.instagram.com/adobotrash/" 
              target="_blank" 
              rel="noreferrer"
            >
              <InstagramIcon style={iconProps}/>
              <Typography variant='h6' sx={textProps}>INSTAGRAM</Typography>
            </ButtonBase>
          </Box>
        </Fade>
      }
    </Box>
  )
}

export default SocialLinksList

{/* <li><a href="https://www.facebook.com/adobotrash" target="_blank" rel="noreferrer"><FacebookIcon/></a></li>
<li><a href="https://www.instagram.com/adobotrash/" target="_blank" rel="noreferrer"><InstagramIcon/></a></li>
<li><a href="https://www.linkedin.com/in/carladriantdimabuyu/"><LinkedInIcon/></a></li> */}