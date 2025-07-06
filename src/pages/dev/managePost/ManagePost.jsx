import { useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import DevPageContainer from '../../../components/layout/DevPageContainer'
import ReorderPosts from './ReorderPosts'
import PostsList from './PostsList'


const mainContainerProps = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "70vh"
}

const headerTextContainerProps = {
  mt: {xs: 1, sm: 2, md: 2},
  mb: {xs: 5, sm: 8, md: 8, lg: 8}

}
const headerTextProps = {
  fontSize: {xs: 20, sm: 20, md: 26, lg: 30},
  fontWeight: 600,
  letterSpacing: 1.5,
  textDecoration: "underline"
}


const ManagePost = () => {



  return (
    <DevPageContainer>
      <Box sx={mainContainerProps}>
        <Box sx={headerTextContainerProps}>
          <Typography variant="h6" sx={headerTextProps}>Edit Posts</Typography>
        </Box>

        <ReorderPosts/>
        <PostsList/>
      </Box>
    </DevPageContainer>
  )
}

export default ManagePost