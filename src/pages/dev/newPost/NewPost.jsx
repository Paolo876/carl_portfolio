import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

import DevPageContainer from '../../../components/layout/DevPageContainer'
import PostInformationForm from './PostInformationForm'
import PreviewPost from './PreviewPost'
import UploadImagesForm from './UploadImagesForm'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const mainContainerProps = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "70vh"
}

const headerTextContainerProps = {
  mt: {xs: 1, sm: 2, md: 4},
  mb: {xs: 5, sm: 8, md: 10, lg: 12}

}
const headerTextProps = {
  fontSize: {xs: 20, sm: 20, md: 26, lg: 30},
  fontWeight: 600,
  letterSpacing: 1.5,
}

const contentContainerProps = {
  flex: 1,

}

const stepperContainerProps = {
  mt: {lg: 5}, 
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

}

const stepperButtonProps = {

}

// image obj: {src: "", filename: ""}

const NewPost = () => {
  const [ stepNumber, setStepNumber ] = useState(0);

  const [ images, setImages ] = useState([]);
  const [ imageData, setImageData ] = useState([]);
  const [ postInformation, setPostInformation ] = useState({header: "", style: "", softwares: []})

  // upload to be handled here too
  const handleStepperClick = async (action) => {
    if(action === "prev" && stepNumber > 0) {
      // if stepNumber === 0 &&
      // if stepNumber === 1 &&
      // if stepNumber === 2 &&
      setStepNumber(prevState => prevState - 1)
    }

    if(action === "next" && stepNumber < 2) {
      // if stepNumber === 0 && imageData == 0
      // if stepNumber === 1 &&
      // if stepNumber === 2 &&
      setStepNumber(prevState => prevState + 1)
    }
  }

  return (
    <DevPageContainer>
      <Box sx={mainContainerProps}>
        <Box sx={headerTextContainerProps}>
          <Typography variant="h6" sx={headerTextProps}>New Post</Typography>
        </Box>
        <Box sx={contentContainerProps}>
          {stepNumber === 0 && <UploadImagesForm images={images} setImages={setImages} imageData={imageData} setImageData={setImageData} />}
          {stepNumber === 1 && <PostInformationForm postInformation={postInformation} setPostInformation={setPostInformation} />}
          {stepNumber === 2 && <PreviewPost/>}
        </Box>
        <Box sx={stepperContainerProps}>
          <Button 
            sx={stepperButtonProps} 
            variant="contained" 
            size="large" 
            startIcon={<ChevronLeftIcon/>} 
            disabled={stepNumber === 0}
            onClick={() => handleStepperClick("prev")}
          >
            Back
          </Button>
          {stepNumber < 2 ? <Button 
            sx={stepperButtonProps} 
            variant="contained" 
            size="large" 
            endIcon={<ChevronRightIcon/>}
            disabled={
              (stepNumber === 0 && imageData.length === 0) ||
              (stepNumber >= 2 && postInformation.title === "")
              }
            onClick={() => handleStepperClick("next")}

          >
            Next
          </Button> :
          <Button
            variant="contained" 
            size="large" 
            endIcon={<ChevronRightIcon/>}
            disabled={stepNumber < 2}
            onClick={() => handleStepperClick("upload")}
            color='info'
          >
            UPLOAD
          </Button>
          }
        </Box>
      </Box>
    </DevPageContainer>
  )
}

export default NewPost