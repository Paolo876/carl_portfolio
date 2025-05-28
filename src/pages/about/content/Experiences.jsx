import { Box, List, ListItem, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
  // display: "flex",
  flexDirection: "column",
  alignItems: {lg:"center"},
  justifyContent: "center",
  gap: {xs: 3, sm: 4, md: 4, lg: 5},
  pt: {xs: 10, sm: 12, md: 18, lg: 20},
  pb: {xs: 7, sm: 8, md: 12, lg: 16},
  px: {xs: 1, lg: 8},
  // minHeight: {lg: "50vh"}
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

const experiencesItemContainer = {
  display: "grid",
  gridTemplateColumns: {md: "1fr 2fr", lg: "1fr 2fr"},
  gap: {md:1, lg:2},
  mb: {xs: 2, sm: 3, md: 4, lg: 6},
  opacity: 0
}

const durationTextProps = {
  fontSize: {xs: 18, sm: 20, md: 18, lg: 24},
  fontWeight: 800,
  letterSpacing: 1,
  opacity: .95,
  mt: 2,
}

const jobTitleTextProps = {
  fontSize: {xs: 13.5, sm: 14, md: 14, lg: 16},
  fontWeight: 500,
  letterSpacing: .8,
  opacity: .8,
  mb:{xs: 1.5, sm: 2, md:2, lg: 2}
}

const companyTextProps = {
  fontSize: {xs: 13.5, sm: 14, md: 15, lg: 17},
  fontWeight: 500,
  opacity: .8,
  mb: {xs: 1.5, sm:1, md: 1, lg: 1}
}

const addressTextProps = {
  fontSize: {xs: 12, sm: 12, md: 12, lg: 14},
  fontWeight: 200,
  opacity: .7,
}

const responsibilitiesTextProps = {
  fontWeight: 200,
  fontSize: {xs: 12, sm: 12, md: 13, lg: 13.5},
  letterSpacing: 1,
  opacity: .85 
}

const Experiences = ({ experiences }) => {

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -25% 0px",
    delay: 250,
    triggerOnce: true
  });


  return (
    <Box sx={containerProps}>
      <Typography sx={{...titleTextProps, animation: inView ? `${appear} 1400ms ease forwards` : ""}} variant="h6" align="center" ref={ref}>Work Experience</Typography>
      {[...experiences].reverse().map((item, idx) => <Box 
        key={item.company} 
        sx={{...experiencesItemContainer, animation: inView ? `${slideLeft} 900ms ease forwards ${(idx * 150) * 2}ms` : ""}}
      >
        <Box>
          <Typography variant="h6" sx={durationTextProps}>{item.duration}</Typography>
          <Typography sx={jobTitleTextProps}>{item.jobTitle}</Typography>
          <Typography sx={companyTextProps}>{item.company}</Typography>
          <Typography sx={addressTextProps}><LocationOnIcon style={{fontSize: "inherit"}} color="primary"/> {item.address}</Typography>
        </Box>
        <List>
          {item.responsibilities.map(_item => <ListItem key={_item}>
            <Typography variant='h6' sx={responsibilitiesTextProps}>- {_item}</Typography>
          </ListItem>)}
        </List>
      </Box>)}
    </Box>
  )
}

export default Experiences
