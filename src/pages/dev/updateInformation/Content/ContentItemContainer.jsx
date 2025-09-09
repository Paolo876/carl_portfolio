import { Box, Button, Paper, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const containerProps = {
 width: "100%",
 border: 1,
 borderRadius: 3,
 p: { lg: 2},
 minHeight: "150px",
 borderColor: "rgba(200,200,200,.25)"
}

const headerTextProps = {
  fontWeight: 600,
  fontSize: {xs: 18, sm: 18, md: 20, lg: 22},
  letterSpacing: 1.5,
  pb: 3,
}


const ContentItemContainer = ({ children, title, isDisabled=true, onClick }) => {
  return (
    <Paper sx={containerProps}>
      <Box sx={{borderBottom: 1, borderColor: "rgba(255,255,255,.15)", mb: 2}}>
        <Typography variant='h6' sx={headerTextProps}>{title}</Typography>
      </Box>
      <Box>
        {children}
      </Box>
      <Box sx={{mt: 4, display: "flex", alignItems: "flex-end", justifyContent: "right"}}>
        <Button color='success' variant='outlined' endIcon={<CheckCircleOutlineIcon/>} disabled={isDisabled} onClick={onClick}>Save Changes</Button>
      </Box>
    </Paper>
  )
}

export default ContentItemContainer