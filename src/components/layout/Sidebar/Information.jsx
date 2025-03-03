import React from 'react'
import { Box, Fade, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Information = ({ state }) => {
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: "center",
        display: state ? "none" : "block"
      }}
    >
      <Fade in={!state} timeout={{enter: 350}} style={{transitionDelay: "200ms"}}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: 2.5,
              fontSize: {md: 15, lg: 16, xl:18},
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
              fontSize: {md: 10, lg: 11, xl:12},
              opacity: .9,
              mt: 1,
            }}  
          >
            <LocationOnIcon style={{fontSize: "inherit", opacity: .6, }}/> DOHA, QATAR 
          </Typography>
        </Box>
      </Fade>
    </Box>
  )
}

export default Information