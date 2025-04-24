import React from 'react'
import { Box, Typography } from '@mui/material'


const containerProps = {
  // background: "rgba(60,60,60,.25)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: {lg: 5},
  pt: 20,
  pb: 16,
  px: {lg: 8},
  minHeight: "50vh"
}

const titleTextProps = {
  fontSize: {lg: 35},
  fontWeight: 600,
  letterSpacing: 1.4,
  mb: {lg: 8},
}

const experiencesContainer = {

}

const experiencesItemContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
}

const Experiences = ({ experiences }) => {
  console.log(experiences)
  return (
    <Box sx={containerProps}>
      <Typography sx={titleTextProps} variant="h6">Work Experience</Typography>
      <Box sx={experiencesContainer}>
        {[...experiences].reverse().map(item => <Box key={item.company} sx={experiencesItemContainer}>
          <Box>
            <Typography variant="h6">{item.duration}</Typography>
            <Typography>{item.jobTitle}</Typography>
            <Typography>{item.company}</Typography>
            <Typography>{item.address}</Typography>
          </Box>
          <Box>
            {item.responsibilities.map(_item => <Typography key={_item}>{_item}</Typography>)}
          </Box>
        </Box>)}
      </Box>
    </Box>
  )
}

export default Experiences
