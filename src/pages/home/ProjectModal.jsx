import { useEffect, useState } from 'react';
import { Modal, Typography, Box, Backdrop, Fade, List, ListItem, Button, IconButton, MobileStepper } from '@mui/material'
import Image from 'mui-image'
import useProjectsRedux from '../../hooks/useProjectsRedux';
import Carousel from 'react-material-ui-carousel'
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
  minHeight: "auto",
  minWidth: "auto",
  maxHeight: "90vh",
  maxWidth: "90vw",
  position: "relative",
  userSelect: "none"
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
  textAlign: "right",
  pr: 1,
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

const buttonContainerProps = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 100,
  height: "100%",
  width: "100%",
  display: "flex",
  // background: "red",
  justifyContent: "space-between",
  alignItems: "center",
  p:1

}

const buttonProps = {
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,.2)",
  p:.75,
  fontSize: {xs: 20, sm: 24, md: 26, lg:28}
}

const ProjectModal = ({ setIsModalVisible, isModalVisible }) => {
  const id = isModalVisible.id;
  const { projects } = useProjectsRedux();
  const [ selectedImage, setSelectedImage ] = useState(null)

  useEffect(() => {
    setSelectedImage(projects.find(item => item.id === id))
  },[])


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
            {selectedImage !== null && <Box sx={containerProps}>
              <Box sx={{gridArea: "image", position: "relative" }}>
                
                {<Image src={selectedImage.images[0].src} alt={selectedImage.images[0].filename} duration={100} sx={imageProps} fit="cover" draggable={false}/>}

                {/* buttons */}
                {selectedImage.images.length > 1 && <Box sx={buttonContainerProps}>
                  <IconButton onClick={() => {}}><ArrowBackIosNewIcon sx={buttonProps}/></IconButton>
                  <IconButton onClick={() => {}}><ArrowForwardIosIcon sx={buttonProps}/></IconButton>
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
                    steps={selectedImage.images.length + 1}
                    position='absolute'
                    sx={{
                      cursor: "pointer",
                      background: "none"
                    }}
                  />
                  </Box>



                </Box>}
                {/* {selectedImage.images.length > 1 && <Carousel
                  indicators={true}
                  interval={8000}
                  duration={800} 
                  navButtonsAlwaysInvisible={true}
                  sx={{ overflowY: 'visible', overflowX: 'clip', minHeight: "auto", width: "auto" }} 
                >
                  {selectedImage.images.map(item => <Image src={item.src} alt={item.filename} duration={100} sx={imageProps} fit="cover" draggable={false}/>
                  )}
                </Carousel>} */}
              </Box>
              <Box sx={{gridArea: "desc", bgcolor: 'background.paper', py: 5, pl: 1.5, pr: 3,}}>
                <Typography id="project-image-modal-text" variant="h6" sx={headerTextProps}>{selectedImage.header}</Typography>
                <Typography id="project-image-modal-text" variant="h6" sx={subHeaderTextProps}>{selectedImage.style}</Typography>
                <List sx={listProps}>
                  {selectedImage.softwares.map(item => <ListItem sx={listItemProps} key={item}>{item}</ListItem>)}
                </List>
              </Box>
            </Box>}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ProjectModal