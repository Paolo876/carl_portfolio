import React from 'react'
import { Box, Typography } from '@mui/material'


const mainContainerProps = {
  mb: {lg: 5}
}

const headerTextContainerProps = {
  mb: 3,

}

const headerTextProps = {
  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },

}

const PostInformationForm = () => {
  return (
    <Box sx={mainContainerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Post Information</Typography>
      </Box>
      {/* title */}
      {/* style */}
      {/* softwares used - fetch softwares from existing projects */}
    </Box>
  )
}

export default PostInformationForm