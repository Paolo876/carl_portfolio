import { useState } from 'react'
import { Modal, Typography, Box, Backdrop, Fade } from '@mui/material'
import Image from 'mui-image'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ProjectModal = ({ setIsModalVisible, isModalVisible }) => {


  return (
    <>
      <Modal
        aria-labelledby="project-image-modal-text"
        aria-describedby="project-image-description"
        open={isModalVisible.isVisible}
        onClose={() => setIsModalVisible({isVisible: false, id: null})}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalVisible.isVisible}>
          <Box sx={style}>
            <Typography id="project-image-modal-text" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="project-image-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ProjectModal