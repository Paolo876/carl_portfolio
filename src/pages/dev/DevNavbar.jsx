import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router';
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
  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
  backgroundColor: "secondary.light",
  alignItems: "center",
  boxShadow: 5,
  gap: 10,
  pr: {xs: 3, sm: 5, md: 8, lg:15}
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
  height: "30px",
  width: "30px",
}


const DevNavbar = () => {
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
        <Button 
          variant='contained' 
          color="primary" 
          startIcon={<LogoutIcon/>} 
          onClick={() => logout()}
        >
          LOGOUT
        </Button>
      </Box>
    </Box>
  )
}

export default DevNavbar