import React from 'react'
import { Box, Typography } from '@mui/material'
import DevPageContainer from '../../../components/layout/DevPageContainer'
import SidebarNavigation from './SidebarNavigation'
import Content from './Content/Content'

const mainContainerProps = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "70vh"
}

const headerTextContainerProps = {
  mt: {xs: 1, sm: 2, md: 2},
  mb: {xs: 5, sm: 8, md: 8, lg: 8}

}
const headerTextProps = {
  fontSize: {xs: 20, sm: 20, md: 26, lg: 30},
  fontWeight: 600,
  letterSpacing: 1.5,
  textDecoration: "underline"
}

const contentContainerProps = {
  display: "grid",
  gridTemplateColumns: "1fr 4fr"
}

const navigationOptions = [ 
  {id :"careerObjective", title: "Career Objective"},
  {id :"experience", title: "Work Experiences"},
  {id :"information", title: "Personal Information"},
  {id :"professionalSummary", title: "Professional Summary"},
  {id :"resume", title: "Resume"},
  {id :"softwareSkills", title: "Software Skills"},
]

const UpdateInformation = () => {
  return (
    <DevPageContainer>
      <Box sx={mainContainerProps}>
        <Box sx={headerTextContainerProps}>
          <Typography variant="h6" sx={headerTextProps}>Update Information</Typography>
        </Box>
        <Box sx={contentContainerProps}>
          <SidebarNavigation navigationOptions={navigationOptions}/>
          <Content/>
        </Box>
      </Box>
    </DevPageContainer>
  )
}

export default UpdateInformation