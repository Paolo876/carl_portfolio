import React from 'react'
import { Paper, Box } from '@mui/material'
import BackButton from './BackButton'
import Information from './Information'
import ProjectInformation from './ProjectInformation'
import PagesList from '../../../components/layout/Sidebar/PagesList'
import SocialLinksList from '../../../components/layout/Sidebar/SocialLinksList'
import EmailInformation from '../../../components/layout/Sidebar/EmailInformation'


const containerProps = {
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
  display: {xs: "none", md:"initial"},
  width : {sm: "70px", md: "230px", lg: "280px", xl: "340px"},
  maxHeight: "85vh",

}

const pageTopMargin = {
  xs: 1,
  lg: 1,
  xl: 4
}


const PostSidebar = ({ title, softwares, style }) => {
  return (
    <Paper
      sx={{
        ...containerProps,
        mt: {sm: 6, md: 6, lg: pageTopMargin.lg + 5, xl: pageTopMargin.xl + 5 },
        px: {md: 3, lg: 4},
      }}
    >
      <Box
        sx={{
          height: "min-content",
          display: "initial"
        }}
      >
        <BackButton/>
        <ProjectInformation title={title} softwares={softwares} style={style}/>
        <Information/>
        <PagesList/>
        <SocialLinksList/>
        <EmailInformation/>
      </Box>

    </Paper>
  )
}

export default PostSidebar