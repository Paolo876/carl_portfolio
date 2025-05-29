import { useGoogleLogin } from "../../hooks/useGoogleLogin";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router';
import { Box, Container, Paper, Typography } from "@mui/material";
import React from 'react'

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { login, isLoading } = useGoogleLogin();

  // if(user) navigate('/');
  const handleLogin = async () => {
    await login();
  };



  return (
    <Container>
      <Paper>
        <Box>
          <Typography>LOGIN</Typography>
        </Box>
        <Box>
          <Typography>This page is reserved for the rightful owner of this site, Carl Adriant Dimabuyu.</Typography>
        </Box>
        <Box>
          <Button disabled={isLoading}>Back To Home Page</Button>
          <Button disabled={isLoading}>Login With Google</Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login