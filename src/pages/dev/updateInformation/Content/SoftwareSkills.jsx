import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField, Alert, Box, List, ListItem, Typography, Button } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'
import Image from 'mui-image'



const textProps = {
  fontWeight: 400,
  letterSpacing: 1.25,
  fontSize: { xs: 11, md: 11, lg: 12, xl: 13},
}


const SoftwareSkills = ({ id, title }) => {
  const { about, updateInfo } = useAboutRedux();
  const { updateDocument } = useFirestore("user");
  const [ inputValue, setInputValue ] = useState(about.careerObjective)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      // update document
      await updateDocument({...about, careerObjective: inputValue}, 'about');
      // update redux
      updateInfo({careerObjective: inputValue})
    } catch(err){
      console.log(err)
      setError(err.message);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(about.softwareSkills)
  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || inputValue === about.careerObjective} onClick={handleSubmit}>
      <Box>
        {/* input here */}
      </Box>
      <List>
        {about.softwareSkills && about.softwareSkills.map(item => <List>
          <ListItem key={item.name}>
            <Box sx={{height: 30, width: 30, display: "flex", mr: 2}}>
              <Image src={item.src} fit="scale-down" height="auto" width="auto" />
            </Box>
            <Typography variant='h6' sx={textProps}>{item.name}</Typography>
            <Button>x</Button>
          </ListItem>
        </List>)}
      </List>
    </ContentItemContainer>
  )
}

export default SoftwareSkills