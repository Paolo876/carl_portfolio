import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField, Alert, Box, List, ListItem, Typography, Button } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'
import objectDeepCompare from '../../../../utils/objectDeepCompare'
import Image from 'mui-image'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const listItemProps = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "rgba(255,255,255,.1)",
  borderRadius: 3,
  mb: 2,
}

const listItemContentProps = {
  display: "flex",
  alignItems: "center",
  flex: 1
}
const textProps = {
  fontWeight: 400,
  letterSpacing: 1.25,
  fontSize: { xs: 11, md: 11, lg: 12, xl: 13},
}


const SoftwareSkills = ({ id, title }) => {
  const { about, updateInfo } = useAboutRedux();
  const { updateDocument } = useFirestore("user");
  const [ updatedSkills, setUpdatedSkills ] = useState(about.softwareSkills)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null);
  const [ isInputVisible, setIsInputVisible ] = useState(false);


  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      // update document
      // await updateDocument({...about, careerObjective: inputValue}, 'about');
      // update redux
      // updateInfo({careerObjective: inputValue})
    } catch(err){
      console.log(err)
      setError(err.message);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (src) => {
    
  }

  const handleDelete = (src) => {
    setUpdatedSkills(prevState => prevState.filter(item => item.src !== src))
  }

  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || objectDeepCompare(about.softwareSkills, updatedSkills)} onClick={handleSubmit}>
      <Box sx={{mb: 3, borderBottom: 1, pb: 2, borderColor: "rgba(100,100,100,.1)"}}>
        {/* input here */}
        {!isInputVisible && <Box>
          <Button sx={{width: "100%", py: 1.75}} variant="contained" size="large" endIcon={<AddIcon/>} onClick={() => setIsInputVisible(true)}>Add New Skill</Button>
        </Box>}
      </Box>
      <List>
        {updatedSkills && updatedSkills.map(item =>
          <ListItem key={item.name} sx={listItemProps}>
            <Box sx={listItemContentProps}>
              <Box sx={{height: 30, width: 30, display: "flex", mr: 2}}>
                <Image src={item.src} fit="scale-down" height="auto" width="auto" />
              </Box>
              <Typography variant='h6' sx={textProps}>{item.name}</Typography>
            {/* <TextField fullWidth size='small'/> */}
            </Box>
            <Box sx={{display: "flex", gap: 1}}>
              <Button variant='outlined' color='info' onClick={() => handleEdit(item.src)}><EditIcon/></Button>
              <Button variant='contained' color='secondary' onClick={() => handleDelete(item.src)}><CloseIcon/></Button>
            </Box>
          </ListItem>)}
      </List>
    </ContentItemContainer>
  )
}

export default SoftwareSkills