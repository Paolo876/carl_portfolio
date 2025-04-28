import { Box, Typography } from '@mui/material'
import React from 'react'

const containerProps = {
  // background: "rgba(30,30,30,.4)",
  display: {xs: "none", md:"flex"},
  alignItems: "flex-start",
  justifyContent: "center",
  pt: {md: 10, lg:25},
  pb: {md: 15, lg: 18},
  px: {md: 2, lg: 12, xl: 18},
  // minHeight: "50vh"
}

const descTextProps = {
  fontSize: {xs: 12, sm: 13, md: 14, lg:15},
  lineHeight: 2.5,
  fontWeight: 200,
  letterSpacing: 1,
  opacity: .85
}



const Objectives = ({ careerObjective }) => {
  return (
    <Box sx={containerProps}>
      <Typography sx={descTextProps} variant='h6' align='center'>{careerObjective}</Typography>
    </Box>
  )
}

export default Objectives