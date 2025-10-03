import { useState } from 'react'
import ContentItemContainer from '../ContentItemContainer'
import useAboutRedux from '../../../../../hooks/useAboutRedux'
import { Alert, Box, List, Button } from '@mui/material'
import { useFirestore } from '../../../../../hooks/useFirestore'
import objectDeepCompare from '../../../../../utils/objectDeepCompare'
import AddIcon from '@mui/icons-material/Add';
import SkillItem from './SkillItem'
import AddSkillInput from './AddSkillInput'




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

  const handleEdit = (src, updatedValue) => {
    setUpdatedSkills(prevState => prevState.map(item => {
      if(item.src === src) {
        let updatedItem = {...item, name: updatedValue};
        return updatedItem;
      } else {
        return item
      }
    }))
  }

  const handleDelete = (src) => {
    setUpdatedSkills(prevState => prevState.filter(item => item.src !== src))
  }

  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || objectDeepCompare(about.softwareSkills, updatedSkills)} onClick={handleSubmit}>
      <Box sx={{mb: 3, borderBottom: 1, pb: 2, borderColor: "rgba(100,100,100,.1)"}}>
        {/* input here */}
        {isInputVisible && <AddSkillInput/>}
        {!isInputVisible && <Box>
          <Button sx={{width: "100%", py: 1.75}} variant="contained" size="large" endIcon={<AddIcon/>} onClick={() => setIsInputVisible(true)}>Add New Skill</Button>
        </Box>}
      </Box>
      <List>
        {updatedSkills && updatedSkills.map(item => 
          <SkillItem 
            item={item} 
            handleEdit={handleEdit} 
            handleDelete={handleDelete}
          />
        )}
      </List>
    </ContentItemContainer>
  )
}

export default SoftwareSkills