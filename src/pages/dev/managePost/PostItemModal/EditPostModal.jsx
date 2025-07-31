import { useState, useEffect } from 'react'
import { Modal, Box, Typography, Paper, Button } from '@mui/material'
import useProjectsRedux from '../../../../hooks/useProjectsRedux'
import CheckIcon from '@mui/icons-material/Check';
import ImagesList from './ImagesList';
import EditInformationForm from './EditInformationForm';
import AddImagesBtn from './AddImagesBtn';

const containerProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {sm: 600, md: 800, lg: 1100},
  minWidth: {xs: "90vw", sm: "initial"},
  maxWidth: {lg: "70vw"},
  maxHeight: "80vh",
  overflow: "auto",
  boxShadow: 24,
  p: 4,
}

const headerTextProps = {
  fontSize: {xs: 18, sm: 19, md: 20, lg: 22 },
  textDecoration: "underline",
  fontWeight: 600,
  letterSpacing: .5,
  mb: { xs: 4, md: 7, lg: 8}
}

const contentContainerProps = {
  display: "flex",
  flexDirection: {xs: "column", sm: "row"},
  mb: {xs: 3, sm: 5}
}

const infoContainerProps = {
  width: {sm: "35%"},
  ml: {sm: 2},
  mt: {xs: 1.5 , sm: 0}
}

const titleTextProps = {
  fontSize: {xs: 17, sm: 18, md: 19, lg: 20}
}

const styleTextProps = {
  fontWeight: 300,
  fontSize: {xs: 12, sm: 13, md: 14, lg: 15}
}

const actionContainerProps = {
  display: "flex",
  justifyContent: "right",
  gap: 2,

}

const EditPostModal = ({ open, onClose, data }) => {
  const { projects } = useProjectsRedux();
  const [ postInformation, setPostInformation ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  //states for new images added
  const [ images, setImages ] = useState([]);
  const [ imageData, setImageData ] = useState([]);

  useEffect(() => {
    if(projects && data) setPostInformation(projects.find(item => item.id === data.id))
    
    return () => {
      setPostInformation(null)
    }
  }, [data, projects])

  const handleAddImages = async () => {
    
  }

  const handleDelete = (data) => {
    setPostInformation(prevState => {
      let updatedImages = prevState.images.filter(item => item.filename !== data.filename)
      return ({...prevState, images: updatedImages})
    })
  }

  const handleSubmit = async () => {
    // if no images, show error
    //if info missing, show error
  }

  // console.log(images)
  if(postInformation) return (
    <Modal 
      open={open} 
      onClose={onClose} 
      aria-labelledby="delete-post-modal">
      <Paper sx={containerProps}>
        <Typography variant='h6' sx={headerTextProps}>EDIT POST</Typography>
        <ImagesList 
          images={postInformation.images} 
          width={"100%"} 
          isEditable 
          handleDelete={handleDelete}
          imagesLength={20 - postInformation.images.length}
          imageData={imageData} 
          setImageData={setImageData} 
          setImages={setImages}
        />
        {/* <AddImagesBtn postInformation={postInformation} handleAddImages={handleAddImages} imageData={imageData} setImageData={setImageData} setImages={setImages}/> */}
        <EditInformationForm postInformation={postInformation} setPostInformation={setPostInformation}/>
        <Box sx={actionContainerProps}>
          <Button
            variant='contained'
            color="primary"
            size="large"
            startIcon={<CheckIcon/>}
            disabled={isLoading || error}
            // onClick={handleDelete}
          >Save Changes</Button>
          <Button 
            onClick={onClose}
            variant="outlined"
            size="large"
            disabled={isLoading}
          >Cancel</Button>
        </Box>
      </Paper>
    </Modal>
  )
}

export default EditPostModal