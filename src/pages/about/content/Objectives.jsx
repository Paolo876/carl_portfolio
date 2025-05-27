import { Box, Typography } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';

// animations
const slideUp = keyframes`
  0% {
    transform: translateY(3em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: .85;
  }
`;

// styles
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
  opacity: 0,
}



const Objectives = ({ careerObjective }) => {

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -25% 0px",
    delay: 250,
    triggerOnce: true
  });


  return (
    <Box sx={containerProps}>
      <Typography 
        sx={{...descTextProps, animation: inView ? `${slideUp} 1400ms ease forwards` : ""}} 
        variant='h6' 
        align='center' 
        ref={ref}
      >
        {careerObjective}
      </Typography>
    </Box>
  )
}

export default Objectives