import { useEffect, useState } from 'react'
import { Box, Fade } from '@mui/material'
import ProjectImage from './ProjectImage'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import ProjectModal from './ProjectModal'
import MobileHeader from './MobileHeader'

const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gap: 1,
}


const ProjectsList = ({ isSidebarCollapsed }) => {
  const [ isModalVisible, setIsModalVisible ] = useState({ isVisible: false, id: null })
  const { isLoading, projects, error, getProjects } = useProjectsRedux();

  useEffect(() => {
    getProjects()
  }, [])




  return (
    <Box
      sx={{
        gridArea: "projects",
        transition: "300ms width ease"
      }}
    >
      {/* mobile header */}
      <MobileHeader/>
      <Fade in={true} timeout={{enter: 800}} style={{transitionDelay: "300ms"}}>
        <Box 
          sx={{
            ...projectImagesContainerProps, 
            gridTemplateColumns: {
              xs: "100vw",
              sm: `65vw`,
              md: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "270px": "220px"}, 1fr))`,
              lg: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "300px": "250px"}, 1fr))`,
              xl: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "350px": "280px"}, 1fr))`
            },
            transition: "300ms width ease",
            justifyContent: "center"
          }}
        >
          {projects.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
          {/* {projects.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)} */}
          {/* {projects.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)} */}
        </Box>
      </Fade>
      {isModalVisible.isVisible && <ProjectModal 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible}
      />}
    </Box>
  )
}

export default ProjectsList