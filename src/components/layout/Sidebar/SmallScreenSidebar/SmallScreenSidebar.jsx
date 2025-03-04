import React from 'react'
import { useNavigate, useLocation } from 'react-router';
import { Paper, Box, IconButton } from '@mui/material'
import Image from 'mui-image'
import logo from "../../../../assets/logo_white_100.png";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const containerProps = {
  gridArea: "nav",
  border: 1,
  borderColor: "rgba(255,255,255, .05)",
  borderRadius: {xs: 3, sm:4},
  position: "fixed",
  top:{xs: "initial", sm: 0 },
  bottom:{xs: 10, sm: "initial"},
  right:{xs: 0, sm: 2},
  left: {xs: 0, sm:"auto"},
  mr: {sm: 2},
  overflowY: "auto",
  pb: {xs: 0, sm: 6 },
  pt: {xs: 0, sm: 0 },
  mt: {sm: 6 },
  px: {sm: 2 },
  height: "auto",
  transition: "150ms width ease",
  display: {xs: "none", sm: "initial", md:"none"},
  zIndex: 5,
  width: {xs: "fit-content", sm: "initial"},
  marginInline: {xs: "auto", sm:"none"}
}

const logoContainerProps = { 
  mt: { sm: 6, },
  height: {sm: 35 }, 
  display: {xs: "none", sm:"flex" }, 
  justifyContent: "center",
}

const pagesContainerProps = {
  mt: { sm: 6, md: 8, lg:10 },
  display: "flex",
  flexDirection: { xs: "row", sm:"column" },
  gap: {sm:2},
  alignItems: "center"
}

const iconButtonProps = {
  borderRadius: 2, 
  background: "rgba(255,255,255,0.05)"
}

const boxBorderProps = {
  mt: {sm: 2, md: 2, lg: 3, xl: 4},
  pt: {sm: 2, emd: 3, lg: 4, xl: 6},
  borderTop: 1,
  borderColor: "primary.dark"
}

const socialLinksContainerProps = {
  opacity: .8
}

const socialLinksIconProps = {
  fontSize: "inherit", 
  opacity: .7
}


const SmallScreenSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  return (
    <Paper sx={containerProps}>
      <Box sx={logoContainerProps}>
        <Image src={logo} fit="scale-down" height="auto" width="auto" duration={250}/>
      </Box>
      <Box sx={pagesContainerProps}>
        <IconButton 
          sx={iconButtonProps} 
          color="primary"
          disabled={pathname === "/"}
          onClick={() => navigate("/")}
        >
          <HomeIcon style={{fontSize: "inherit"}}/>
        </IconButton>
        <IconButton 
          sx={iconButtonProps} 
          color="primary"
          disabled={pathname === "/about"}
          onClick={() => navigate("/about")}
        >
          <PersonIcon style={{fontSize: "inherit"}}/>
        </IconButton>
        <IconButton 
          sx={iconButtonProps} 
          color="primary"
          disabled={pathname === "/contact"}
          onClick={() => navigate("/contact")}
        >
          <PhoneIcon style={{fontSize: "inherit"}}/>
        </IconButton>
      </Box>
      <Box sx={{...boxBorderProps, display: "flex"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center"
          }}
        >
          <IconButton 
            sx={socialLinksContainerProps}
            href="https://www.linkedin.com/in/carladriantdimabuyu/" 
            target="_blank" 
            rel="noreferrer"
          >
            <LinkedInIcon style={socialLinksIconProps}/>
          </IconButton>
          <IconButton 
            sx={socialLinksContainerProps}
            href="https://www.instagram.com/adobotrash/" 
            target="_blank" 
            rel="noreferrer"
          >
            <InstagramIcon style={socialLinksIconProps}/>
          </IconButton>
        </Box>
      </Box>
    </Paper>
)
}

export default SmallScreenSidebar