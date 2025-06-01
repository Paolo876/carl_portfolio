import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router';
import { Box, Button, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { useLogout } from '../../hooks/useLogout';

import Image from 'mui-image';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const containerProps = {
  position: "fixed",
  top:0,
  left:0,
  width: "100vw",
  zIndex: 50,
  display: "flex",
  flexDirection: "row",
  justifyContent: {xs: "space-between", sm:"right"},
  backgroundColor: "secondary.light",
  alignItems: "center",
  boxShadow: 5,
  gap: {xs: 2, sm:10},
  px: {xs: 3, sm: 5, md: 8, lg:15}
}

const infoContainerProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 2
}

const infoTextProps = {
  fontWeight: 300, 
  fontSize: {xs: 12, sm: 15, md: 16, lg:17},
  display: {xs: "none", sm: "initial"}
}

const nameInfoContainerProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
  border: 2,
  borderRadius: "35px",
  borderColor: "primary.light",
  backgroundColor: "secondary.main",
  py: .5,
  px: .75,
  my: .5,
}

const nameTextProps = {
  fontWeight: 400, 
  fontSize: {xs: 10, sm: 13, md: 14, lg:15},
}

const imageContainerProps = {
  borderRadius: "50%",
  overflow: "hidden",
  height: {xs: "20px", sm: "30px"},
  width: {xs: "20px", sm: "30px"},
}


const DevNavbar = () => {
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  if(user) return (
    <Box sx={containerProps}>
      <Box sx={infoContainerProps}>
        <Typography variant='h6' sx={infoTextProps}>Currently logged in as: </Typography>
        <Box sx={nameInfoContainerProps}>
          {user.photoURL && <Box sx={imageContainerProps}>
            <Image src={user.photoURL} alt="user-avatar" duration={0}/>
          </Box>}
          <Typography variant='h6' sx={nameTextProps}>{user.email}</Typography>
        </Box>
      </Box>
      <Box>
        <IconButton size="large" onClick={() => setIsDrawerOpen(state => !state)}><MenuIcon/></IconButton>
      </Box>
      
      <Drawer 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(state => !state)} 
        anchor='right'
      >
        <Box>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon><AddIcon/></ListItemIcon>
                <ListItemText primary="New Post"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon><EditIcon/></ListItemIcon>
                <ListItemText primary="Edit/Manage Posts"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon><ManageAccountsIcon/></ListItemIcon>
                <ListItemText primary="Update Personal Information"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton onClick={() => logout()}>
                <ListItemIcon><LogoutIcon/></ListItemIcon>
                <ListItemText primary="Logout"/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default DevNavbar