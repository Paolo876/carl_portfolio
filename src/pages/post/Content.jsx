import PostImages from './PostImages'
import { Box } from '@mui/material'


const pageTopMargin = {
  xs: 5,
  lg: 5,
  xl: 8
}
const sidebarWidthsOff = {
  sm: "70px", md: "230px", lg: "280px", xl: "340px"
}

const Content = ({ project, prevProjectId, nextProjectId }) => {


  return (
    <Box
      sx={{
        mt: pageTopMargin,
        mx: {sm: 4, md: 4, lg: 4, xl: 8},
        display: {xs: "none", md: "grid"},
        gridTemplateColumns: {md: `4fr ${sidebarWidthsOff.md}`, lg: `4fr ${sidebarWidthsOff.lg}`, xl: `4fr ${sidebarWidthsOff.xl}`},
        gap: {sm: 4, md: 4, lg:5},
      }}
    >
      
      <PostImages project={project} prevProjectId={prevProjectId} nextProjectId={nextProjectId}/>
    </Box>
  )
}

export default Content