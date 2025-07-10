import React from 'react'
import { Modal, Box, Typography, Paper, Button } from '@mui/material'
import Image from 'mui-image'

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

}

const descTextProps = {

}

const contentContainerProps = {

}

const infoContainerProps = {

}

const actionContainerProps = {

}


const DeletePostModal = ({ open, onClose }) => {
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