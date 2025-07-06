import React from 'react'
import { Box, Button } from '@mui/material'
import ReorderIcon from '@mui/icons-material/Reorder';


const ReorderPosts = () => {
  return (
    <Box>
      <Button startIcon={<ReorderIcon/>} variant='contained' size="large">Reorder Posts</Button>
    </Box>
  )
}

export default ReorderPosts