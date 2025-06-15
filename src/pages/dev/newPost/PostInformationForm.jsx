import { useState } from 'react'
import { Box, Typography, TextField, Chip, Button } from '@mui/material'
import TextInput from '../../../components/FormInputs/TextInput'
import AddIcon from '@mui/icons-material/Add';
import ListInput from '../../../components/FormInputs/ListInput';


const mainContainerProps = {
  mb: {lg: 5}
}

const headerTextContainerProps = {
  mb: 3,

}

const headerTextProps = {
  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },

}

const formContainerProps = {

}

const formItemProps = {
  mt: 4,
}

const formHeaderTextProps = {
  fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
  mb: 1,
}

const softwaresInputContainerProps = {
  display : "flex",
  gap : 1,
}

const skillsListContainer = {
  display: "flex",
  gap: 1,
  mt: 1.5
}


const MOCK_SKILLS = [ "Adobe Photoshop", "3DSMax", "Corona" ]


const PostInformationForm = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ header, setHeader ] = useState("");
  const [ style, setStyle ] = useState("");
  const [ softwares, setSoftwares ] = useState(MOCK_SKILLS)
  const [ softwareInput, setSoftwareInput ] = useState("");


  const handleDeleteSkill = (item) => {
    setSoftwares(prevState => prevState.filter(_item => _item !== item))
  }
  console.log(softwares)
  return (
    <Box sx={mainContainerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Post Information</Typography>
      </Box>
      <Box sx={formContainerProps} component="form">
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Post Title</Typography>
          <TextInput
            id="header" 
            label="Daily Majlis"
            setValue={value => setHeader(value)}
            disabled={isLoading}
          />
        </Box>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Style</Typography>
          <TextInput
            id="style" 
            label="Classic"
            setValue={value => setStyle(value)}
            disabled={isLoading}
          />
        </Box>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Softwares used</Typography>
          <Box sx={softwaresInputContainerProps}>
            <ListInput addValues={setSoftwares}/>
            <Button variant="contained" endIcon={<AddIcon/>}>Add</Button>
          </Box>
          <Box sx={skillsListContainer}>
            { softwares.map(item => <Chip label={item} variant="outlined" onDelete={() => handleDeleteSkill(item)} key={item} color="success"/>) }
          </Box>
        </Box>
        {/* softwares used - fetch softwares from existing projects */}
      </Box>
    </Box>
  )
}

export default PostInformationForm