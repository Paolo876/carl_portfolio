import React from 'react'
import { Box } from '@mui/material'
import useProjectsRedux from '../../../hooks/useProjectsRedux'

const containerProps = {
  borderTop: 1,
  borderColor: "rgba(50,50,50,.85)",
  mt: {md: 3},
  pt: {md: 3},
}
const PostsList = () => {
  const { projects } = useProjectsRedux();
  console.log(projects)
  return (
    <Box sx={containerProps}>
        Posts
    </Box>
  )
}

export default PostsList