import React from 'react'
import { useNavigate } from 'react-router';
import { Box, Alert, AlertTitle, Button } from '@mui/material'
import LoadingSpinner from "../../../components/ui/LoadingSpinner"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HomeIcon from '@mui/icons-material/Home';

const actionButtonsContainer = {
  display: "flex",
  flexDirection: {xs: "column", sm:"row"},
  gap: {xs: 3, sm: 2, md: 2, lg: 3},
  mt: {xs: 5, sm: 4, md: 4, lg: 5}
}
const UploadStatus = ({ setStepNumber, isLoading, success, error }) => {
  const navigate = useNavigate();

  const handleClick = (action) => {
    if(action === "upload") setStepNumber(0)
    if(action === "home") {
      navigate("/")
      window.location.reload();
    }
  }

  if(isLoading) return (
    <Box>
      <LoadingSpinner message="Uploading data. Please wait..." opacity={1} size={80}/>
    </Box>
  )

  if(error) return (
    <Box>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There was an error uploading your file. Err: {error}
      </Alert>
    </Box>
  )
  if(success) return (
    <Box>
      <Alert severity='success'>
        <AlertTitle>Upload Complete!</AlertTitle>
        Your post has been uploaded successfully.
      </Alert>

      <Box sx={actionButtonsContainer}>
        <Button 
          variant="contained" 
          onClick={() => handleClick("upload")}
          startIcon={<LibraryAddIcon/>}
        >
          Upload Another Post
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => handleClick("home")}
          startIcon={<HomeIcon/>}
          color='secondary'
        >
          Back to Home Page
        </Button>
      </Box>
    </Box>
  )
}

export default UploadStatus

