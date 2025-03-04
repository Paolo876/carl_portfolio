import React from 'react'
import { Box } from '@mui/material'
import Image from 'mui-image'
import logo from "../../../assets/logo_white_100.png"


const Logo = ({ state }) => {
  return (
    <Box 
      sx={{ 
        mt: { sm: 3, md: 3, lg: 4 },
        height: {
          md: state ? 35 : 60, 
          lg: state ? 35 : 65, 
          xl: state ? 40 : 70
        }, 
        display: "flex", 
        justifyContent: "center",
      }}
    >
      <Image src={logo} fit="scale-down" height="auto" width="auto" duration={250}/>
    </Box>
  )
}

export default Logo