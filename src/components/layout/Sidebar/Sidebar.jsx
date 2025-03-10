import { Paper, Box } from '@mui/material'

import CollapseButton from './CollapseButton';
import Logo from './Logo';
import Information from './Information';
import PagesList from './PagesList';
import SocialLinksList from './SocialLinksList';
import EmailInformation from './EmailInformation';
import SmallScreenSidebar from './SmallScreenSidebar/SmallScreenSidebar';


const containerProps = {
  // gridArea: "nav",
  border: 1,
  borderColor: "rgba(255,255,255, .05)",
  borderRadius: 4,
  position: "fixed",
  top:0,
  right:{sm: 2, md: 3, lg: 4, xl: 8},
  mr: {sm: 2, md: 3, lg: 4, xl: 8},
  left: "auto",
  overflowY: "auto",
  transition: "250ms width ease",
  display: {xs: "none", sm:"initial"},
  maxHeight: "85vh",
  contain: "content"

}

const mainContainerProps = {
  display: {xs: "none", md:"initial"},
  height: "min-content",

}


const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed, pageTopMargin }) => {

  return (
    <>
      <Paper 
        sx={{
          ...containerProps,
          background: isSidebarCollapsed.state ? "rgba(55,55,55,0.35)": "rgba(55,55,55,0.2)",
          pb: {sm: 6, md: isSidebarCollapsed.state ? 7 : 6, lg: isSidebarCollapsed.state ? 8 : 5, xl: isSidebarCollapsed.state ? 10 : 8},
          mt: {sm: 6, md: 6, lg: pageTopMargin.lg + 5, xl: pageTopMargin.xl + 5 },
          px: {sm: 2, md: isSidebarCollapsed.state ? 2 : 3, lg: isSidebarCollapsed.state ? 3 : 4},
          width: isSidebarCollapsed.state ? isSidebarCollapsed.widthOn : isSidebarCollapsed.widthOff,
        }}
      >
        <Box sx={mainContainerProps}>
          <CollapseButton state={isSidebarCollapsed.state} setIsSidebarCollapsed={setIsSidebarCollapsed}/>
          <Logo state={isSidebarCollapsed.state}/>
          <Information state={isSidebarCollapsed.state}/>
          <PagesList state={isSidebarCollapsed.state}/>
          <SocialLinksList state={isSidebarCollapsed.state}/>
          <EmailInformation state={isSidebarCollapsed.state}/>
        </Box>
      </Paper>

      <SmallScreenSidebar/>
    </>
  )
}

export default Sidebar