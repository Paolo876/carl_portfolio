import { Box, Typography, Chip } from '@mui/material'
import PostInfoInput from '../../../../components/FormInputs/PostInfoInput'
import ListInput from '../../../../components/FormInputs/ListInput'

const containerProps = {
  borderTop: 1,
  borderColor: "rgba(255,255,255,0.1)",
  mb: {lg: 5}
}

const formItemProps = {
  mt: 3,
}

const formHeaderTextProps = {
  fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
  mb: 1,
}

const skillsListContainer = {
  display: "flex",
  gap: 1,
  mt: 1.5
}


const EditInformationForm = ({ postInformation, setPostInformation }) => {


  const handleAddSkill = item => {
    setPostInformation(prevState => ({...prevState, softwares: [...prevState.softwares, item]}))
  }

  const handleDeleteSkill = item => {
    setPostInformation(prevState => ({...prevState, softwares: prevState.softwares.filter(_item => _item !== item)}))
  }


  return (
    <Box component="form" sx={containerProps}>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Post Title</Typography>
          <PostInfoInput
            id="header" 
            label="Post Title"
            initialValue={postInformation.header}
            setValue={value => setPostInformation(prevState => ({...prevState, header: value}))}
            value={postInformation.header}
          />
        </Box>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Style</Typography>
          <PostInfoInput
            id="style" 
            label="Style"
            initialValue={postInformation.style}
            setValue={value => setPostInformation(prevState => ({...prevState, style: value}))}
          />
        </Box>
        <Box sx={formItemProps}>
          <Typography sx={formHeaderTextProps} variant="h6">Softwares used</Typography>
          <ListInput addValues={handleAddSkill}/>
          <Box sx={skillsListContainer}>
            { postInformation.softwares.map(item => <Chip label={item} variant="outlined" onDelete={() => handleDeleteSkill(item)} key={item} color="success"/>) }
          </Box>
        </Box>
    </Box>
  )
}

export default EditInformationForm