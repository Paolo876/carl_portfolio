import { useParams } from 'react-router'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import ProjectImagesList from './ProjectImagesList'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { Box } from '@mui/material'
import FallbackPageWarning from '../../components/ui/FallbackPageWarning'



const Content = ({ pageTopMargin, isSidebarCollapsed, setIsSidebarCollapsed,  }) => {
  const { id } = useParams();
  const { isLoading, error, projects } = useProjectsRedux();
  const project = !isLoading && projects.find(item => item.id === id)

  console.log(id)
  return (
    <Box
      sx={{
        mt: pageTopMargin
      }}
    >
      {isLoading && <LoadingSpinner/>}
      {!isLoading && project && <ProjectImagesList/>}
      {!project && <FallbackPageWarning/>}
    </Box>
  )
}

export default Content