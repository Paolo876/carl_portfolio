import { Box, Typography, Paper } from '@mui/material'

import React from 'react'
import Image from 'mui-image'


const containerProps = {
  // background: "rgba(60,60,60,.25)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: {xs: 3, sm: 4, md: 5, lg: 5},
  pt: {xs: 10, sm: 12, md: 18, lg: 25},
  pb: {xs: 7, sm: 8, md: 12, lg: 16},
  px: {lg: 8},
  minHeight: {lg: "50vh"}
}

const titleTextProps = {
  fontSize: {xs: 17, sm: 18, md: 20, lg: 22},
  fontWeight: 600,
  letterSpacing: 3,
  mb: {xs: 2, sm: 3, md: 5, lg: 10},
  textTransform: "uppercase",
  color: "primary.light"
}

const skillsContainerProps = {
  display: "grid",
  gridTemplateColumns: {xs: "1fr 1fr", md:"1fr 1fr 1fr"},
  width: "auto",
  gap: {xs: 1, sm: 4, md: 5, lg: 15}
}

const skillItemContainerProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  py: 1,
  px: 2,
}


const imageContainerProps = { 
  height: {
    xs: 50, 
    sm: 55,
    md: 60, 
    lg: 70, 
  }, 
  width: {
    xs: 55, 
    sm: 60, 
    md: 65,
    lg: 80
  },
  display: "flex",
  justifyContent: "center", 
}

const imageProps = {
  filter: "saturate(80%) grayscale(25%)",

}

const skillItemTextProps = {
  fontSize: { xs: 11, sm: 12, md: 12, lg: 13 },
  fontWeight: 500,
  letterSpacing: 2,
  opacity: .85
}



const Skills = ({ skills }) => {
  return (
    <Box sx={containerProps}>
      <Typography sx={titleTextProps} variant='h6'>Skills</Typography>
      <Box sx={skillsContainerProps}>
        {skills.map(item => <Box size={1.5} key={item.fileName} sx={skillItemContainerProps}>
          <Box sx={imageContainerProps}>
            <Image src={item.src} alt={item.fileName} sx={imageProps} duration={0} fit="scale-down" />
          </Box>
          <Typography variant='h6' sx={skillItemTextProps}>{item.name}</Typography>
        </Box>)}
      </Box>
    </Box>
  )
}

export default Skills