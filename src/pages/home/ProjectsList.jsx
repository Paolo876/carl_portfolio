import { Box, Fade } from '@mui/material'
import ProjectImage from './ProjectImage'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import MobileHeader from './MobileHeader'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gap: 1,
  height: "100%"
}


const ProjectsList = ({ isSidebarCollapsed, gridArea }) => {
  const { isLoading, projects, error } = useProjectsRedux();

  console.log(gridArea)
  if(!error) return (
    <Box
      sx={{
        gridArea,
        // gridTemplateColumns: "1fr auto",
        // transition: "300ms all ease"
      }}
    >
      {/* mobile header */}
      <MobileHeader/>

      <Fade in={true} timeout={{enter: 800}}>
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
            
            transition: "300ms all ease",
            justifyContent: "center"
          }}
        >
          {isLoading && <LoadingSpinner/>}
          {!isLoading && projects.map(item => <ProjectImage 
            key={item.id} 
            id={item.id} 
            title={item.header} 
            images={item.images} 
            softwares={item.softwares} 
            style={item.style} 
          />)}
        </Box>
      </Fade>

    </Box>
  )
  
}

export default ProjectsList