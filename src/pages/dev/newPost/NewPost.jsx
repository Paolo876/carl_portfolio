import { useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

import DevPageContainer from '../../../components/layout/DevPageContainer'
import PostInformationForm from './PostInformationForm'
import PreviewPost from './PreviewPost'
import UploadImagesForm from './UploadImagesForm'

import useUpload from '../../../hooks/useUpload'
import { useFirestore } from '../../../hooks/useFirestore'

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


const postInformationInitialState = { header: "", style: "", softwares: [] }

const NewPost = () => {
  const { uploadMany } = useUpload('user');
  const { updateArrayDocument } = useFirestore('user');
  
  const [ stepNumber, setStepNumber ] = useState(0);

  const [ images, setImages ] = useState([]);
  const [ imageData, setImageData ] = useState([]);
  const [ postInformation, setPostInformation ] = useState(postInformationInitialState)

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
      try {
        //image obj props {header: "", id: "", softwares: [], style, "", images: [0: {filename: "", src: ""}]}

        // upload image to imageKit
        // get src of each
        // create variable of the whole object and properties {header: "", id: "", softwares: [], style, "", images: [0: {filename: "", src: ""}]}

        // update db

        //reset states
        
        //redirect to home page or post page if not mobile
        
        console.log(imageData)
        // const uploaded = await uploadMany('project-images', imageData);
        // const id = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "").slice(8);
        // const updateDb = {...postInformation, images: uploaded, id};
        // await updateArrayDocument('projects', 'images', updateDb);
        // setSuccess(true)
        // setPostInformation(postInformationInitialState);
        // setImageData([]);
        // setImages([]);
      } catch(err) {
        setError(err.message)
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
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
                disabled={
                  stepNumber < 2 || 
                  imageData.length === 0 || 
                  postInformation.header === "" || 
                  postInformation.style === "" || 
                  postInformation.softwares.length === 0 || 
                  isLoading
                }
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