import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'

const CareerObjective = ({ id, title }) => {
  const { about: { careerObjective } } = useAboutRedux();
  const { updateDocument } = useFirestore("user");
  const [ inputValue, setInputValue ] = useState(careerObjective)
  const [ isLoading, setIsLoading ] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)

    // update document
    // update redux
  }


  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || inputValue === careerObjective} onClick={handleSubmit}>
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