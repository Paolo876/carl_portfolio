import useAboutRedux from '../../../../hooks/useAboutRedux'
import { Box } from '@mui/material'
import CareerObjective from './CareerObjective'
import WorkExperience from './WorkExperience'
import PersonalInformation from './PersonalInformation'
import ProfessionalSummary from './ProfessionalSummary'
import Resume from './Resume'
import SoftwareSkills from './SoftwareSkills/SoftwareSkills'

const Content = () => {
  const { isLoading } = useAboutRedux();

  if(!isLoading) return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        flexDirection: "column",
      }}
    >
      <CareerObjective id="careerObjective" title="Career Objective"/>
      <WorkExperience id="experience" title="Work Experience"/>
      <PersonalInformation id="personalInformation" title="Personal Information"/>
      <ProfessionalSummary id="professionalSummary" title="Professional Summary"/>
      <Resume id="resume" title="Resume"/>
      <SoftwareSkills id="softwareSkills" title="Software Skills"/>
    </Box>
  )
}

export default Content