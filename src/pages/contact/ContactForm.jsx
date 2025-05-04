import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import TextInput from './FormInputs/TextInput'
import EmailInput from './FormInputs/EmailInput'
import PhoneInput from './FormInputs/PhoneInput'
import MessageInput from './FormInputs/MessageInput'


const containerProps = {
  // '& > :not(style)': { m: 1, width: '25ch' },
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

const textInputContainerProps = {
  mb: 2,
  display: "flex",
  width: {lg: 350}
  // width: "150em"
}


const ContactForm = () => {
  // input values
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ message, setMessage ] = useState("");

  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);



  const handleSubmit = e => {
    e.preventDefault()  
  }


  return (
    <Box
      component="form"
      autoComplete='off'
      sx={containerProps}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" sx={headerTextProps}>Online Inquiry</Typography>
      <Box sx={textInputContainerProps}>
        <TextInput 
          id="name" 
          label="Name"
          setValue={value => setName(value)}
          disabled={isLoading}
        />
      </Box>
      <Box sx={textInputContainerProps}>
        <EmailInput 
          id="email" 
          label="Email"
          setValue={value => setEmail(value)}
          disabled={isLoading}
        />
      </Box>
      <Box sx={textInputContainerProps}>
        <PhoneInput 
          id="phone" 
          label="Phone"
          setValue={value => setEmail(value)}
          disabled={isLoading}
        />
      </Box>
      <Box sx={textInputContainerProps}>
        <MessageInput
          id="message"
          label="Message (optional)"
          setValue={value => setMessage(value)}
          maxLength={300}
          disabled={isLoading}
          width={textInputContainerProps.width}
        />
      </Box>
      <Box>
        <Button type="submit" variant='contained' size='large'>SUBMIT INQUIRY</Button>
      </Box>
    </Box>
  )
}

export default ContactForm