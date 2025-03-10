import React from 'react'
import { Box, Typography, List, ListItem } from '@mui/material'

const containerProps = {
  mt: 10,
  pb: 12,  
  borderBottom: 1,
  borderColor: "primary.dark",
}


const headerTextProps = {
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: {md: 17, lg: 18},
  pb: {md: .2, lg: 0 }
}

const subHeaderTextProps = {
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: 12,
  opacity: .85,
  // textAlign: {lg:"right"},
  pr: 1,
}

const listProps = {
  m:0,
  p:0,
  mt: {sm: 3, md: 4, lg:4},
}

const listItemProps = {
  m:0,
  p:0,
  mt: {md: .5, lg:.85},
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: {md: 11, lg: 11, xl: 12},
  opacity: .8,
}


const ProjectInformation = ({ title, softwares, style }) => {
  return (
    <Box sx={containerProps}>
      <Typography variant="h6" sx={headerTextProps}>{title}</Typography>
      <Typography variant="h6" sx={subHeaderTextProps}>{style}</Typography>
      <List sx={listProps}>
        {softwares.map(item => <ListItem sx={listItemProps} key={item}>-{item}</ListItem>)}
      </List>
    </Box>
  )
}

export default ProjectInformation