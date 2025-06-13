import { useState } from 'react'
import { Box, Typography, TextField } from '@mui/material'


const mainContainerProps = {
  mb: {lg: 5}
}

const headerTextContainerProps = {
  mb: 3,

}

const headerTextProps = {
  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },

}



const PostInformationForm = () => {
  const [ header, setHeader ] = useState("");

  return (
    <Box sx={mainContainerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Post Information</Typography>
      </Box>
      {/* title */}
          {/* <TextField
            variant="outlined" 
            fullWidth 
            type="Post Title" 
            InputProps={inputStyles} 
            InputLabelProps={inputLabelStyles} 
            inputProps={{maxLength: 80}} 
            id="title"
            label="Enter Post Title"
            value={header}
            onChange={e => setHeader(e.target.value)}
            // onBlur={() => handleSubmit()}
            error={error.state}
            helperText={error.state && error.message}
            disabled={disabled}
          /> */}
      {/* style */}
      {/* softwares used - fetch softwares from existing projects */}
    </Box>
  )
}

export default PostInformationForm