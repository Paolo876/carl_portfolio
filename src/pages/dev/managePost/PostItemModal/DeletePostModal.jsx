import { useState } from 'react'
import { Modal, Box, Typography, Paper, Button } from '@mui/material'
import useProjectsRedux from '../../../../hooks/useProjectsRedux'
import ImagesList from './ImagesList'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../../../firebase/config';
import { useFirestore } from '../../../../hooks/useFirestore';
import LoadingSpinner from '../../../../components/ui/LoadingSpinner';

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

const descTextProps = {
  fontSize: {xs: 13, sm: 14, md: 15, lg: 16 },
  fontWeight: 300,
  mb: 2

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


const DeletePostModal = ({ open, onClose, data }) => {
  const { projects } = useProjectsRedux();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const { updateDocument } = useFirestore('user');

  const project = projects && data && projects.find(item => item.id === data.id)

  const handleDelete = async () => {
    // delete images - determine if firebase or imagekit
    // delete from db
    // use return value from updated db to update projectsredux
  }
  if(project) return (
    <Modal 
      open={open} 
      onClose={onClose} 
      
      aria-labelledby="delete-post-modal">
      <Paper sx={containerProps}>
        <Typography variant='h6' sx={headerTextProps}>DELETE POST</Typography>
        <Typography variant='h6' sx={{...descTextProps, visibility: isLoading ? "hidden" : "visible"}}>Are you sure you want to delete this post?</Typography>

        {isLoading && <LoadingSpinner opacity={.8} message="Deleting Data..."/>}
        <Box sx={{...contentContainerProps, visibility: isLoading ? "hidden" : "visible",}}>
          <ImagesList images={project.images}/>
          <Box sx={infoContainerProps}>
            <Typography variant='h6' sx={titleTextProps}>{project.header}</Typography>
            <Typography variant='h6' sx={styleTextProps}>{project.style}</Typography>
          </Box>
        </Box>
        <Box sx={actionContainerProps}>
          <Button
            variant='contained'
            color="secondary"
            size="large"
            startIcon={<DeleteIcon/>}
            disabled={isLoading}
          >Delete</Button>
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

export default DeletePostModal