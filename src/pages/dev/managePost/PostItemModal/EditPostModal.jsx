import { useState, useEffect } from 'react'
import { Modal, Box, Typography, Paper, Button, Alert } from '@mui/material'
import useProjectsRedux from '../../../../hooks/useProjectsRedux'
import CheckIcon from '@mui/icons-material/Check';
import ImagesList from './ImagesList';
import EditInformationForm from './EditInformationForm';
import { useFirestore } from '../../../../hooks/useFirestore';
import useUpload from '../../../../hooks/useUpload';


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

const errorInitialState = {state: null,  message: ""}

const EditPostModal = ({ open, onClose, data }) => {
  const { updateDocument } = useFirestore("user");
  const { uploadMany } = useUpload('user');
  const { projects, updateProjects } = useProjectsRedux();
  const [ postInformation, setPostInformation ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(errorInitialState);

  //states for new images added
  const [ images, setImages ] = useState([]);
  const [ imageData, setImageData ] = useState([]);

  useEffect(() => {
    if(projects && data) setPostInformation(projects.find(item => item.id === data.id))
    
    return () => {
      setPostInformation(null)
      setImages([])
      setImageData([])
    }
  }, [data, projects])


  const handleDelete = (data) => {
    setPostInformation(prevState => {
      let updatedImages = prevState.images.filter(item => item.filename !== data.filename)
      return ({...prevState, images: updatedImages})
    })
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(errorInitialState)

    try {

      //upload if images are added
      if(imageData.length !== 0){
        const uploaded = await uploadMany('project-images', imageData); //returns images array
        const updatedProjects = projects.map(item => {
          if(item.id === postInformation.id){
            const updatedItem = {...item}
            updatedItem.images = [...item.images, ...uploaded]
            return updatedItem
          } else {
            return item
          }
        })
        //update firestore doc
        await updateDocument({id: "projects", images: updatedProjects}, 'projects');
        //update redux
        updateProjects(updatedProjects)
      }
      //update document if changes were made ~ if prev obj === new obj && imageData.length !== 0

    } catch(err){
      console.log(err)
      setError(err.message);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  
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
          imagesLength={postInformation.images.length == 0 ? 0 : 20 - postInformation.images.length}
          imageData={imageData} 
          setImageData={setImageData} 
          setImages={setImages}
          addedImages={images}
        />
        <EditInformationForm postInformation={postInformation} setPostInformation={setPostInformation}/>
        {error.state && <Box sx={{mb: 2}}>
          <Alert severity='error'>{error.message}</Alert>
        </Box>}
        <Box sx={actionContainerProps}>

          <Button
            variant='contained'
            color="primary"
            size="large"
            startIcon={<CheckIcon/>}
            disabled={
              isLoading || 
              error.state || 
              postInformation.header.trim().length === 0 || 
              postInformation.style.trim().length === 0 ||
              postInformation.softwares.length === 0 ||
              postInformation.images.length + images.length === 0
            }
            onClick={handleSubmit}
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