import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import TextInput from './FormInputs/TextInput'


const containerProps = {
  // '& > :not(style)': { m: 1, width: '25ch' },
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

const textInputContainerProps = {
  mb: 2,
  display: "flex",
  width: 300
  // width: "150em"
}

const textInputProps = {
  letterSpacing: 1.4,
  
}

const textFieldInputProps = {

}

const ContactForm = () => {
  // input values
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ message, setMessage ] = useState("");

  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);


  return (
    <Box
      component="form"
      autoComplete='off'
      sx={containerProps}
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
        <TextInput 
          id="email" 
          label="Email"
          setValue={value => setEmail(value)}
          disabled={isLoading}
        />
      </Box>

      {/* <Box sx={textInputContainerProps}>
        <TextField id="filled-basic" label="Name" variant="outlined" sx={textInputProps}       InputProps={inputStyles} 
      InputLabelProps={inputLabelStyles} inputProps={{maxLength: 40}} />
      </Box>
      <Box sx={textInputContainerProps}>
        <TextField id="filled-basic" label="Email" variant="outlined" sx={textInputProps}/>
      </Box>
      <Box sx={textInputContainerProps}>
        <TextField id="filled-basic" label="Phone" variant="outlined" sx={textInputProps}/>
      </Box> */}
      <Box sx={textInputContainerProps}>
        <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            sx={textFieldInputProps}
          />
      </Box>
      <Box>
        <Button type="submit" variant='contained'>SUBMIT INQUIRY</Button>
      </Box>
    </Box>
  )
}

export default ContactForm