import { Box, Typography } from '@mui/material'
import React from 'react'

const containerProps = {
  // background: "rgba(30,30,30,.4)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: {lg: 5},
  pt: 20,
  pb: 18,
  px: {lg: 18},
  minHeight: "50vh"
}

const descTextProps = {
  fontSize: 15,
  lineHeight: 2.5,
  fontWeight: 200,
  letterSpacing: 1.4,
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