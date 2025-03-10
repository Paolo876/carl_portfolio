import { useParams } from 'react-router'
import { Box } from '@mui/material';
import PageContainer from '../../components/layout/PageContainer'
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import Content from './Content'
import PostSidebar from './PostSidebar/PostSidebar';
import useProjectsRedux from '../../hooks/useProjectsRedux';


const Post = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { isLoading, projects } = useProjectsRedux();
  const project = !isLoading && projects.find(item => item.id === id)

  if(project) return (
    <Box>
      <Content gridArea="Post" project={project}/>
      <PostSidebar title={project.header} softwares={project.softwares} style={project.style}/>
    </Box>
  )
}

export default Post