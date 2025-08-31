import React from 'react'
import { List, Typography, ListItemButton } from '@mui/material'


const listItemProps = {
  opacity: .8,
  "&:hover": {
    opacity : 1
  }
}

const textProps = {
  fontWeight: 500,
  fontSize: {xs: 13, sm: 14, md: 15, lg: 16},
  letterSpacing: .5,
}

const SidebarNavigation = ({ navigationOptions }) => {
  return (
    <List>
      {navigationOptions.map( item => 
        <ListItemButton key={item.id} sx={listItemProps}>
          <Typography sx={textProps} variant='h6'>{item.title}</Typography>
        </ListItemButton>)}
    </List>
  )
}

export default SidebarNavigation