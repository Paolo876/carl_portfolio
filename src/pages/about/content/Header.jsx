import React from 'react'
import Image from 'mui-image'
import { useNavigate } from 'react-router'
import { Box, Button, Typography } from '@mui/material'
import caloyface from "../../../assets/caloyface.webp"
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import { keyframes } from '@mui/system';


// animations
const slideLeft = keyframes`
  0% {
    transform: translateX(3em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appear = keyframes`
0% {
  opacity: 0
}
100% {
  opacity: 1;
}
`;

// styles 
const containerProps = {
  display: "flex",
  alignItems: {xs: "center", sm:"flex-start"},
  justifyContent: "center",
  flexDirection: {xs:"column-reverse", sm: "row"},
  gap: {xs: 10, sm: 8, md: 12, lg: 15},
  pt: {xs: 8, sm:25},
  pb: {xs: 8, sm: 18},
  minHeight: {xs: "40vh", sm: "45vh", md: "50vh", lg:"70vh"}
}

const buttonContainerProps = {
  display:"flex",
  gap: 2,
  mt: 8,
  opacity: 0,
  animation: `${appear} 1400ms ease forwards 1600ms`
}

const buttonProps = {
  px:4,
  fontSize: {xs: 13, sm: 14, md: 15, lg: 16},
  letterSpacing: 1,
}

const imageContainerProps = { 
  width: {
    xs: 120,
    sm: 150,
    md: 180, 
    lg: 200, 
    xl: 230
  }, 
  display: "flex", 
  justifyContent: "left",
  borderRadius: "50%",
  overflow: "hidden",
  opacity: 0,
  animation: `${appear} 800ms ease forwards 950ms`
}

const textContainerProps = {
  display:"flex",
  flexDirection: "column",
  maxWidth: {xs: "90%", sm: "70%", md: "60%", lg:"45%"}
}
const titleTextProps = {
  fontSize: {xs: 30, sm: 33, md: 35, lg: 40},
  fontWeight: 600,
  letterSpacing: 1.2,
  mb: 3,
  opacity: 0,
  animation: `${appear} 1900ms ease forwards 450ms`
}

const descTextProps = {
  fontSize: {xs: 12.5, md: 13, lg: 13},
  lineHeight: 1.8,
  opacity: 0,
  fontWeight: 200,
  letterSpacing: 1.1,
  animation: `${slideLeft} 900ms ease forwards 550ms`
}



const Header = ({ professionalSummary, resume }) => {
  const navigate = useNavigate();

  return (
    <Box sx={containerProps}>
      <Box sx={textContainerProps}>
        <Typography variant='h6' sx={titleTextProps}>I am Carl,</Typography>
        <Typography variant="h6" sx={descTextProps}>{professionalSummary}</Typography>
        <Box sx={buttonContainerProps}>
          <Button variant="contained" sx={buttonProps} startIcon={<HandshakeIcon/>} color="primary" onClick={() => navigate("/contact")}>Hire me</Button>
          <Button variant="outlined" sx={buttonProps} startIcon={<DescriptionIcon/>} color='info' href={resume.src} target='_blank'>My CV</Button>
        </Box>
      </Box>
      <Box sx={imageContainerProps}>
        <Image src={caloyface} alt="head" fit="cover" height="auto" width="auto" duration={300}/>
      </Box>
    </Box>
  )
}

export default Header