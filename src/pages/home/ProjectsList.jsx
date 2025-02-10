import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ProjectImage from './ProjectImage'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import ProjectModal from './ProjectModal'


const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
  gap: 1
}


const ProjectsList = () => {
  const [ isModalVisible, setIsModalVisible ] = useState({ isVisible: false, id: null })
  const { isLoading, projects, error } = useProjectsRedux();

  useEffect(() => {
    // getProjects()
  }, [])
  return (
    <Box
      sx={{
        gridArea: "projects",
      }}
    >
      <Box sx={projectImagesContainerProps}>
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