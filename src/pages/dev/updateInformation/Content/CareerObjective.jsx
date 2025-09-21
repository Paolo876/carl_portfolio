import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField, Alert } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'

const CareerObjective = ({ id, title }) => {
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


  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || inputValue === about.careerObjective} onClick={handleSubmit}>
      {error && <Alert severity='error' sx={{mb: 1}}>{error.message}</Alert>}
      <TextField
        id="career-objective-input"
        multiline
        rows={4}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        fullWidth
        variant="filled"
      />
    </ContentItemContainer>
  )
}

export default CareerObjective