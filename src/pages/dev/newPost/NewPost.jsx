import { useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

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
  position: "fixed",
  bottom: 0,
  left:0,
  width: "100%",
  py: { lg: 5},
  background: "rgba(255,255,255,.15)",
  boxShadow: 5,
}

const stepperContainerContentProps = {
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

  const [ isLoading, setIsLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  const [ error, setError ] = useState(null);

  // upload to be handled here too
  const handleStepperClick = async (action) => {
    if(action === "prev" && stepNumber > 0) setStepNumber(prevState => prevState - 1)
    if(action === "next" && stepNumber < 2) setStepNumber(prevState => prevState + 1)

    if(action === "upload" && imageData.length !== 0 && 
      postInformation.header.trim().length !== 0 && 
      postInformation.style.trim().length !== 0 && 
      postInformation.softwares.length !== 0) 
    {
      setIsLoading(true)
      setError(null)

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
          {stepNumber === 2 && <PreviewPost images={images} postInformation={postInformation}/>}
        </Box>
        <Box sx={stepperContainerProps}>
          <Container maxWidth="xl">
            <Box sx={stepperContainerContentProps}>
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
                  (stepNumber === 1 && postInformation.header === "") ||
                  (stepNumber === 1 && postInformation.style === "") ||
                  (stepNumber === 1 && postInformation.softwares.length === 0)
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
          </Container>
        </Box>
      </Box>
    </DevPageContainer>
  )
}

export default NewPost