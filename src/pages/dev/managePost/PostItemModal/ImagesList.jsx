import { useState } from 'react'
import { Box, Tooltip, Typography } from '@mui/material';
import Image from 'mui-image';
import CancelIcon from '@mui/icons-material/Cancel';
// import { DropzoneArea, useDropzone } from "mui-file-dropzone";
import {useDropzone} from 'react-dropzone';

import styled from 'styled-components';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const containerProps = {
  display: "grid",
  // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
  // gap: 1,
  maxHeight: {xs: 300, sm:400},
  background: "rgba(255,255,255,.1)",
  overflow: "auto",
  px: 1,
  py: {xs: 1, sm:2},
  borderRadius: 2,
}

const imageContainerProps = {
  width: {xs: "auto", sm: 100, md: 120},
  height: "auto",
  position: "relative",
  border: 1,
  borderColor: "rgba(255,255,255,.2)"
}

const deleteButtonProps = {
  position: "absolute",
  top: 0,
  right: 0,
  cursor: "pointer", 
}

const dropzoneTextProps = {
  fontSize: {xs:12, sm: 13, md: 15, lg: 16},
  fontWeight: 600,
  color: "primary.main",
  textAlign: "center"
}


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-width: 2px;
  border-radius: 6px;
  border-style: dashed;
  background-color: #fafafa15;
  color: #c9c9c9ff;
  outline: none;
  cursor: pointer;
  height: 100%;
  overflow: hidden;
`;


function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    // isFocused,
    // isDragAccept,
    // isDragReject
  } = useDropzone({accept: {'image/*': []}});
  
  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} onChange={(e) => props.onChange(e.target.files)}/>
      <Typography variant='h6' sx={dropzoneTextProps}>Add Image/s</Typography>
      <AddPhotoAlternateIcon/>
    </Container>
  );
}


const ImagesList = ({ images, width={sm: "65%"}, isEditable=false, handleDelete, imageData, setImageData, setImages, imagesLength, addedImages }) => {
  
  const handleImgTransform = (src) => {
    let newStr;
      if(src.includes("firebase")) {
        let domain = new URL(src);
        newStr = `https://ik.imagekit.io/q5892cimh/tr:h-150/${domain.pathname}${domain.search}`;
      } else {
        newStr = `${src.substring(0, src.indexOf("q5892cimh/") + 10)}tr:h-150/${src.slice(src.indexOf("q5892cimh/") + 10)}`;
      }
    return newStr
  }

  const handleChange = (files) => {
    setImageData(files)
    
    setImages([])
    for (const item of files) {
      console.log(item.size)
      const reader = new FileReader();
      reader.addEventListener("load", () => setImages(prevState => [...prevState, reader.result]));
      reader.readAsDataURL(item);
    }
    //add an if/else statement for more than 3mb size
  }

  return (
    <Box sx={{...containerProps, width}}>
      {images.map(item => <Box sx={imageContainerProps} key={item.filename}>
        <Image 
          src={handleImgTransform(item.src)} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt={item.filename}
          showLoading
        />
        {isEditable && <Tooltip title="Delete Image" arrow>
          <Box sx={deleteButtonProps} onClick={() => handleDelete({filename: item.filename, src: item.src})}>
            <CancelIcon color='secondary'/>
          </Box>
        </Tooltip>}

      </Box>)}
      {addedImages.map(item => <Box sx={{...imageContainerProps, border: 1, borderColor: "info.main", borderStyle: "dotted"}} key={item}>
        <Image 
          src={item} 
          duration={300} 
          sx={{transition: "300ms width ease"}} 
          fit="scale-down"
          alt={item}
          showLoading
        />
        {isEditable && <Tooltip title="Delete Image" arrow>
          <Box sx={deleteButtonProps} onClick={() => handleDelete({filename: item.filename, src: item.src})}>
            <CancelIcon color='secondary'/>
          </Box>
        </Tooltip>}

      </Box>)}
      {isEditable && imagesLength < 20 && <Box sx={{...imageContainerProps, height: "100%"}}>
        <StyledDropzone
          acceptedFiles={['image/*']}
          dropzoneText={<Typography variant='h6' sx={dropzoneTextProps}>Add Images</Typography>}
          onChange={(files) => handleChange(files)}
          filesLimit={20 - imagesLength}
          initialFiles={imageData}
          showPreviewsInDropzone={false}
          maxFileSize={3200000}
        />
      </Box>}
    </Box>
  )
}

export default ImagesList