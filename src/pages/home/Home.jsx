import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import ProjectsList from './ProjectsList';
import Sidebar from './Sidebar';
import MobileSidebar from '../../components/layout/MobileSidebar';


const sidebarWidthsOff = {
  sm: "70px", md: "230px", lg: "280px", xl: "340px"

}

const sidebarWidthsOn = {
  sm: "70px", md: "75px", lg: "80px", xl: "100px"
}

const pageTopMargin = {
  xs: 1,
  lg: 1,
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
          gridTemplateAreas: {sm: "'projects nav' 'footer footer'", md: "'projects nav' 'footer footer'"},
          gridTemplateColumns,
          gap: {sm: 4, md: 4, lg:5},
          mx: {sm: 4, md: 4, lg: 4, xl: 8},
          mt: pageTopMargin
        }}
      >
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} pageTopMargin={pageTopMargin}/>
        <ProjectsList isSidebarCollapsed={isSidebarCollapsed}/>
        <MobileSidebar/>
        {/* <Box
          sx={{
            gridArea: "footer",
            alignItems: "center",
            position: "fixed",
            bottom: 5,
            right:0,
            left: 0,
            width: "fit-content",
            marginInline: "auto",
          }}
        >
          <Typography align="center" fontSize={12} sx={{opacity: .5}}>© 2025 Carl Dimabuyu, All rights reserved.</Typography>
        </Box> */}
      </Box>
  )
}
