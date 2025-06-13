import { useState } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import TextInput from '../../../components/FormInputs/TextInput'

const mainContainerProps = {
  mb: {lg: 5}
}

const headerTextContainerProps = {
  mb: 3,

}

const headerTextProps = {
  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },

}

const formContainerProps = {

}

const formItemProps = {

}

const formHeaderTextProps = {

}



const PostInformationForm = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ header, setHeader ] = useState("");


  return (
    <Box sx={mainContainerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Post Information</Typography>
      </Box>
      <Box sx={formContainerProps}>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Post Title</Typography>
          <TextInput
            id="header" 
            label="Post Title"
            setValue={value => setHeader(value)}
            disabled={isLoading}
          />
        </Box>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Style</Typography>
          <TextInput
            id="header" 
            label="Post Title"
            setValue={value => setHeader(value)}
            disabled={isLoading}
          />
        </Box>
        {/* softwares used - fetch softwares from existing projects */}
      </Box>
    </Box>
  )
}

export default PostInformationForm