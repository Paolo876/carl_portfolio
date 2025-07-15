import React from 'react'
import { Modal, Box, Typography, Paper, Button } from '@mui/material'
import useProjectsRedux from '../../../../hooks/useProjectsRedux'
import ImagesList from './ImagesList'
import DeleteIcon from '@mui/icons-material/Delete';


const containerProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {lg: 1100},
  maxWidth: {lg: "70vw"},
  maxHeight: "80vh",
  overflow: "auto",
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const headerTextProps = {
  fontSize: {xs: 18, sm: 19, md: 20, lg: 22 },
  textDecoration: "underline",
  fontWeight: 600,
  letterSpacing: .5,
  mb: { xs: 2.5, md: 7, lg: 8}
}

const descTextProps = {
  fontSize: {xs: 14, sm: 15, md: 16, lg: 16 },
  fontWeight: 300,
  mb: { xs: 1.5, md: 2}

}

const contentContainerProps = {
  display: "flex",
  mb: {lg: 5}
}

const infoContainerProps = {
  width: "35%",
  ml: {lg: 2},
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

  const project = projects && data && projects.find(item => item.id === data.id)


  if(project) return (
    <Modal 
      open={open} 
      onClose={onClose} 
      aria-labelledby="delete-post-modal">
      <Paper sx={containerProps}>
        <Typography variant='h6' sx={headerTextProps}>DELETE POST</Typography>
        <Typography variant='h6' sx={descTextProps}>Are you sure you want to delete this post?</Typography>
        <Box sx={contentContainerProps}>
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
          >Delete</Button>
          <Button 
            onClick={onClose}
            variant="outlined"
            size="large"
          >Cancel</Button>
        </Box>
      </Paper>
    </Modal>
  )
}

export default DeletePostModal