import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';


// animations
const slideLeft = keyframes`
  0% {
    transform: translateX(3em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const containerProps = {
  // background: "rgba(60,60,60,.25)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: {xs: 3, sm: 4, md: 5, lg: 5},
  pt: {xs: 10, sm: 12, md: 18, lg: 25},
  pb: {xs: 7, sm: 8, md: 12, lg: 16},
  px: {lg: 8},
  minHeight: {lg: "50vh"}
}

const titleTextProps = {
  fontSize: {xs: 17, sm: 18, md: 20, lg: 22},
  fontWeight: 600,
  letterSpacing: 3,
  mb: {xs: 2, sm: 3, md: 5, lg: 10},
  textTransform: "uppercase",
  color: "primary.light",
  opacity: 0
}

const skillsContainerProps = {
  display: "grid",
  gridTemplateColumns: {xs: "1fr 1fr", md:"1fr 1fr 1fr"},
  width: "auto",
  gap: {xs: 1, sm: 4, md: 5, lg: 15},
}

const skillItemContainerProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  py: 1,
  px: 2,
  opacity: 0
}


const imageContainerProps = { 
  height: {
    xs: 50, 
    sm: 55,
    md: 60, 
    lg: 70, 
  }, 
  width: {
    xs: 55, 
    sm: 60, 
    md: 65,
    lg: 80
  },
  display: "flex",
  justifyContent: "center", 
}

const imageProps = {
  filter: "saturate(80%) grayscale(25%)",

}

const skillItemTextProps = {
  fontSize: { xs: 11, sm: 12, md: 12, lg: 13 },
  fontWeight: 500,
  letterSpacing: 2,
  opacity: .85
}



const Skills = ({ skills }) => {

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -25% 0px",
    delay: 250,
    triggerOnce: true
  });


  return (
    <Box sx={containerProps}>
      <Typography sx={{...titleTextProps, animation: inView ? `${appear} 1400ms ease forwards` : ""}} variant='h6'>Skills</Typography>
      <Box sx={skillsContainerProps} ref={ref}>
        {skills.map((item, idx) => <Box 
          size={1.5} 
          key={item.fileName} 
          sx={{...skillItemContainerProps , animation: inView ? `${slideLeft} 900ms ease forwards ${(idx * 150) * 2}ms` : ""}}
        >
          <Box sx={imageContainerProps}>
            <Image src={item.src} alt={item.fileName} sx={imageProps} duration={0} fit="scale-down" />
          </Box>
          <Typography variant='h6' sx={skillItemTextProps}>{item.name}</Typography>
        </Box>)}
      </Box>
    </Box>
  )
}

export default Skills