import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Paper, Box, Typography, ButtonBase, IconButton, Tooltip } from '@mui/material'
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
  fontSize: {lg: 12, xl: 13},
}

const boxBorderProps = {
  mt: {lg: 3, xl: 4},
  pt: {lg: 4, xl: 6},
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
        right:{lg: 4, xl: 8},
        left: "auto",
        mr: {lg: 4, xl: 8},
        overflowY: "auto",
        pb: {lg: isSidebarCollapsed.state ? 8 : 6, xl: isSidebarCollapsed.state ? 10 : 8},
        mt: {md: pageTopMargin.md + 5, lg: pageTopMargin.lg + 5, xl: pageTopMargin.xl + 5 },
        px: isSidebarCollapsed.state ? 3 : 4,
        width: isSidebarCollapsed.state ? isSidebarCollapsed.widthOn : isSidebarCollapsed.widthOff,
        height: isSidebarCollapsed.state ? "auto" : "88vh",
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
          mt: { lg: 4 },
          height: {
            lg: isSidebarCollapsed.state ? 35 : 65, 
            xl: isSidebarCollapsed.state ? 45 : 75
          }, 
          display: "flex", 
          justifyContent: "center",
        }}
      >
        <Image src={logo} fit="cover" height="auto" width="auto" duration={100}/>
      </Box>
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          display: isSidebarCollapsed.state ? "none" : "block"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 2.5,
            fontSize: {lg: 16, xl:18},
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
            fontSize: {lg: 11, xl:12},
            opacity: .9,
            mt: 1,
          }}  
        >
          <LocationOnIcon style={{fontSize: "inherit", opacity: .6, }}/> DOHA, QATAR 
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { lg:10 },
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
          <>
            <ButtonBase sx={buttonProps} onClick={() => navigate("/about")}>
              <PersonIcon style={{fontSize: "inherit", opacity: .6}}/>
              <Typography variant='h6' sx={textProps}>ABOUT</Typography>
            </ButtonBase>
            <ButtonBase sx={buttonProps}>
              <PhoneIcon style={{fontSize: "inherit", opacity: .6}}/>
              <Typography variant='h6' sx={textProps}>CONTACT</Typography>
            </ButtonBase>
          </>
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
          <>
            <Typography variant='h6' sx={{fontSize: 12, letterSpacing: 1.5, fontWeight: 300, mb: 3, opacity: .8}}>FOLLOW MY SOCIAL:</Typography>
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
          </>
        }
      </Box>
      {!isSidebarCollapsed.state && <Box sx={boxBorderProps}>
        <Typography variant='h6' sx={{fontSize: 12, letterSpacing: 1.5, fontWeight: 300, mb: 3, opacity: .8}}>EMAIL:</Typography>
        <ButtonBase sx={{...buttonProps, opacity: 1}} href="mailto: carl.dimabuyu@gmail.com" target="_blank" rel="noreferrer">
          <Typography variant='h6' sx={{...textProps, fontWeight: 500, color: "primary.light", letterSpacing: 1 }}>carl.dimabuyu@gmail.com</Typography>
        </ButtonBase>
      </Box>}
    </Paper>
  )
}

export default Sidebar