import React from 'react'
import { Box, Typography } from '@mui/material'

import DevPageContainer from '../../../components/layout/DevPageContainer'
import PostInformationForm from './PostInformationForm'
import PreviewPost from './PreviewPost'
import UploadImagesForm from './UploadImagesForm'

const headerTextProps = {

}


const NewPost = () => {
  return (
    <DevPageContainer>
      <Box>
        <Typography variant="h6">New Post</Typography>
      </Box>
      <UploadImagesForm/>
      <PostInformationForm/>
      <PreviewPost/>
      <Box>
        {/* submit button */}
      </Box>
    </DevPageContainer>
  )
}

export default NewPost