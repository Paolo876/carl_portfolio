import React from 'react'
import { Box, Fade } from '@mui/material'
import Header from './Header'
import Skills from './Skills'
import Experiences from './Experiences'

const Content = ({ gridArea }) => {
  return (
    <Box sx={{gridArea, mt: 5}}>
      <Header/>
      <Skills/>
      <Experiences/>
    </Box>
  )
}

export default Content