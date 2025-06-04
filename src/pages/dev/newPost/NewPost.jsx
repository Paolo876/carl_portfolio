import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

import DevPageContainer from '../../../components/layout/DevPageContainer'
import PostInformationForm from './PostInformationForm'
import PreviewPost from './PreviewPost'
import UploadImagesForm from './UploadImagesForm'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const mainContainerProps = {

}


const headerTextProps = {
  fontSize: {xs: 20, sm: 20, md: 26, lg: 30},
  fontWeight: 600,
  letterSpacing: 1.5,
  mb: {xs: 3, sm: 4, md: 6, lg: 8}
}

const contentContainerProps = {

}

const stepperContainerProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

}

const stepperButtonProps = {

}


const NewPost = () => {
  const [ stepNumber, setStepNumber ] = useState(0);

  // upload to be handled here too
  const handleStepperClick = async (action) => {
    
  }


  return (
    <DevPageContainer>
      <Box sx={mainContainerProps}>
        <Box>
          <Typography variant="h6" sx={headerTextProps}>New Post</Typography>
        </Box>
        <Box sx={contentContainerProps}>
          {stepNumber === 0 && <UploadImagesForm/>}
          {stepNumber === 1 && <PostInformationForm/>}
          {stepNumber === 2 && <PreviewPost/>}
        </Box>
        <Box sx={stepperContainerProps}>
          <Button 
            sx={stepperButtonProps} 
            variant="contained" 
            size="large" 
            startIcon={<ChevronLeftIcon/>} 
            disabled={stepNumber===0}
            onClick={() => handleStepperClick("prev")}
          >
            Back
          </Button>
          <Button 
            sx={stepperButtonProps} 
            variant="contained" 
            size="large" 
            endIcon={<ChevronRightIcon/>}
            disabled={stepNumber===0}
            onClick={() => handleStepperClick("next")}

          >
            Next
          </Button>
        </Box>
      </Box>
    </DevPageContainer>
  )
}

export default NewPost