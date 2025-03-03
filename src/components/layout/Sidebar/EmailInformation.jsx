import React from 'react'
import { Box, Typography, ButtonBase } from '@mui/material'


const boxBorderProps = {
  mt: {sm: 2, md: 2, lg: 3, xl: 4},
  pt: {sm: 2, emd: 3, lg: 4, xl: 6},
  borderTop: 1,
  borderColor: "primary.dark"
}

const buttonProps = {
  p:0,
  m:0,
  my: 1.8,
  display: "flex",
  flexDirection: "row",
  gap: 1.5,
  opacity: .9,
  "&&:hover" : {
    filter: "brightness(130%)",
    opacity: 1,
  }
}

const textProps = {
  fontWeight: 400,
  letterSpacing: 1.25,
  fontSize: { xs: 11, md: 11, lg: 12, xl: 13},
}


const EmailInformation = ({ state }) => {
  return (
    <>
      {!state && <Box sx={boxBorderProps}>
        <Typography variant='h6' sx={{fontSize: {md: 11, lg: 12}, letterSpacing: 1.5, fontWeight: 300, mb: {md: 1, xl:3}, opacity: .8}}>EMAIL:</Typography>
        <ButtonBase sx={{...buttonProps, opacity: 1}} href="mailto: carl.dimabuyu@gmail.com" target="_blank" rel="noreferrer">
          <Typography variant='h6' sx={{...textProps, fontWeight: 500, color: "primary.light", letterSpacing: 1 }}>carl.dimabuyu@gmail.com</Typography>
        </ButtonBase>
      </Box>}
    </>
  )
}

export default EmailInformation