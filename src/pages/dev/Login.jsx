import { useGoogleLogin } from "../../hooks/useGoogleLogin";
import { useNavigate } from 'react-router';
import { Box, Container, Paper, Typography, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GoogleIcon from '@mui/icons-material/Google';

const containerProps = {
  my: 12,
  px: 5,
  py: 8, 
  overflow: "auto",
}

const headerTextProps = {
	fontSize: {xs: 32, sm: 36, md: 38, lg: 40},
	fontWeight: 700,
	letterSpacing: 1.4, 
	opacity: .9,
	pl: {xs: 2, sm: 0},
}

const descTextProps = {
  fontSize: {xs: 12, sm: 13, md: 14, lg:15},
  lineHeight: 2.5,
  fontWeight: 200,
  letterSpacing: 1,
  mt: 8
}

const buttonContainerProps = {
  display: "flex",
  flexDirection: {xs: "column", sm: "row"},
  gap: 5,
  mt: 8
}

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useGoogleLogin();

  const handleLogin = async () => {
    await login();
  };



  return (
    <Container>
      <Paper sx={containerProps}>
        <Box>
          <Typography sx={headerTextProps} variant="h6">LOGIN</Typography>
        </Box>
        <Box>
          <Typography sx={descTextProps} variant="h6">This page is reserved for the rightful owner of this site, Carl Adriant Dimabuyu.</Typography>
        </Box>
        <Box sx={buttonContainerProps}>
          <Button 
            disabled={isLoading} 
            onClick={handleLogin}
            variant="contained"
            color="primary"
            startIcon={<GoogleIcon/>}
            size="large"
          >
            Login With Google
          </Button>
          <Button 
            disabled={isLoading} 
            onClick={() => navigate("/")}
            variant="outlined"
            color="secondary"
            startIcon={<HomeIcon/>}
            size="large"
          >
            Back To Home Page
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login