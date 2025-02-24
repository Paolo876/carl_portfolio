import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Paper, Box, Typography, ButtonBase, IconButton, Tooltip, Fade } from '@mui/material'
import Image from 'mui-image'
import logo from "../../assets/logo_white_100.png"

// icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

const buttonProps = {
  p:0,
  m:0,
  my: 1.8,
  display: "flex",
  flexDirection: "row",
  gap: 1.5,
  opacity: .9,
  "&&:hover" : {
    filter: "brightness(130%)",
    opacity: 1,
  }
}

const textProps = {
  fontWeight: 400,
  letterSpacing: 1.25,
  fontSize: { md: 11, lg: 12, xl: 13},
}

const boxBorderProps = {
  mt: {md: 2, lg: 3, xl: 4},
  pt: {md: 3, lg: 4, xl: 6},
  borderTop: 1,
  borderColor: "primary.dark"
}


const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed, pageTopMargin }) => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        gridArea: "nav",
        border: 1,
        borderColor: "rgba(255,255,255, .05)",
        borderRadius: 4,
        position: "fixed",
        top:0,
        right:{md: 3, lg: 4, xl: 8},
        left: "auto",
        mr: {md: 3, lg: 4, xl: 8},
        overflowY: "auto",
        pb: {md: isSidebarCollapsed.state ? 7 : 6, lg: isSidebarCollapsed.state ? 8 : 5, xl: isSidebarCollapsed.state ? 10 : 8},
        mt: {md: 6, lg: pageTopMargin.lg + 5, xl: pageTopMargin.xl + 5 },
        px: {md: isSidebarCollapsed.state ? 2 : 3, lg: isSidebarCollapsed.state ? 3 : 4},
        width: isSidebarCollapsed.state ? isSidebarCollapsed.widthOn : isSidebarCollapsed.widthOff,
        // height: {md: "auto", lg: isSidebarCollapsed.state ? "auto" : "88vh"},
        height: "auto",
        transition: "150ms width ease"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: isSidebarCollapsed.state ? "center" : "right",
          mt: 2
        }}
      >
        {isSidebarCollapsed.state ? 
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
      <Box 
        sx={{ 
          mt: { md: 3, lg: 4 },
          height: {
            md: isSidebarCollapsed.state ? 35 : 60, 
            lg: isSidebarCollapsed.state ? 35 : 65, 
            xl: isSidebarCollapsed.state ? 45 : 75
          }, 
          display: "flex", 
          justifyContent: "center",
        }}
      >
        <Image src={logo} fit="cover" height="auto" width="auto" duration={250}/>
      </Box>
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          display: isSidebarCollapsed.state ? "none" : "block"
        }}
      >
        <Fade in={!isSidebarCollapsed.state} timeout={{enter: 350}} style={{transitionDelay: "200ms"}}>
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
      <Box
        sx={{
          mt: { md: 8, lg:10 },
        }}
      >
        {isSidebarCollapsed.state ? 
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center"
            }}
          >
            <Tooltip title="About" placement="left" arrow>
              <IconButton sx={{borderRadius: 2, background: "rgba(255,255,255,0.05)"}} color="primary"><PersonIcon style={{fontSize: "inherit"}}/></IconButton>
            </Tooltip>
            <Tooltip title="Contact" placement="left" arrow>
              <IconButton sx={{borderRadius: 2, background: "rgba(255,255,255,0.05)"}} color="primary"><PhoneIcon style={{fontSize: "inherit"}}/></IconButton>
            </Tooltip>
          </Box>:
          <Fade in={!isSidebarCollapsed.state} timeout={{enter: 350}} style={{transitionDelay: "300ms"}}>
            <Box>
              <ButtonBase sx={buttonProps} onClick={() => navigate("/about")}>
                <PersonIcon style={{fontSize: "inherit", opacity: .6}}/>
                <Typography variant='h6' sx={textProps}>ABOUT</Typography>
              </ButtonBase>
              <ButtonBase sx={buttonProps}>
                <PhoneIcon style={{fontSize: "inherit", opacity: .6}}/>
                <Typography variant='h6' sx={textProps}>CONTACT</Typography>
              </ButtonBase>
            </Box>
          </Fade>
        }
      </Box>
      <Box sx={boxBorderProps}>
        {isSidebarCollapsed.state ? 
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center"
            }}
          >
            <Tooltip title="LinkedIn" placement="left" arrow>
              <IconButton sx={{background: "rgba(255,255,255,0.05)"}}><LinkedInIcon style={{fontSize: "inherit", opacity: .7}}/></IconButton>
            </Tooltip>
            <Tooltip  title="Facebook" placement="left" arrow>
              <IconButton sx={{background: "rgba(255,255,255,0.05)"}}><FacebookIcon style={{fontSize: "inherit", opacity: .7}}/></IconButton>
            </Tooltip>
            <Tooltip  title="Instagram" placement="left" arrow>
              <IconButton sx={{background: "rgba(255,255,255,0.05)"}}><InstagramIcon style={{fontSize: "inherit", opacity: .7}}/></IconButton>
            </Tooltip>
          </Box>:
          <Fade in={!isSidebarCollapsed.state} timeout={{enter: 350}} style={{transitionDelay: "450ms"}}>
            <Box>
              <Typography variant='h6' sx={{fontSize: {md: 11, lg: 12}, letterSpacing: 1.5, fontWeight: 300, mb: 3, opacity: .8}}>FOLLOW MY SOCIAL:</Typography>
              <ButtonBase sx={buttonProps}>
                <LinkedInIcon style={{fontSize: "inherit", opacity: .6}}/>
                <Typography variant='h6' sx={textProps}>LINKEDIN</Typography>
              </ButtonBase>
              <ButtonBase sx={buttonProps}>
                <FacebookIcon style={{fontSize: "inherit", opacity: .6}}/>
                <Typography variant='h6' sx={textProps}>FACEBOOK</Typography>
              </ButtonBase>
              <ButtonBase sx={buttonProps}>
                <InstagramIcon style={{fontSize: "inherit", opacity: .6}}/>
                <Typography variant='h6' sx={textProps}>INSTAGRAM</Typography>
              </ButtonBase>
            </Box>
          </Fade>
        }
      </Box>
      {!isSidebarCollapsed.state && <Box sx={boxBorderProps}>
        <Typography variant='h6' sx={{fontSize: {md: 11, lg: 12}, letterSpacing: 1.5, fontWeight: 300, mb: {md: 1, xl:3}, opacity: .8}}>EMAIL:</Typography>
        <ButtonBase sx={{...buttonProps, opacity: 1}} href="mailto: carl.dimabuyu@gmail.com" target="_blank" rel="noreferrer">
          <Typography variant='h6' sx={{...textProps, fontWeight: 500, color: "primary.light", letterSpacing: 1 }}>carl.dimabuyu@gmail.com</Typography>
        </ButtonBase>
      </Box>}
    </Paper>
  )
}

export default Sidebar