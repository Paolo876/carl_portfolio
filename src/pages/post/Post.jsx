import PageContainer from '../../components/layout/PageContainer'
import Sidebar from '../../components/layout/Sidebar/Sidebar'
import Content from './Content'



const Post = () => {

  return (
    <PageContainer gridArea="Post">
      <Content/>
      <Sidebar/>
    </PageContainer>
  )
}

export default Post