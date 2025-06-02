import { Container, Box } from '@mui/material'

const mainContainerProps = {
  mt: {xs: 7, md: 8, lg: 10},
}

const DevPageContainer = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Box sx={mainContainerProps}>
        {children}
      </Box>
    </Container>
  )
}

export default DevPageContainer