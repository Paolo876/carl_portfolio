import React from 'react'
import { Paper } from '@mui/material'

const containerProps = {
 width: "100%",
 border: 1,
 borderRadius: 3,
 p: { lg: 1},
 minHeight: "150px",
 borderColor: "rgba(200,200,200,.25)"
}
const ContentItemContainer = ({ children }) => {
  return (
    <Paper sx={containerProps}>{children}</Paper>
  )
}

export default ContentItemContainer