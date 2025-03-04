import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'
import Image from 'mui-image'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../../assets/logo_white_100.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const containerProps = {
  display: { xs: "flex", sm: "none" },
  flexDirection: "column",
  mb: 3,
  py: 2, 
  px: 2,
  borderBottom: 1,
  borderColor: "rgba(255,255,255,.25)"
}

const infoContainerProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  my: 1,
}

const iconProps = {
  fontSize: "inherit", 
  opacity: .6,
}

const linksContainerProps = {
  display: "flex",
  flexDirection: "row",
  gap: 1.5,
  justifyContent: "space-around",
  mx: .5,
  mt: 4,
}

const linksButtonProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: .75,
  fontSize: 11,
  letterSpacing: 1,
  fontWeight: 400,
}

const linksButtonTextProps = {
  fontSize: "inherit",
  fontWeight: "inherit",
}


const MobileHeader = () => {
  return (
    <Box sx={containerProps}>
      <Box sx={infoContainerProps }>
        <Box 
          sx={{ 
            height: 55, 
            display: "flex", 
            justifyContent: "center",
          }}
        >
          <Image src={logo} fit="scale-down" height="auto" width="auto" duration={250}/>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: 2.5,
              fontSize: 14,
              fontWeight: 600,
              opacity: .9
            }}
          >
            CARL DIMABUYU
          </Typography>
          <Typography 
            variant='h6'
            sx={{
              fontWeight: 200,
              letterSpacing: 1.5,
              fontSize: 10,
              opacity: .9,
              mt: .25,
            }}  
          >
            <LocationOnIcon style={iconProps}/> DOHA, QATAR 
          </Typography>
          <ButtonBase
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              fontSize: 14,
              mt: .5,
              color: "primary.light",
            }}
            href="mailto: carl.dimabuyu@gmail.com" 
            target="_blank" 
            rel="noreferrer"
          >
            <EmailIcon style={iconProps}/> 
            <Typography
              sx={{
                fontSize: "inherit",
                fontWeight: 600
              }}
            >
              carl.dimabuyu@gmail.com 
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
      <Box sx={linksContainerProps}>
        <ButtonBase 
          sx={linksButtonProps}
          href="https://www.linkedin.com/in/carladriantdimabuyu/"
          target="_blank" 
          rel="noreferrer"
        >
          <LinkedInIcon style={iconProps}/>
          <Typography variant='h6' sx={linksButtonTextProps}>LINKEDIN</Typography>
        </ButtonBase>
        <ButtonBase 
          sx={linksButtonProps}
          href="https://www.instagram.com/adobotrash/" 
          target="_blank" 
          rel="noreferrer"  
        >
          <InstagramIcon style={iconProps}/>
          <Typography variant='h6' sx={linksButtonTextProps}>INSTAGRAM</Typography>
        </ButtonBase>
      </Box>
    </Box>
  )
}

export default MobileHeader