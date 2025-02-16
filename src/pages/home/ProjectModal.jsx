import { useEffect, useState } from 'react';
import { Modal, Typography, Box, Backdrop, Fade, List, ListItem, IconButton, MobileStepper, Portal } from '@mui/material'
import Image from 'mui-image'
import useProjectsRedux from '../../hooks/useProjectsRedux';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
  maxHeight: {md: "85vh", lg:"92vh"},
  maxWidth: { sm: "400px", md: "700px", lg: "1000px", xl:"1500px" },
  outline: "none"
};

const containerProps = {
  display: "grid",
  gridTemplateAreas: {md: "'image''desc'", lg:"'image desc'"},
  // gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
  gridTemplateColumns: {lg: `minmax(auto, 1fr) 300px`, xl:`minmax(auto, 1fr) 380px`},
  alignItems: "center"
}


const imageProps = {
  height: "100%",
  width: "100%",
  minHeight: "auto",
  minWidth: "auto",
  maxHeight: "90vh",
  maxWidth: "85vw",
  position: "relative",
  userSelect: "none"
}


const headerTextProps = {
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: {md: 17, lg: 18, xl:20},
  borderBottom: 1,
  borderColor: "primary.main",
  pb: {md: .2, lg: 0 }
}

const subHeaderTextProps = {
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: {md: 12, xl:13},
  opacity: .85,
  textAlign: {lg:"right"},
  pr: 1,
}

const listProps = {
  m:0,
  p:0,
  mt: {sm: 3, md: 4, lg:10},
}

const listItemProps = {
  m:0,
  p:0,
  mt: {md: .5, lg:.85},
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: {md: 11, lg: 11, xl: 12},
  opacity: .8,
}

const buttonContainerProps = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 100,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p:1

}

const buttonProps = {
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,.2)",
  p:.75,
  fontSize: {xs: 20, sm: 24, md: 26, lg:28},
  boxShadow: 2
}

const navButtonProps = {
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,.45)",
  p:.9,
  fontSize: {xs: 30, sm: 32, md: 34, lg:40},
  boxShadow: 5
}

const ProjectModal = ({ setIsModalVisible, isModalVisible }) => {
  const id = isModalVisible.id;
  const { projects } = useProjectsRedux();
  const [ selectedImage, setSelectedImage ] = useState(null)
  const [ selectedImageIdx, setSelectedImageIdx ] = useState(0);

  useEffect(() => {
    setSelectedImage(({...projects.find(item => item.id === id), index: projects.findIndex(item => item.id === id)}))
  },[])


  const handleImageBackClick = () => {
    if(selectedImageIdx !== 0) setSelectedImageIdx(selectedImageIdx - 1)
  }

  const handleImageNextClick = () => {
    if(selectedImageIdx < selectedImage.images.length - 1) setSelectedImageIdx(selectedImageIdx + 1)
  }

    
  const handleProjectBackClick = () => {
    if(selectedImage.index !== 0) setSelectedImage(({...projects[selectedImage.index - 1], index: selectedImage.index - 1}))
  }

  const handleProjectNextClick = () => {
    if(selectedImage.index < projects.length - 1) setSelectedImage(({...projects[selectedImage.index + 1], index: selectedImage.index + 1}))
  }


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
          borderRadius:0,
          outline: "none",
        }}
      >
        <Fade in={isModalVisible.isVisible}>
          <Box sx={style}>
            {selectedImage !== null && <Box sx={containerProps}>
              <Box sx={{gridArea: "image", position: "relative" }}>
                {<Image src={selectedImage.images[selectedImageIdx].src} alt={selectedImage.images[selectedImageIdx].filename} duration={100} sx={imageProps} fit="cover" draggable={false}/>}
                {/* buttons */}
                {selectedImage.images.length > 1 && <Box sx={buttonContainerProps}>
                  <IconButton onClick={handleImageBackClick} sx={{visibility: selectedImageIdx === 0 ? "hidden" : "visible"}}>
                    <ArrowBackIosNewIcon sx={buttonProps}/>
                  </IconButton>
                  <IconButton onClick={handleImageNextClick} sx={{visibility: selectedImageIdx >= selectedImage.images.length - 1 ? "hidden" : "visible"}}>
                    <ArrowForwardIosIcon sx={buttonProps}/>
                  </IconButton>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 100
                    }}
                  >
                  <MobileStepper
                    variant="dots"
                    steps={selectedImage.images.length}
                    activeStep={selectedImageIdx}
                    position='absolute'
                    disabled={false}
                    sx={{
                      background: "none",
                      borderRadius: 5,
                      px: 1.5,
                      py: .8,
                      mb: .5,
                      "& div div": {
                        height: 6,
                        width: 6,
                        boxShadow: 2
                      }
                    }}
                  />
                  </Box>
                </Box>}
              </Box>
              <Box sx={{gridArea: "desc", bgcolor: 'background.paper', py: {xs: 1, sm: 1.5, md: 2, lg:5}, pl: 1.5, pr: 3,}}>
                <Typography id="project-image-modal-text" variant="h6" sx={headerTextProps}>{selectedImage.header}</Typography>
                <Typography id="project-image-modal-text" variant="h6" sx={subHeaderTextProps}>{selectedImage.style}</Typography>
                <List sx={listProps}>
                  {selectedImage.softwares.map(item => <ListItem sx={listItemProps} key={item}>{item}</ListItem>)}
                </List>
              </Box>
            </Box>}

            {/* project navigation buttons */}
            {selectedImage &&<Portal container={() => document.getElementsByClassName('MuiModal-backdrop')[0]} >
              <Box 
                sx={{
                  position: "fixed", 
                  top:"50%", 
                  left:0, 
                  width: "100%", 
                  display: "flex",
                  justifyContent: "space-between",
                  px: 5,
                }}
              >
                <IconButton onClick={handleProjectBackClick} sx={{visibility: selectedImage.index === 0 ? "hidden" : "visible"}}>
                  <ArrowBackIosNewIcon sx={navButtonProps}/>
                </IconButton>
                <IconButton onClick={handleProjectNextClick} sx={{visibility: selectedImage.index < projects.length - 1 ? "visible" : "hidden"}}>
                  <ArrowForwardIosIcon sx={navButtonProps}/>
                </IconButton>
              </Box>
            </Portal>}
          </Box>
        </Fade>
      </Modal>


    </>
  )
}

export default ProjectModal