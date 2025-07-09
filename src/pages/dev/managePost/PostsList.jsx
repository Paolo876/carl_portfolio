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
  mt: 3,
  pt: 3,
}

const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gap: 2,
  height: "100%",
  width: "100%",
  gridTemplateColumns: {
    xs: "100vw",
    sm: `65vw`,
    md: `repeat(auto-fill, minmax(250px, 1fr))`,
    lg: `repeat(auto-fill, minmax(350px, 1fr))`
  },
  justifyContent: "center"
}

const boxContainerProps = {
  border: 1, 
  borderColor: "rgba(255,255,255,.1)", 
  height: {md: 240, lg: 240,  xl: 275},
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}


const informationContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pl: .5,
  mb: 2,
}

const headerTextProps = {
  fontSize: { xs: 14, sm: 14, lg:15 },
}
const actionButtonsContainer = {
  display : "flex",
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

  const handleClick = (action) => {
    if(action === "edit") {

    }
    if(action === "delete") {

    }
  }


  return (
    <Box sx={containerProps}>
      {isLoading && <LoadingSpinner opacity={.85}/>}
      {!isLoading && projectsList && <Box sx={projectImagesContainerProps}>
        {projectsList.map(item => <Box>
          <Box sx={boxContainerProps}>
            <Image src={item.coverImage.src}  duration={250} sx={{transition: "300ms width ease"}} fit='cover' showLoading easing="ease-in-out"/>
          </Box>
          <Box sx={informationContainer}>
            <Typography variant='h6' sx={headerTextProps}>{item.header}</Typography>
            <Box sx={actionButtonsContainer}>
              <IconButton color='primary' onClick={() => handleClick("edit")}><EditIcon/></IconButton>
              <IconButton color='secondary' onClick={() => handleClick("delete")}><DeleteIcon/></IconButton>
            </Box>
          </Box>
        </Box>)}
      </Box>}
    </Box>
  )
}

export default PostsList