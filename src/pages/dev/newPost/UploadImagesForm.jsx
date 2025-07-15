import React from 'react'
import { Box, Typography } from '@mui/material'
import { DropzoneArea } from "mui-file-dropzone";


const mainContainerProps = {
  mb: {lg: 5}
}

const headerTextContainerProps = {
  mb: 3,
}

const headerTextProps = {
  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
}

const dropZoneProps = {
  background: "rgba(255,255,255,.2)",
  height: "100%",
  width: "100%",
  p: 1,
  borderRadius: 2
}

const previewTextProps = {
  fontSize: { xs: 13, sm: 14, md: 16, lg: 18 },
  mt: 2,
  mb: 1,
  letterSpacing: .8,
  fontWeight: 500,
}

const UploadImagesForm = ({ setImages, imageData, setImageData }) => {

  const handleChange = (files) => {
    setImageData(files)
    
    setImages([])
    //image preview
    files.forEach(item => {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImages(prevState => [...prevState, reader.result]));
      reader.readAsDataURL(item);
    })
  }

  return (
    <Box sx={mainContainerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Upload Images. Maximum of 20 images per post. Each image not exceeding 3mb.</Typography>
      </Box>
      <Box sx={dropZoneProps}>
        <DropzoneArea
        acceptedFiles={['image/*']}
        dropzoneText={"Drag and drop image/s here or click to upload"}
        onChange={(files) => handleChange(files)}
        filesLimit={20}
        initialFiles={imageData}
        showPreviewsInDropzone={false}
        showPreviews={true}
        previewText={<Typography variant="h6" sx={previewTextProps}>Preview: </Typography>}
      />
      </Box>
    </Box>
  )
}

export default UploadImagesForm

// https://yuvaleros.github.io/material-ui-dropzone/