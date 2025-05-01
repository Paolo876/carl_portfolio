import React from 'react'
import { Box, Typography } from '@mui/material'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'

const containerProps = {
  mt:5,
  overflow: "auto"
}

const headerContainerProps = {

}

const headerTextProps = {
	fontSize: {lg: 40},
	fontWeight: 700,
	letterSpacing: 1.4, 
	opacity: .9
}

const mainContainerProps = {
	mt: 8,
	display: "flex",
	width: "100%",
	justifyContent: "space-between",
	alignItems: "center",
	minHeight: "60vh",
}

const Content = ({ gridArea }) => {
  return (
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
						<ContactDetails/>
					</Box>
				</Box>
			</Box>
		</Box>
  )
}

export default Content