import React from 'react'
import { Box, Button } from '@mui/material'
import { DropzoneArea } from "mui-file-dropzone";


const dropZoneProps = {
  background: "rgba(255,255,255,.2)",
  height: "100%",
  width: "100%",
  p: 1,
  m:1,
  borderRadius: 2
}


const UploadImagesForm = () => {
  return (
    <Box>
      <Box sx={dropZoneProps}>
        <DropzoneArea
        acceptedFiles={['image/*']}
        dropzoneText={"Drag and drop image/s here or click to upload"}
        onChange={(files) => console.log('Files:', files)}
        filesLimit={10}
      />
      </Box>
    </Box>
  )
}

export default UploadImagesForm

// https://yuvaleros.github.io/material-ui-dropzone/