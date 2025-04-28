import PageContainer from '../../components/layout/PageContainer';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import MobileSidebar from '../../components/layout/Sidebar/MobileSidebar/MobileSidebar';
import Content from './Content';

const Contact = () => {
  return (
    <PageContainer gridArea="contact">
      <Sidebar/>
      <MobileSidebar/>
      <Content gridArea="contact"/>
    </PageContainer>
  )
}

export default Contact