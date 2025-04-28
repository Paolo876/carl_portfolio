import { Box, TextField, Typography } from '@mui/material'
import React from 'react'


const containerProps = {
  '& > :not(style)': { m: 1, width: '25ch' },
  display: "flex",
  flexDirection: "column"
}

const headerTextProps = {
  fontWeight: 600,
  fontSize: {xs: 17, sm: 18, md: 20, lg: 22},
  color: "primary.light",
  letterSpacing: 1.5,
  pb: 3,
}

const textInputProps = {

}

const textFieldInputProps = {

}

const ContactForm = () => {

  return (
    <Box
      component="form"
      autoComplete='off'
      sx={containerProps}
    >
      <Typography variant="h6" sx={headerTextProps}>Online Inquiry</Typography>
      <TextField id="filled-basic" label="Name" variant="outlined" sx={textInputProps}/>
      <TextField id="filled-basic" label="Email" variant="outlined" sx={textInputProps}/>
      <TextField id="filled-basic" label="Phone" variant="outlined" sx={textInputProps}/>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          sx={textFieldInputProps}
        />
    </Box>
  )
}

export default ContactForm