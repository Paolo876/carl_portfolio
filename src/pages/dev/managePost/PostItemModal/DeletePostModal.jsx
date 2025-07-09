import React from 'react'
import { Modal, Box, Typography } from '@mui/material'


const DeletePostModal = ({ open, onClose }) => {
  return (
    <Modal 
      open={open} 
      onClose={onClose} 
      aria-labelledby="delete-post-modal">
      <Box>
        DELETE
      </Box>
    </Modal>
  )
}

export default DeletePostModal