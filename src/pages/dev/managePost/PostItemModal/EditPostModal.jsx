import React from 'react'
import { Modal, Box, Typography } from '@mui/material'


const EditPostModal = ({ open, onClose }) => {
  return (
    <Modal 
      open={open} 
      onClose={onClose} 
      aria-labelledby="delete-post-modal">
      <Box>
        EDIT
      </Box>
    </Modal>
  )
}

export default EditPostModal