import React from 'react'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { DropzoneArea } from "mui-file-dropzone";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const addImagesBtnContainer = {
  display: "flex",
  mt: {lg: 5},
  mb: {lg: 8},
  height: {lg: 250},
  width: 200
}

const addImagesBtn = {
  width: "100%",
  fontWeight: 600,
}


const AddImagesBtn = ({ postInformation, handleAddImages, imageData, setImageData, setImages }) => {

  const handleChange = (files) => {
    setImageData(files)
    
    console.log(files)
    setImages([])
    //image preview
    // files.forEach(item => {
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => setImages(prevState => [...prevState, reader.result]));
    //   reader.readAsDataURL(item);
    // })
  }

  return (
    <Box sx={addImagesBtnContainer}>
      {/* <Button 
        component="label"

        disabled={postInformation.images.length >= 20} 
        variant="contained" 
        startIcon={<AddPhotoAlternateIcon/>} 
        size="large"
        sx={addImagesBtn}
        color='info'
        tabIndex={-1}
      >
        Add Images
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={(event) => handleChange(event.target.files)}
          multiple
        />
      </Button> */}
      {postInformation.images.length < 20 && <DropzoneArea
        acceptedFiles={['image/*']}
        dropzoneText={"Drag and drop or click to add image/s"}
        onChange={(files) => handleChange(files)}
        filesLimit={20 - postInformation.images.length}
        initialFiles={imageData}
        showPreviewsInDropzone={false}
        maxFileSize={3200000}
      />}
    </Box>  
  )
}

export default AddImagesBtn