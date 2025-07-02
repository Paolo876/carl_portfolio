import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'


const textProps = {
  fontWeight: 200,
  fontSize: {xs: 14, sm: 16, md: 17, lg: 18},
  letterSpacing: .5,
}
const LoadingSpinner = ({ message, opacity=.3, size=30}) => {

  return (
    <Box
      sx={{
        position: "absolute", 
        width: "100%", 
        display: "flex", 
        flexDirection: "column",
        gap: {xs: 2, sm: 3, md: 5},
        height: "100%", 
        alignItems: "center", 
        justifyContent: "center", 
        top:0, 
        left:0, 
        zIndex: -1,
        opacity
      }}
    >
      <CircularProgress color='primary' size={size}/>
      {message && <Box>
        <Typography variant="h6" sx={textProps}>{message}</Typography>
      </Box>}
    </Box>  
  )
}

export default LoadingSpinner
