import { useState } from 'react';
import { Box } from '@mui/material';

import ProjectsList from './ProjectsList';
import Sidebar from './Sidebar';


const sidebarWidthsOff = {
  md: "200px", lg: "280px", xl: "340px"

}

const sidebarWidthsOn = {
  md: "50px", lg: "80px", xl: "100px"
}

const pageTopMargin = {
  xs: 5,
  lg: 4,
  xl: 4
}

export default function Home() {
  const [ isSidebarCollapsed, setIsSidebarCollapsed ] = useState({state: false, widthOff: sidebarWidthsOff, widthOn: sidebarWidthsOn});

    // trigger when window.scrollY is not 0
    window.onscroll = () => {
      if(!isSidebarCollapsed.state) setIsSidebarCollapsed(prevState => ({...prevState, state: true}))
    }

  const gridTemplateColumns = {
    xs: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.xs : sidebarWidthsOff.xs}`,
    sm: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.sm : sidebarWidthsOff.sm}`,
    md: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.md : sidebarWidthsOff.md}`,
    lg: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.lg : sidebarWidthsOff.lg}`,
    xl: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.xl : sidebarWidthsOff.xl}`,
  }


  return (
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: "'projects nav' 'footer footer'",
          gridTemplateColumns,
          gap: 5,
          mx: {lg: 4, xl: 8},
          mt: pageTopMargin
        }}
      >
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} pageTopMargin={pageTopMargin}/>
        <ProjectsList isSidebarCollapsed={isSidebarCollapsed}/>
      </Box>
  )
}
