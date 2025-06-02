import React from 'react'
import { Box, Typography, Container } from '@mui/material'

import DevPageContainer from '../../../components/layout/DevPageContainer'

const headerTextProps = {

}


const NewPost = () => {
  return (
    <DevPageContainer>
      <Box>
        <Typography variant="h6">New Post</Typography>
      </Box>
    </DevPageContainer>
  )
}

export default NewPost