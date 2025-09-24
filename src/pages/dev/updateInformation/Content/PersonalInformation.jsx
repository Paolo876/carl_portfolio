import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField, Alert, Box } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'

const PersonalInformation = ({ id, title }) => {
  const { about, updateInfo } = useAboutRedux();
  const { updateDocument } = useFirestore("user");
  const [ nameInput, setNameInput ] = useState(about.information.name)
  const [ addressInput, setAddressInput ] = useState(about.information.address)
  const [ phoneInput, setPhoneInput ] = useState(about.information.phone)
  const [ emailInput, setEmailInput ] = useState(about.information.email)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true)
    // try {
    //   // update document
    //   await updateDocument({...about, professionalSummary: inputValue}, 'about');
    //   // update redux
    //   updateInfo({professionalSummary: inputValue})
    // } catch(err){
    //   console.log(err)
    //   setError(err.message);
    //   setIsLoading(false)
    // } finally {
    //   setIsLoading(false)
    // }
  }

  console.log(about.information)
  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading} onClick={handleSubmit}>
      {error && <Alert severity='error' sx={{mb: 1}}>{error.message}</Alert>}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <TextField
          id="name-input"
          label="Name"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          variant="filled" 
        />
        <TextField
          id="address-input"
          label="Address"
          value={addressInput}
          onChange={e => setAddressInput(e.target.value)}
          variant="filled" 
        />
        <TextField
          id="phone-input"
          label="Phone"
          value={phoneInput}
          onChange={e => setPhoneInput(e.target.value)}
          variant="filled" 
        />
        <TextField
          id="email-input"
          label="E-mail"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
          variant="filled" 
        />
      </Box>

      {/* <TextField
        id="professional-summary-input"
        multiline
        rows={4}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        fullWidth
        variant="filled"
      /> */}
    </ContentItemContainer>  )
}

export default PersonalInformation