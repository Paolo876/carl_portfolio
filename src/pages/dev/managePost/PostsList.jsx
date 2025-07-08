import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import useProjectsRedux from '../../../hooks/useProjectsRedux'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'
import Image from 'mui-image'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const containerProps = {
  borderTop: 1,
  borderColor: "rgba(50,50,50,.85)",
  mt: {md: 3},
  pt: {md: 3},
}


const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gap: 1,
  height: "100%",
  width: "100%",
  gridTemplateColumns: {
    xs: "100vw",
    sm: `65vw`,
    md: `repeat(auto-fill, minmax(250px, 1fr))`,
    lg: `repeat(auto-fill, minmax(350px, 1fr))`
    // md: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "270px": "220px"}, 1fr))`,
    // lg: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "300px": "250px"}, 1fr))`,
    // xl: `repeat(auto-fill, minmax(${isSidebarCollapsed.state ? "350px": "280px"}, 1fr))`
  },
  justifyContent: "center"
}

const boxContainerProps = {
  border: 1, 
  borderColor: "rgba(255,255,255,.1)", 
  height: {md: 240, lg: 240,  xl: 275},
  // cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
  // transition: "300ms width ease",
  // display: {xs: "none", md: "initial"}
}


const informationContainer = {
  // position: "absolute",
  // top: 0,
  // left: 0,
  // height: "100%",
  // width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pl: 1,
}



const PostsList = () => {
  const { projects, isLoading } = useProjectsRedux();

  let projectsList = projects && projects.map(item =>  {
    let newStr
    const coverImage = item.images[0].src
    if(coverImage.includes("firebase")) {
      let domain = new URL(coverImage);
      newStr = `https://ik.imagekit.io/q5892cimh/tr:h-300/${domain.pathname}${domain.search}`;
    } else {
      newStr = `${coverImage.substring(0, coverImage.indexOf("q5892cimh/") + 10)}tr:h-300/${coverImage.slice(coverImage.indexOf("q5892cimh/") + 10)}`;
    }
    return { header: item.header, coverImage: {filename:item.images[0].filename, src: newStr}, id: item.id }
  })


  return (
    <Box sx={containerProps}>
      {isLoading && <LoadingSpinner opacity={.85}/>}
      {!isLoading && projectsList && <Box sx={projectImagesContainerProps}>
        {projectsList.map(item => <Box>
          <Box sx={boxContainerProps}>
            <Image src={item.coverImage.src}  duration={250} sx={{transition: "300ms width ease"}} fit='cover' showLoading easing="ease-in-out"/>
          </Box>
          <Box sx={informationContainer}>
            <Typography>{item.header}</Typography>
            <Box>
              <IconButton size="large" color='primary'><EditIcon/></IconButton>
              <IconButton size="large" color='error'><DeleteIcon/></IconButton>
            </Box>
          </Box>
        </Box>)}
      </Box>}
    </Box>
  )
}

export default PostsList