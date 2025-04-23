import { Box, Typography, Paper } from '@mui/material'

import React from 'react'
import Image from 'mui-image'


const containerProps = {
  // background: "rgba(60,60,60,.25)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: {lg: 5},
  pt: 20,
  pb: 16,
  px: {lg: 8},
  minHeight: "70vh"
}

const titleTextProps = {
  fontSize: {lg: 35},
  fontWeight: 600,
  letterSpacing: 1.4,
  mb: {lg: 8},
}

const skillsContainerProps = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  gap: {lg: 6}
}

const skillItemContainerProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  // border: 1,
  // borderColor: "rgba(0,0,0,0.15)",
  // borderRadius: 5,
  py: 1,
  px: 2,
}


const imageContainerProps = { 
  height: {
    md: 45, 
    lg: 50, 
  }, 
  width: {
    lg: 80
  },
  display: "flex",
  justifyContent: "center", 
  // borderRadius: "50%",
}

const imageProps = {
  filter: "saturate(80%)",

}

const skillItemTextProps = {
  fontSize: { xs: 11, sm: 13, md: 14, lg: 15 },
  fontWeight: 300,
  letterSpacing: 1.5,
  opacity: .95
}



// filename: , name: , src: ""
const Skills = ({ skills }) => {
  return (
    <Box sx={containerProps}>
      <Typography sx={titleTextProps} variant="h6">My Skills</Typography>
      <Box sx={skillsContainerProps}>
      {skills.map(item => <Box size={1.5} key={item.fileName} sx={skillItemContainerProps}>
        <Box sx={imageContainerProps}>
          <Image src={item.src} alt={item.fileName} sx={imageProps} duration={0} fit="scale-down" />
        </Box>
        <Typography variant='h6' sx={skillItemTextProps}>{item.name}</Typography>
      </Box>)}
        {/* <Grid container spacing={2}>
          {skills.map(item => <Grid size={1.5} key={item.fileName}>
            <Item>
              <Box sx={imageContainerProps}>
                <Image src={item.src} alt={item.fileName} sx={{filter:"grayscale(1)"}} duration={0}/>
              </Box>
              <Typography>{item.name}</Typography>
            </Item>
          </Grid>)}
        </Grid> */}

      </Box>
    </Box>
  )
}

export default Skills