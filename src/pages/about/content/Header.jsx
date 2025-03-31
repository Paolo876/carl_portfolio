import React from 'react'
import Image from 'mui-image'
import { Box, Button, Typography } from '@mui/material'
import caloyface from "../../../assets/caloyface.webp"
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';


const containerProps = {
  background: "rgba(60,60,60,.25)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: {lg: 15},
  pt: 25,
  pb: 18
}

const buttonContainerProps = {
  display:"flex",
  gap: 2,
  mt: 8
}

const buttonProps = {
  px:4,
  fontSize: 16,
  letterSpacing: 1
}

const imageContainerProps = { 
  width: {
    md: 60, 
    lg: 65, 
    xl: 230
  }, 
  display: "flex", 
  justifyContent: "left",
  borderRadius: "50%",
  overflow: "hidden"
}

const textContainerProps = {
  display:"flex",
  flexDirection: "column",
  maxWidth: {xs: "100%", lg:"45%"}
}
const titleTextProps = {
  fontSize: 40,
  fontWeight: 600,
  letterSpacing: 1.2,
  mb: 3,
}

const descTextProps = {
  fontSize: 13,
  lineHeight: 1.8,
  opacity: .9,
  fontWeight: 200,
  letterSpacing: 1.1
}


const Header = ({ professionalSummary, resume }) => {
  return (
    <Box sx={containerProps}>
      <Box sx={textContainerProps}>
        <Typography variant='h6' sx={titleTextProps}>I am Carl,</Typography>
        <Typography variant="h6" sx={descTextProps}>{professionalSummary}</Typography>
        <Box sx={buttonContainerProps}>
          <Button variant="contained" sx={buttonProps} startIcon={<HandshakeIcon/>} color="primary">Hire me</Button>
          <Button variant="outlined" sx={buttonProps} startIcon={<DescriptionIcon/>} color='info'>My CV</Button>
        </Box>
      </Box>
      <Box sx={imageContainerProps}>
        <Image src={caloyface} alt="head" fit="cover" height="auto" width="auto" duration={300}/>
      </Box>
    </Box>
  )
}

export default Header