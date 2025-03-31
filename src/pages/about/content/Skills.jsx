import { Box, Grid, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';

import React from 'react'
import Image from 'mui-image'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const containerProps = {
  background: "rgba(60,60,60,.25)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: {lg: 5},
  pt: 20,
  pb: 16,
  px: {lg: 8},
}

const titleTextProps = {
  fontSize: 40,
  fontWeight: 600,
  letterSpacing: 1.2,
  mb: 3,
}


const imageContainerProps = { 
  width: {
    md: 60, 
    lg: 65, 
    xl: 80
  }, 
  display: "flex", 
  justifyContent: "left",
  borderRadius: "50%",
  overflow: "hidden"
}



// filename: , name: , src: ""
const Skills = ({ skills }) => {
  return (
    <Box sx={containerProps}>
      <Typography sx={titleTextProps} variant="h6">My Skills</Typography>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {skills.map(item => <Grid size={1.5} key={item.fileName}>
            <Item>
              <Box sx={imageContainerProps}>
                <Image src={item.src} alt={item.fileName} sx={{filter:"grayscale(1)"}} duration={0}/>
              </Box>
              <Typography>{item.name}</Typography>
            </Item>
          </Grid>)}
        </Grid>

      </Box>
    </Box>
  )
}

export default Skills