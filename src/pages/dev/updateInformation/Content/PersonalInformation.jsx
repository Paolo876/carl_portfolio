import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField, Alert, Box } from '@mui/material'
import { useFirestore } from '../../../../hooks/useFirestore'
import objectDeepCompare from '../../../../utils/objectDeepCompare'


const PersonalInformation = ({ id, title }) => {
  const { about, updateInfo } = useAboutRedux();
  const { updateDocument } = useFirestore("user");
  const [ name, setName ] = useState(about.information.name)
  const [ address, setAddress ] = useState(about.information.address)
  const [ phone, setPhone ] = useState(about.information.phone)
  const [ email, setEmail ] = useState(about.information.email)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      // update document
      await updateDocument({...about, information: { name, address, phone, email }}, 'about');
      // update redux
      updateInfo({information : { name, address, phone, email }})
    } catch(err){
      console.log(err)
      setError(err.message);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ContentItemContainer id={id} title={title} isDisabled={isLoading || objectDeepCompare(about.information, { name, address, phone, email})} onClick={handleSubmit}>
      {error && <Alert severity='error' sx={{mb: 1}}>{error.message}</Alert>}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3
        }}
      >
        <TextField
          id="name-input"
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          variant="filled" 
        />
        <TextField
          id="address-input"
          label="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          variant="filled" 
        />
        <TextField
          id="phone-input"
          label="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          variant="filled" 
        />
        <TextField
          id="email-input"
          label="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
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