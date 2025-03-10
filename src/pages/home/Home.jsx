import PageContainer from '../../components/layout/PageContainer';
import ProjectsList from './ProjectsList';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import MobileSidebar from '../../components/layout/Sidebar/MobileSidebar/MobileSidebar';


export default function Home() {

  return (
      <PageContainer gridArea="projects">
        <Sidebar/>
        {/* <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} pageTopMargin={pageTopMargin}/> */}
        <ProjectsList gridArea="projects"/>
        <MobileSidebar/>
      </PageContainer>
  )
}
