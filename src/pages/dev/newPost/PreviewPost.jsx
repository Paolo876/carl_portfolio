import React from 'react'
import { Box, Typography, List, ListItem, Paper } from '@mui/material'
import Image from 'mui-image'


const containerProps = {
  mb: {lg: 5}
}

const headerTextContainerProps = {
  mb: 2,

}

const headerTextProps = {
  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },

}

const contentContainerProps = {

}

const boxContainerProps = {
  position: "relative",
  display: "flex",
  flexDirection: {xs: "column", md:"row"},
  userSelect: "none",
  px: {sm: 3},
  width: "auto",
  // my:2,
  gap: 2,
}

const imagesListContainerProps = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  py: 3,
  backgroundColor: "rgba(0,0,0,0.75)",
  maxHeight: "55vh",
  overflow: "auto",


}

const postInformationProps = {
  backgroundColor: {xs: "none", md:"initial"},
  border: 1,
  borderColor: "rgba(255,255,255, .05)",
  borderRadius: 4,
  py: 2,
  px: 2,
  minWidth: {sm: 150, md: 200, lg: 300}
}

const postHeaderTextProps = {
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: {xs: 14, sm: 15, md: 17, lg: 18},
  pb: {md: .2, lg: 0 }
}

const postSubHeaderTextProps = {
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
  mt: {xs: 2, sm: 3, md: 4, lg:4},
}

const listItemProps = {
  m:0,
  p:0,
  mt: {xs: .5, lg:.85},
  fontWeight: 300,
  letterSpacing: 1,
  fontSize: {xs: 10, sm: 11, md: 11, lg: 11, xl: 12},
  opacity: .8,
}

const PreviewPost = ({ images, postInformation }) => {

  return (
    <Box sx={containerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Post Preview</Typography>
      </Box>
      <Box>
        <Box sx={boxContainerProps}>
          <Box sx={imagesListContainerProps}>
            {images.map(item => <Box sx={{maxHeight: {md: "45vh", lg: "50vh"}}} key={item.filename}>
              <Image src={item} alt={item.filename} fit="contain" duration={100} showLoading/>
            </Box>)}
          </Box>
          <Paper sx={postInformationProps}>
            <Typography variant="h6" sx={postHeaderTextProps}>{postInformation.header}</Typography>
            <Typography variant="h6" sx={postSubHeaderTextProps}>{postInformation.style}</Typography>
            <List sx={listProps}>
              {postInformation.softwares.map(item => <ListItem sx={listItemProps} key={item}>-{item}</ListItem>)}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default PreviewPost