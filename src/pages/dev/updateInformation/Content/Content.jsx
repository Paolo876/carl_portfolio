import React from 'react'
import { Box } from '@mui/material'
import CareerObjective from './CareerObjective'
import WorkExperience from './WorkExperience'
import PersonalInformation from './PersonalInformation'
import ProfessionalSummary from './ProfessionalSummary'
import Resume from './Resume'
import SoftwareSkills from './SoftwareSkills'

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
      }}
    >
      <CareerObjective id="careerObjective" title="Career Objective"/>
      <WorkExperience/>
      <PersonalInformation/>
      <ProfessionalSummary/>
      <Resume/>
      <SoftwareSkills/>
    </Box>
  )
}

export default Content