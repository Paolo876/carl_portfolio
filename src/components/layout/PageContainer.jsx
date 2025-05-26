import { useState, cloneElement, Children } from 'react'
import { Box } from '@mui/material'

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

const isSidebarCollapsedInitialState = {state: false, widthOff: sidebarWidthsOff, widthOn: sidebarWidthsOn}

const PageContainer = ({ children, gridArea: contentGridArea }) => {
  const [ isSidebarCollapsed, setIsSidebarCollapsed ] = useState(isSidebarCollapsedInitialState);
  const gridTemplateColumns = {
    xs: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.xs : sidebarWidthsOff.xs}`,
    sm: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.sm : sidebarWidthsOff.sm}`,
    md: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.md : sidebarWidthsOff.md}`,
    lg: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.lg : sidebarWidthsOff.lg}`,
    xl: `4fr ${isSidebarCollapsed.state ? sidebarWidthsOn.xl : sidebarWidthsOff.xl}`,
  }

  // window.onscroll = () => {
  //   if(!isSidebarCollapsed.state) setIsSidebarCollapsed(prevState => ({...prevState, state: true}))
  // }


  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: {sm: `'${contentGridArea} nav' 'footer footer'`, md: `'${contentGridArea} nav' 'footer footer'`},
        gridTemplateColumns,
        gap: {sm: 4, md: 4, lg:5},
        mx: {sm: 4, md: 4, lg: 4, xl: 8},
        mt: pageTopMargin,
        // mb: 20,
        transition: "200ms grid-template-columns linear",
      }}
    >
      {Children.map(children, child => {
        return cloneElement(child, { isSidebarCollapsed, setIsSidebarCollapsed, pageTopMargin, isSidebarCollapsedInitialState });
      })}
    </Box>
  )
}

export default PageContainer