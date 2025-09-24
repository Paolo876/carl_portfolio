import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField, Alert } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'


const WorkExperience = ({ id, title }) => {
  const { about, updateInfo } = useAboutRedux();
  const { updateDocument } = useFirestore("user");
  const [ inputValue, setInputValue ] = useState(about.careerObjective)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null);


  const handleSubmit = async () => {
    
  }

  console.log(about.experience)
  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || inputValue === about.workExperience} onClick={handleSubmit}>
      {error && <Alert severity='error' sx={{mb: 1}}>{error.message}</Alert>}
      {/* <TextField
        id="work-experence-input"
        multiline
        rows={4}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        fullWidth
        variant="filled"
      /> */}
    </ContentItemContainer>
  )
}

export default WorkExperience