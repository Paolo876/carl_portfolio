import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProjectImage from './ProjectImage'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import ProjectModal from './ProjectModal'


const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gap: 1
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
      }}
    >
      <Box 
        sx={{
          ...projectImagesContainerProps, 
          gridTemplateColumns: {
            lg: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "300px": "250px"}, 1fr))`,
            xl: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "350px": "280px"}, 1fr))`
          },
        }}
      >
        {projects.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
        {projects.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
        {projects.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
      </Box>
      {isModalVisible.isVisible && <ProjectModal 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible}
      />}
    </Box>
  )
}

export default ProjectsList