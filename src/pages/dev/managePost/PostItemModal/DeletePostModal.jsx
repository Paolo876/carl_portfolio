import React from 'react'
import { Modal, Box, Typography, Paper, Button } from '@mui/material'
import Image from 'mui-image'
import useProjectsRedux from '../../../../hooks/useProjectsRedux'

const containerProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
  mb: { xs: 2.5, md: 3}
}

const descTextProps = {
  fontSize: {xs: 14, sm: 15, md: 16, lg: 16 },
  fontWeight: 300,
  mb: { xs: 1.5, md: 2}

}

const contentContainerProps = {

}

const infoContainerProps = {

}

const actionContainerProps = {

}


const DeletePostModal = ({ open, onClose, data }) => {
  const { projects } = useProjectsRedux();

  const project = projects && data && projects.find(item => item.id === data.id)


  return (
    <Modal 
      open={open} 
      onClose={onClose} 
      aria-labelledby="delete-post-modal">
      <Paper sx={containerProps}>
        <Typography variant='h6' sx={headerTextProps}>DELETE POST</Typography>
        <Typography variant='h6' sx={descTextProps}>Are you sure you want to delete this post?</Typography>
        <Box sx={contentContainerProps}>
          {/* images*/}
          <Box sx={infoContainerProps}>
            {/* title - style*/}
            {/* softwares */}
          </Box>
        </Box>
        <Box sx={actionContainerProps}>
          <Button>Delete</Button>
          <Button onClick={onClose}>Cancel</Button>
        </Box>
      </Paper>
    </Modal>
  )
}

export default DeletePostModal