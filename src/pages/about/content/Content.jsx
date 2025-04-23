import React from 'react'
import useAboutRedux from "../../../hooks/useAboutRedux";
import { Alert, Box, Fade } from '@mui/material'
import Header from './Header'
import Skills from './Skills'
import Experiences from './Experiences'
import LoadingSpinner from "../../../components/ui/LoadingSpinner"
import Objectives from './Objectives';


const mainContainerProps = {
  mt:5,
  borderRadius: 5,
  overflow: "auto"
}
const Content = ({ gridArea }) => {
  const { isLoading, about, error} = useAboutRedux();


  if(isLoading) return <Box><LoadingSpinner/></Box>;
  if(!isLoading && !error )return (
    <Box sx={{ ...mainContainerProps, gridArea }}>
      <Header professionalSummary={about.professionalSummary} resume={about.resume}/>
      <Objectives careerObjective={about.careerObjective}/>
      <Skills skills={about.softwareSkills}/>
      <Experiences experiences={about.experience}/>
    </Box>
  )
  if(!isLoading && error) (
    <Box>
      <Alert severity='error'>{error || "Failed to fetch data."}</Alert>
    </Box>
  )
}

export default Content