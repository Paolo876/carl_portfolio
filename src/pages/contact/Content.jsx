import React from 'react'
import { Box, Typography, Alert } from '@mui/material'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'
import useAboutRedux from "../../hooks/useAboutRedux"
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import FallbackPageWarning from '../../components/ui/FallbackPageWarning'


const containerProps = {
  my:5,
  overflow: "auto",
}

const headerContainerProps = {

}

const headerTextProps = {
	fontSize: {xs: 32, sm: 45, md: 50, lg: 55},
	fontWeight: 700,
	letterSpacing: 1.4, 
	opacity: .9,
	pl: {xs: 2, sm: 0},
}

const mainContainerProps = {
	mt: {xs: 5, sm: 8, md: 8, lg: 12},
	display: "flex",
	flexDirection: { xs:"column-reverse", sm: "row" },
	width: "100%",
	justifyContent: "space-between",
	alignItems: "flex-start",
	pl: {xs: 2, sm: 0},
	minHeight: "60vh",
}

const Content = ({ gridArea }) => {
	const { about, isLoading, error } = useAboutRedux();

	if(isLoading) return <Box><LoadingSpinner/></Box>;
	if(error && !isLoading) return <Box><Alert severity="error">{error} <FallbackPageWarning message='Failed to load data.'/></Alert></Box>;
  if(!error && !isLoading) return (
		<Box sx={gridArea}>
			<Box sx={containerProps}>
				<Box sx={headerContainerProps}>
					<Typography sx={headerTextProps} variant="h6">Let's get in touch</Typography>
				</Box>
				<Box sx={mainContainerProps}>
					<Box>
						<ContactForm/>
					</Box>
					<Box>
						<ContactDetails information={about.information} resume={about.resume}/>
					</Box>
				</Box>
			</Box>
		</Box>
  )
}

export default Content