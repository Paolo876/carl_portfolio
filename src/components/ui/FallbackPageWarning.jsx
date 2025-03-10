import React from 'react'
import { useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const FallbackPageWarning = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        height: "100%",
        mt: 1
      }}
    >
      <Typography>Page not found.</Typography>
      <Box>
        <Button 
          variant="outlined" 
          size="small" 
          startIcon={<ChevronLeftIcon/>}
          onClick={() => navigate("/")}
        >
          Back to Home Page
        </Button>
      </Box>
    </Box>
  )
}

export default FallbackPageWarning