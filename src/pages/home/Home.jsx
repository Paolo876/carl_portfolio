import PageContainer from '../../components/layout/PageContainer';
import ProjectsList from './ProjectsList';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import MobileSidebar from '../../components/layout/Sidebar/MobileSidebar/MobileSidebar';


export default function Home() {
  // window.scrollTo(0,0)
  return (
      <PageContainer gridArea="projects">
        <Sidebar/>
        {/* <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} pageTopMargin={pageTopMargin}/> */}
        <ProjectsList gridArea="projects"/>
        <MobileSidebar/>
      </PageContainer>
  )
}
