import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'

const containerProps = {
  display: "flex",
  flexDirection: "column",
  mr: {lg: 5},
  justifyContent: "flex-end",
  alignItems: {xs: "flex-start", sm:"flex-end"},
  mb: {xs: 8, sm: 0},
  mt: {xs: 3, sm: 0}
}


const headerTextProps = {
  fontWeight: 600,
  fontSize: {xs: 18, sm: 18, md: 20, lg: 22},
  color: "primary.light",
  letterSpacing: 1.5,
  pb: 3,
}

const informationContainerProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: {xs: "flex-start", sm:"flex-end"},
  mt: {xs: 2, sm: 3, md: 3, lg: 5}
}

const nameProps = {
  fontSize: {xs: 20, sm: 20, md: 26, lg: 30},
  fontWeight: 600,
  textAlign: {sm: 'right'},
  letterSpacing: 1.5 
}

const addressProps = {
  fontSize: {xs: 17, md: 20, lg: 22},
  fontWeight: 200,
  letterSpacing: .8,
  textAlign: {sm: 'right'},
  opacity: .85
}

const phoneProps = {
  fontSize: {xs: 16, md: 18, lg: 19},
  fontWeight: 500,
  textAlign: {sm: 'right'},
  letterSpacing: 2 
}

const emailProps = {
  fontSize: {xs: 16, md: 18, lg: 19},
  fontWeight: 500,
  textAlign: {sm: 'right'},
  letterSpacing: 1 
}



const ContactDetails = ({ information, resume }) => {

  return (
    <Box sx={containerProps}>
      <Typography variant="h6" sx={headerTextProps}>Contact Details</Typography>
      <Box sx={informationContainerProps}>
        <Typography variant='h6' sx={nameProps}>{information.name}</Typography>
        <Typography variant='h6' sx={addressProps}>{information.address}</Typography>
        <ButtonBase 
          sx={{mt: {xs: 4, sm: 10, md: 12, lg: 14}, color: "secondary.light"}}
          href="tel:97455715380"
          target="_blank" 
          rel="noreferrer"
        >
          <Typography variant='h6' sx={phoneProps}>{information.phone}</Typography>
        </ButtonBase>
        <ButtonBase 
          sx={{mt: {xs: 1.5, sm: 1.5, md: 1.5, lg:2}, color: "secondary.light"}} 
          href="mailto: carl.dimabuyu@gmail.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <Typography variant='h6' sx={emailProps}>{information.email}</Typography>
        </ButtonBase>
      </Box>
    </Box>
  )
}

export default ContactDetails