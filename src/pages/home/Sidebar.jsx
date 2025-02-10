import React from 'react'
import { useNavigate } from 'react-router';
import { Paper, Box, Typography, ButtonBase } from '@mui/material'
import Image from 'mui-image'
import logo from "../../assets/logo_white_100.png"

// icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

const buttonProps = {
  p:0,
  m:0,
  my: 1.8,
  display: "flex",
  flexDirection: "row",
  gap: 1.5,
  opacity: .9,
  "&&:hover" : {
    filter: "brightness(130%)",
    opacity: 1,
  }
}

const textProps = {
  fontWeight: 400,
  letterSpacing: 1.25,
  fontSize: 13,
}

const boxBorderProps = {
  mt: 4,
  pt: 6,
  borderTop: 1,
  borderColor: "primary.dark"
}


const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        gridArea: "nav",
        border: 1,
        borderColor: "rgba(255,255,255, .05)",
        borderRadius: 4,
        py: 8,
        mt: 5,
        px: 4,
        position: "fixed",
        top:0,
        right:0,
        left: "auto",
        mr: 8,
        width: "330px",
        height: "92vh",
        overflowY: "auto"
      }}
    >
      <Box sx={{ height: "auto", }}>
        <Image src={logo} fit="scale-down" height={75} width="auto" duration={100}/>
      </Box>
      <Box
        sx={{
          mt: 4,
          textAlign: "center"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 2.5,
            fontSize: 18,
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
            letterSpacing: 2.25,
            fontSize: 12,
            opacity: .9,
            mt: 1,
          }}  
        >
          <LocationOnIcon style={{fontSize: "inherit", opacity: .6, }}/> DOHA, QATAR 
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 12,
        }}
      >
        <ButtonBase sx={buttonProps} onClick={() => navigate("/about")}>
          <PersonIcon style={{fontSize: "inherit", opacity: .6}}/>
          <Typography variant='h6' sx={textProps}>ABOUT</Typography>
        </ButtonBase>
        <ButtonBase sx={buttonProps}>
          <PhoneIcon style={{fontSize: "inherit", opacity: .6}}/>
          <Typography variant='h6' sx={textProps}>CONTACT</Typography>
        </ButtonBase>

      </Box>
      <Box sx={boxBorderProps}>
        <Typography variant='h6' sx={{fontSize: 12, letterSpacing: 1.5, fontWeight: 300, mb: 3, opacity: .8}}>FOLLOW MY SOCIAL:</Typography>
        <ButtonBase sx={buttonProps}>
          <LinkedInIcon style={{fontSize: "inherit", opacity: .6}}/>
          <Typography variant='h6' sx={textProps}>LINKEDIN</Typography>
        </ButtonBase>
        <ButtonBase sx={buttonProps}>
          <FacebookIcon style={{fontSize: "inherit", opacity: .6}}/>
          <Typography variant='h6' sx={textProps}>FACEBOOK</Typography>
        </ButtonBase>
        <ButtonBase sx={buttonProps}>
          <InstagramIcon style={{fontSize: "inherit", opacity: .6}}/>
          <Typography variant='h6' sx={textProps}>INSTAGRAM</Typography>
        </ButtonBase>
      </Box>
      <Box sx={boxBorderProps}>
        <Typography variant='h6' sx={{fontSize: 12, letterSpacing: 1.5, fontWeight: 300, mb: 3, opacity: .8}}>EMAIL:</Typography>
        <ButtonBase sx={{...buttonProps, opacity: 1}} href="mailto: carl.dimabuyu@gmail.com" target="_blank" rel="noreferrer">
          <Typography variant='h6' sx={{...textProps, fontWeight: 500, color: "primary.light", letterSpacing: 1 }}>carl.dimabuyu@gmail.com</Typography>
        </ButtonBase>
      </Box>
    </Paper>
  )
}

export default Sidebar