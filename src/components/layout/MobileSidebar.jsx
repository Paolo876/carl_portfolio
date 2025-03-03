import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Paper, Typography, Button } from '@mui/material'

// icons
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';


const containerProps = {
  display: {xs: "flex", sm: "none"},
  flexDirection: "row",
  gridArea: "nav",
  border: 1,
  borderColor: "rgba(255,255,255, .05)",
  borderRadius: 3,
  position: "fixed",
  bottom: 10,
  right:0,
  left: 0,
  overflowY: "auto",
  pb: 0,
  pt: 0,
  height: "auto",
  transition: "150ms width ease",
  zIndex: 20,
  width: "fit-content",
  marginInline: "auto",
}

const activePageProps = {
  backgroundColor: "primary.main",
  color: "white"
}

const mobileButtonProps = {
  px: 1.85,
  py: 1.25,
  display: "flex",
  flexDirection: "row",
  gap: .5,
  color: "white",
  touchAction: "manipulation"
}

const iconProps = {
  fontSize: "inherit", 
  opacity: .6
}

const textProps = {
  fontWeight: 400,
  letterSpacing: 1.25,
  fontSize: 11,
}


const MobileSidebar = () => {
  // const [ currentOffset, setCurrentOffset ] = useState(window.scrollY);
  // const [ isVisible, setIsVisible ] = useState(true)
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // window.onscroll = () => {
  //   console.log(currentOffset, window.scrollY)
  //   if(window.scrollY > currentOffset && isVisible) {
  //     console.log("hide")
  //     setCurrentOffset(window.scrollY)
  //     setIsVisible(false)
  //   } else if(window.scrollY < currentOffset && !isVisible) {
  //     console.log("show")
  //     setCurrentOffset(window.scrollY)
  //     setIsVisible(true)
  //   }
  // }


  const handleClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path)
  }
  return (
    <Paper sx={containerProps}>
      <Button 
        sx={{
          ...mobileButtonProps,
          ...(pathname === "/" && {...activePageProps})
        }} 
        onClick={() => handleClick("/")}
      >
        <HomeIcon style={iconProps}/>
        <Typography variant='h6' sx={textProps}>HOME</Typography>
      </Button>
      <Button 
        sx={{
          ...mobileButtonProps, 
          borderLeft: 1, 
          borderRight: 1, 
          borderRadius: 0, 
          borderColor: "primary.dark",
          ...(pathname === "/about" && {...activePageProps})
          }} 
        onClick={() => handleClick("/about")}
      >
        <PersonIcon style={iconProps}/>
        <Typography variant='h6' sx={textProps}>ABOUT</Typography>
      </Button>
      <Button 
        sx={{
          ...mobileButtonProps,
          ...(pathname === "/contact" && {...activePageProps})
        }} 
        onClick={() => handleClick("/contact")}
      >
        <PhoneIcon style={iconProps}/>
        <Typography variant='h6' sx={textProps}>CONTACT</Typography>
      </Button>
    </Paper>
  )
}

export default MobileSidebar