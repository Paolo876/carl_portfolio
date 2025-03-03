import React from 'react'
import { useNavigate, useLocation } from 'react-router';
import { Box, Tooltip, IconButton, Fade, Typography, ButtonBase } from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';


const containerProps = {
  mt: { sm: 6, md: 8, lg:10 },
}

const listContainerProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
  mt: { sm: 6, md: 8, lg:10 },
}

const iconButtonProps = {
  borderRadius: 2, 
  background: "rgba(255,255,255,0.05)",

}

const iconProps = {
  fontSize: "inherit", 
  opacity: .85
}

const buttonProps = {
  py: .75,
  px: .75,
  m:0,
  my: 1.8,
  display: "flex",
  flexDirection: "row",
  gap: 1.5,
  opacity: .75,
  width: "100%",
  justifyContent: "left",
  borderRadius: 1,
  transition: "150ms all ease",
  "&&:hover" : {
    opacity: 1,
    backgroundColor: "primary.main"
  },
}

const textProps = {
  fontWeight: 500,
  letterSpacing: 1.5,
  fontSize: { xs: 11, md: 11, lg: 12, xl: 13},
}


const PagesList = ({ state }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  return (
    <Box sx={containerProps}>
      {state ? 
        <Box sx={listContainerProps}>
          <Tooltip title="Home" placement="left" arrow>
            <IconButton 
              sx={iconButtonProps} 
              color="primary"
              disabled={pathname === "/"}
              onClick={() => navigate("/")}
            >
              <HomeIcon style={iconProps}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="About" placement="left" arrow>
            <IconButton 
              sx={iconButtonProps} 
              color="primary"
              disabled={pathname === "/about"}
              onClick={() => navigate("/about")}
            >
              <PersonIcon style={iconProps}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact" placement="left" arrow>
            <IconButton 
              sx={iconButtonProps} 
              color="primary"
              disabled={pathname === "/contact"}
              onClick={() => navigate("/contact")}
            >
              <PhoneIcon style={iconProps}/>
            </IconButton>
          </Tooltip>
        </Box>:
        <Fade in={!state} timeout={{enter: 350}} style={{transitionDelay: "300ms"}}>
          <Box>
            <ButtonBase 
              sx={{
                ...buttonProps,
                backgroundColor: pathname === "/" ? "primary.dark" : "none",
                opacity: pathname === "/" ? .9 : .75,
              }} 
              onClick={() => navigate("/")}
              disabled={pathname === "/"}
            >
              <HomeIcon style={iconProps}/>
              <Typography variant='h6' sx={textProps}>HOME</Typography>
            </ButtonBase>
            <ButtonBase 
              sx={{
                ...buttonProps,
                backgroundColor: pathname === "/about" ? "primary.dark" : "none",
                opacity: pathname === "/about" ? .9 : .75,
              }}
              onClick={() => navigate("/about")}
              disabled={pathname === "/about"}
            >
              <PersonIcon style={iconProps}/>
              <Typography variant='h6' sx={textProps}>ABOUT</Typography>
            </ButtonBase>
            <ButtonBase
              sx={{
                ...buttonProps,
                backgroundColor: pathname === "/contact" ? "primary.dark" : "none",
                opacity: pathname === "/contact" ? .9 : .75,
              }}
              onClick={() => navigate("/contact")}
              disabled={pathname === "/contact"}
            >
              <PhoneIcon style={iconProps}/>
              <Typography variant='h6' sx={textProps}>CONTACT</Typography>
            </ButtonBase>
          </Box>
        </Fade>
      }
    </Box>
  )
}

export default PagesList