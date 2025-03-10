import React from 'react'
import { useNavigate } from 'react-router';
import { Box, IconButton, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        mt: 2
      }}
    >
      <IconButton 
        size="small" 
        sx={{borderRadius: 2}} 
        onClick={() => navigate("/")}
      >
        <KeyboardBackspaceIcon style={{fontSize: "inherit"}} color="primary"/>
        <Typography sx={{fontSize: 12, ml: .75, fontWeight: 500, letterSpacing: .8, color: "primary.light"}}>Back To Home Page</Typography>
      </IconButton>
    </Box>
  )
}

export default BackButton