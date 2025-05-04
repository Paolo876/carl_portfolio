import React from 'react'
import { Box, Typography, Alert } from '@mui/material'
import useAboutRedux from "../../hooks/useAboutRedux"
import LoadingSpinner from '../../components/ui/LoadingSpinner'

const containerProps = {
  display: "flex",
  flexDirection: "column",

}


const headerTextProps = {
  fontWeight: 600,
  fontSize: {xs: 17, sm: 18, md: 20, lg: 22},
  color: "primary.light",
  letterSpacing: 1.5,
  pb: 3,
}


const ContactDetails = () => {
  const { about, isLoading, error } = useAboutRedux();


  return (
    <Box sx={containerProps}>
      <Typography variant="h6" sx={headerTextProps}>Contact Details</Typography>
    </Box>
  )
}

export default ContactDetails