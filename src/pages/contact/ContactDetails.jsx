import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'

const containerProps = {
  display: "flex",
  flexDirection: "column",
  mr: {lg: 5},
  justifyContent: "flex-end",
  alignItems: "flex-end"
}


const headerTextProps = {
  fontWeight: 600,
  fontSize: {xs: 17, sm: 18, md: 20, lg: 22},
  color: "primary.light",
  letterSpacing: 1.5,
  pb: 3,
}

const informationContainerProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  mt: {lg: 5}
}

const nameProps = {
  fontSize: {lg: 30},
  fontWeight: 600,
  letterSpacing: 1.5 
}

const addressProps = {
  fontSize: {lg: 22},
  fontWeight: 200,
  letterSpacing: .8 
}

const phoneProps = {
  fontSize: {lg: 22},
  fontWeight: 500,
  letterSpacing: .8 
}

const emailProps = {

}



const ContactDetails = ({ information, resume }) => {
  console.log(resume, information)

  return (
    <Box sx={containerProps}>
      <Typography variant="h6" sx={headerTextProps}>Contact Details</Typography>
      <Box sx={informationContainerProps}>
        <Typography variant='h6' sx={nameProps}>{information.name}</Typography>
        <Typography variant='h6' sx={addressProps}>{information.address}</Typography>
        <ButtonBase sx={{mt: 8, color: "secondary.light"}}><Typography variant='h6' sx={phoneProps}>{information.phone}</Typography></ButtonBase>
        <ButtonBase sx={{mt: 2, color: "secondary.light"}}><Typography variant='h6' sx={emailProps}>{information.email}</Typography></ButtonBase>
      </Box>
    </Box>
  )
}

export default ContactDetails