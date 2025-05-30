import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import { Box, Button, Typography } from '@mui/material';
import { useLogout } from '../../hooks/useLogout';

import Image from 'mui-image';
import LogoutIcon from '@mui/icons-material/Logout';


const containerProps = {
  position: "fixed",
  top:0,
  left:0,
  width: "100vw",
  zIndex: 50,

}

const DevNavbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  if(user) return (
    <Box sx={containerProps}>
      <Box>
        <Typography>Currently logged in as: </Typography>
        <Typography>{user.displayName}</Typography>
        {user.photoURL && <Box>
          <Image src={user.photoURL} alt="user-avatar"/>
        </Box>}
      </Box>
      <Box>
        <Button variant='contained' color="secondary" startIcon={<LogoutIcon/>} onClick={() => logout()}>LOGOUT</Button>
      </Box>
    </Box>
  )
}

export default DevNavbar