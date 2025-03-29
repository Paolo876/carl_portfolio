import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "../../../assets/logo_white_100.png"


const Information = () => {
  return (
    <Box
      sx={{ 
        mt: { sm: 3, md: 3, lg: 4 },
        display: "flex", 
        justifyContent: "left",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          height: {md: 28, lg: 30},
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={logo} fit="scale-down" height="auto" width="auto" duration={250}/>
      </Box>
      <Box
        sx={{
          height: {xl: 40},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          
        }}
      >
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 2.5,
            fontSize: {md: 12, lg: 13, xl:14},
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
            fontSize: {md: 10, lg: 10},
            opacity: .9,
            mt: .5,
          }}  
        >
          <LocationOnIcon style={{fontSize: "inherit", opacity: .6, }}/> DOHA, QATAR 
        </Typography>
      </Box>
    </Box>
  )
}

export default Information