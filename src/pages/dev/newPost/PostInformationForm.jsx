import { Box, Typography, Chip } from '@mui/material'
import PostInfoInput from '../../../components/FormInputs/PostInfoInput'
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


const skillsListContainer = {
  display: "flex",
  gap: 1,
  mt: 1.5
}




const PostInformationForm = ({ postInformation, setPostInformation }) => {

  const handleAddSkill = item => {
    setPostInformation(prevState => ({...prevState, softwares: [...prevState.softwares, item]}))
  }

  const handleDeleteSkill = item => {
    setPostInformation(prevState => ({...prevState, softwares: prevState.softwares.filter(_item => _item !== item)}))
  }


  return (
    <Box sx={mainContainerProps}>
      <Box sx={headerTextContainerProps}>
        <Typography variant="h6" sx={headerTextProps}>Post Information</Typography>
      </Box>
      <Box sx={formContainerProps} component="form">
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
    </Box>
  )
}

export default PostInformationForm