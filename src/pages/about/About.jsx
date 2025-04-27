import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import Content from './content/Content';
import MobileSidebar from '../../components/layout/Sidebar/MobileSidebar/MobileSidebar';

const About = () => {
  window.scrollTo(0, 0);

  return (
    <PageContainer  gridArea="about">
      <Sidebar/>
      <MobileSidebar/>
      <Content  gridArea="about"/>
    </PageContainer>
  )
}

export default About