import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router';
import { Box, Button, Typography, IconButton, SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { useLogout } from '../../hooks/useLogout';

import Image from 'mui-image';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
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
  // backgroundColor: "secondary.light",
  backdropFilter: "blur(10px) brightness(120%)",
  alignItems: "center",
  borderBottom: 1,
  borderColor: "rgba(255,255,255,.1)",
  boxShadow: 3,
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
  fontSize: {xs: 11, sm: 12, md: 13, lg:14},
  display: {xs: "none", sm: "initial"}
}

const nameInfoContainerProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 1,
  border: 1.5,
  borderRadius: "35px",
  borderColor: "primary.light",
  // backgroundColor: "secondary.main",
  py: .5,
  px: .75,
  my: {xs: .5, md:.75, lg: 1},
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


  const handleNavigationClick = (link) => {
    navigate(link)
    setIsDrawerOpen(false)
  }


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
        <IconButton size="large" onClick={() => setIsDrawerOpen(true)}><MenuIcon/></IconButton>
      </Box>

      <SwipeableDrawer 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onOpen={() => setIsDrawerOpen(true)} 
        anchor='right'
        disableBackdropTransition
      >
        <Box>
          <List>
            <ListItem>
              <Typography variant='h6'>Main Navigation</Typography>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigationClick("/")}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Home"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigationClick("/about")}>
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary="About"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigationClick("/contact")}>
                <ListItemIcon><PhoneIcon/></ListItemIcon>
                <ListItemText primary="Contact"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant='h6'>Dev Tools</Typography>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigationClick("/dev/new-post")}>
                <ListItemIcon><AddIcon/></ListItemIcon>
                <ListItemText primary="New Post"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigationClick("/dev/manage-post")}>
                <ListItemIcon><EditIcon/></ListItemIcon>
                <ListItemText primary="Edit/Manage Posts"/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigationClick("/dev/update-info")}>
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
      </SwipeableDrawer>
    </Box>
  )
}

export default DevNavbar