import { useState } from 'react'
import { Modal, Typography, Box, Backdrop, Fade, List, ListItem } from '@mui/material'
import Image from 'mui-image'
import useProjectsRedux from '../../hooks/useProjectsRedux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  // maxHeight: "92vh",
  borderRadius: 0,
  border: 0,
  height: "max-content",
  // width: "100%",
  width: "max-content",
  maxHeight: "92vh",
  maxWidth: "1500px",
};

const containerProps = {
  display: "grid",
  gridTemplateAreas: "'image desc'",
  // gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
  gridTemplateColumns: `minmax(auto, 1fr) 380px`,
  alignItems: "center"
}


const imageProps = {
  height: "100%",
  width: "100%",
  maxHeight: "90vh",
  maxWidth: "90vw"
}


const headerTextProps = {
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: 20,
  borderBottom: 1,
  borderColor: "primary.main",
  // textTransform: "uppercase",
}

const subHeaderTextProps = {
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: 13,
  opacity: .85,
  // textTransform: "uppercase",

}

const listProps = {
  m:0,
  p:0,
  mt: 5
}

const listItemProps = {
  m:0,
  p:0,
  mt: .5,
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: 12,
  opacity: .8
}


const ProjectModal = ({ setIsModalVisible, isModalVisible }) => {
  const id = isModalVisible.id;
  const { projects } = useProjectsRedux();
  const selectedImage = projects.find(item => item.id === id)
  console.log(selectedImage.softwares)
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
        sx={{
          border:0,
          borderRadius:0
        }}
      >
        <Fade in={isModalVisible.isVisible}>
          <Box sx={style}>
            <Box sx={containerProps}>
              <Box sx={{gridArea: "image", }}>
                <Image src={selectedImage.images[0].src} alt={selectedImage.images[0].filename} duration={100} sx={imageProps} fit="cover" />
                {/* {selectedImage.images.length === 1 && <Image src={selectedImage.images[0].src} alt={selectedImage.images[0].filename} duration={100} sx={imageProps} fit="cover" />} */}
              </Box>
              <Box sx={{gridArea: "desc", bgcolor: 'background.paper', py: 5, pl: 1.5, pr: 3,}}>
                <Typography id="project-image-modal-text" variant="h6" sx={headerTextProps}>{selectedImage.header}</Typography>
                <Typography id="project-image-modal-text" variant="h6" sx={subHeaderTextProps}>{selectedImage.style}</Typography>
                <List sx={listProps}>
                  {selectedImage.softwares.map(item => <ListItem sx={listItemProps}>{item}</ListItem>)}
                </List>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ProjectModal