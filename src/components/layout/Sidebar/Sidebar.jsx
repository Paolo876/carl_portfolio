import { Paper, Box, Typography, ButtonBase, IconButton } from '@mui/material'
import Image from 'mui-image'
import logo from "../../../assets/logo_white_100.png"

// icons
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CollapseButton from './CollapseButton';
import Logo from './Logo';
import Information from './Information';
import PagesList from './PagesList';
import SocialLinksList from './SocialLinksList';
import EmailInformation from './EmailInformation';


const mainContainerProps = {
  gridArea: "nav",
  border: 1,
  borderColor: "rgba(255,255,255, .05)",
  borderRadius: 4,
  position: "fixed",
  top:0,
  right:{sm: 2, md: 3, lg: 4, xl: 8},
  left: "auto",
  mr: {sm: 2, md: 3, lg: 4, xl: 8},
  overflowY: "auto",
  height: "auto",
  transition: "150ms all ease",
  display: {xs: "none", md:"initial"}
}

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
  fontSize: { xs: 11, md: 11, lg: 12, xl: 13},
}

const boxBorderProps = {
  mt: {sm: 2, md: 2, lg: 3, xl: 4},
  pt: {sm: 2, emd: 3, lg: 4, xl: 6},
  borderTop: 1,
  borderColor: "primary.dark"
}


const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed, pageTopMargin }) => {



  return (
    <>
      <Paper 
        sx={{
          ...mainContainerProps,
          background: isSidebarCollapsed.state ? "rgba(55,55,55,0.35)": "rgba(55,55,55,0.2)",
          pb: {sm: 6, md: isSidebarCollapsed.state ? 7 : 6, lg: isSidebarCollapsed.state ? 8 : 5, xl: isSidebarCollapsed.state ? 10 : 8},
          mt: {sm: 6, md: 6, lg: pageTopMargin.lg + 5, xl: pageTopMargin.xl + 5 },
          px: {sm: 2, md: isSidebarCollapsed.state ? 2 : 3, lg: isSidebarCollapsed.state ? 3 : 4},
          width: isSidebarCollapsed.state ? isSidebarCollapsed.widthOn : isSidebarCollapsed.widthOff,
        }}
      >
        <CollapseButton state={isSidebarCollapsed.state} setIsSidebarCollapsed={setIsSidebarCollapsed}/>
        <Logo state={isSidebarCollapsed.state}/>
        <Information state={isSidebarCollapsed.state}/>
        <PagesList state={isSidebarCollapsed.state}/>
        <SocialLinksList state={isSidebarCollapsed.state}/>
        <EmailInformation state={isSidebarCollapsed.state}/>
      </Paper>

      {/* mobile */}
      <Paper
        sx={{
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
          display: {xs: "flex", sm: "initial", md:"none"},
          zIndex: 5,
          width: {xs: "fit-content", sm: "initial"},
          marginInline: {xs: "auto", sm:"none"}
        }}
      >
        <Box 
          sx={{ 
            mt: { sm: 6, },
            height: {sm: 35 }, 
            display: {xs: "none", sm:"flex" }, 
            justifyContent: "center",
          }}
        >
          <Image src={logo} fit="scale-down" height="auto" width="auto" duration={250}/>
        </Box>
        <Box
          sx={{
            mt: { sm: 6, md: 8, lg:10 },
          }}
        >
          <Box 
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm:"column" },
              gap: {sm:2},
              alignItems: "center"
            }}
          >
          {/* small media */}
            <IconButton sx={{display: {xs: "none", sm:"inline-flex"}, borderRadius: 2, background: "rgba(255,255,255,0.05)"}} color="primary"><PersonIcon style={{fontSize: "inherit"}}/></IconButton>
            <IconButton sx={{display: {xs: "none", sm:"inline-flex"}, borderRadius: 2, background: "rgba(255,255,255,0.05)"}} color="primary"><PhoneIcon style={{fontSize: "inherit"}}/></IconButton>
          </Box>
        </Box>
        <Box sx={{...boxBorderProps, display: {xs: "none", sm:"flex"}}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center"
            }}
          >
              <IconButton sx={{background: "rgba(255,255,255,0.05)"}}><LinkedInIcon style={{fontSize: "inherit", opacity: .7}}/></IconButton>
              <IconButton sx={{background: "rgba(255,255,255,0.05)"}}><FacebookIcon style={{fontSize: "inherit", opacity: .7}}/></IconButton>
              <IconButton sx={{background: "rgba(255,255,255,0.05)"}}><InstagramIcon style={{fontSize: "inherit", opacity: .7}}/></IconButton>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default Sidebar