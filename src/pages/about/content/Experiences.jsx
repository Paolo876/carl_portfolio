import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
  gap: 2,
  mb: {lg: 5}
}

const durationTextProps = {
  fontSize: {lg: 24},
  fontWeight: 800,
  letterSpacing: 1,
  opacity: .95,
  mt: 2,
}

const jobTitleTextProps = {
  fontSize: {lg: 16},
  fontWeight: 500,
  letterSpacing: .8,
  opacity: .8,
  mb:{ lg: 2}
}

const companyTextProps = {
  fontSize: {lg: 17},
  fontWeight: 500,
  opacity: .8,
  mb: {lg: 1}
}

const addressTextProps = {
  fontSize: {lg: 14},
  fontWeight: 200,
  opacity: .7,
}

const responsibilitiesTextProps = {
  fontWeight: 200,
  fontSize: {lg: 13.5},
  letterSpacing: 1,
  opacity: .85 
}

const Experiences = ({ experiences }) => {

  return (
    <Box sx={containerProps}>
      <Typography sx={titleTextProps} variant="h6">Work Experience</Typography>
      <Box sx={experiencesContainer}x>
        {[...experiences].reverse().map(item => <Box key={item.company} sx={experiencesItemContainer}>
          <Box>
            <Typography variant="h6" sx={durationTextProps}>{item.duration}</Typography>
            <Typography sx={jobTitleTextProps}>{item.jobTitle}</Typography>
            <Typography sx={companyTextProps}>{item.company}</Typography>
            <Typography sx={addressTextProps}><LocationOnIcon style={{fontSize: "inherit"}} color="primary"/> {item.address}</Typography>
          </Box>
          <List>
            {item.responsibilities.map(_item => <ListItem key={_item}>
              <Typography variant='h6' sx={responsibilitiesTextProps}>- {_item}</Typography>
            </ListItem>)}
          </List>
        </Box>)}
      </Box>
    </Box>
  )
}

export default Experiences
