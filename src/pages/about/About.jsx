import React from 'react'
import { Box } from '@mui/material'
import PageContainer from '../../components/layout/PageContainer'
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import Content from './content/Content';



const About = () => {
  return (
    <PageContainer  gridArea="about">
      <Sidebar/>
      <Content  gridArea="about"/>
    </PageContainer>
  )
}

export default About