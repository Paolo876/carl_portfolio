import React from 'react'
import { Box, IconButton } from '@mui/material'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';


const CollapseButton = ({ state, setIsSidebarCollapsed }) => {
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: state ? "center" : "right",
        mt: 2
      }}
    >
      {state ? 
        <IconButton 
          size="small" 
          sx={{borderRadius: 2, transform: "rotate(180deg)"}} 
          onClick={() => setIsSidebarCollapsed(prevState => ({...prevState, state: false}))}
        >
          <KeyboardTabIcon style={{fontSize: "inherit"}}/>
        </IconButton>
      : 
        <IconButton 
          size="small" 
          sx={{borderRadius: 2}}
          onClick={() => setIsSidebarCollapsed(prevState => ({...prevState, state: true}))}
        >
          <KeyboardTabIcon  style={{fontSize: "inherit"}}/>
        </IconButton>
      }
    </Box>
  )
}

export default CollapseButton