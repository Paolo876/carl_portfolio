import React from 'react'
import { Box, CircularProgress } from '@mui/material'


const LoadingSpinner = ({ }) => {

  return (
    <Box
      sx={{
        position: "absolute", 
        width: "100%", 
        display: "flex", 
        height: "100%", 
        alignItems: "center", 
        justifyContent: "center", 
        top:0, 
        left:0, 
        zIndex: -1,
        opacity: .3
      }}
    >
      <CircularProgress color='primary'/>
    </Box>  
  )
}

export default LoadingSpinner
