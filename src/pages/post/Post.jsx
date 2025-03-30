import { useParams } from 'react-router'
import { Box, Alert } from '@mui/material';
import Content from './Content'
import PostSidebar from './PostSidebar/PostSidebar';
import useProjectsRedux from '../../hooks/useProjectsRedux';
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import FallbackPageWarning from '../../components/ui/FallbackPageWarning';

const Post = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { isLoading, projects, error } = useProjectsRedux();
  const project = !isLoading && projects.find(item => item.id === id)

  const projectIdx = projects && projects.findIndex(item => item.id === id)
  const prevProjectId = projects[projectIdx - 1] && projects[projectIdx - 1].id
  const nextProjectId = projects[projectIdx + 1] && projects[projectIdx + 1].id

  if(isLoading) return <Box><LoadingSpinner/></Box>;
  if(project && !isLoading) return (
    <>
      <Box sx={{display: {xs: "none", md:"initial"}}}>
        <Content gridArea="Post" project={project} prevProjectId={prevProjectId} nextProjectId={nextProjectId}/>
        <PostSidebar title={project.header} softwares={project.softwares} style={project.style}/>
      </Box>
      <Box sx={{display: {xs: "initial", md:"none"}}}>
        <Box sx={{mx:3, my: 5}}>
          <FallbackPageWarning message="This page is not available for this device. Please navigate back to the home page."/>

        </Box>
      </Box>
    </>

  );
  if(error || !project) return <Box><Alert severity="error">{error} <FallbackPageWarning/></Alert></Box>;

}

export default Post