import { useState } from 'react'
import { ListItem, Box, Button, Typography, TextField } from '@mui/material'
import Image from 'mui-image'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';


const listItemProps = {
  display: "flex",
  justifyContent: "space-between",
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


const SkillItem = ({ item, handleEdit, handleDelete, isDisabled }) => {
  const [ isEditable, setIsEditable ] = useState(false)
  const [ input, setInput ] = useState(item.name)

  const handleSaveClick = () => {
    handleEdit(item.src, input)
    setIsEditable(false)
  }


  return (
    <ListItem key={item.name} sx={{...listItemProps, backgroundColor: isEditable ? "rgba(255,255,255,.2)": "rgba(255,255,255,.1)"}}>
      <Box sx={listItemContentProps}>
        <Box sx={{height: 30, width: 30, display: "flex", mr: 2}}>
          <Image src={item.src} fit="scale-down" height="auto" width="auto" duration={0}/>
        </Box>
        {!isEditable && <Typography variant='h6' sx={textProps}>{item.name}</Typography>}
        {isEditable && <TextField 
          fullWidth 
          size='small'
          value={input}
          onChange={e => setInput(e.target.value)}
        />}
      </Box>
      {!isEditable && <Box sx={{display: "flex", gap: 1}}>
        <Button variant='outlined' color='info' onClick={() => setIsEditable(true)} disabled={isDisabled}><EditIcon/></Button>
        <Button variant='contained' color='secondary' onClick={() => handleDelete(item.src)} disabled={isDisabled}><CloseIcon/></Button>
      </Box>}
      {isEditable && <Box sx={{display: "flex", gap: 1, ml: 2}}>
        <Button variant='outlined' color='success' onClick={handleSaveClick} disabled={isDisabled}>Save Changes</Button>
        <Button variant='contained' color='warning' onClick={() => setIsEditable(false)} disabled={isDisabled}>Cancel</Button>
      </Box>}
    </ListItem>
  )
}

export default SkillItem