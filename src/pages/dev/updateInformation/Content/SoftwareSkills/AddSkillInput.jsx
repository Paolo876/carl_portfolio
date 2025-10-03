import { useState } from 'react'
import { TextField, Box, Button, Typography } from '@mui/material'
import Image from 'mui-image';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const containerProps = {
  display: "flex",
  flexDirection : "column",
  gap: 2
}


const AddSkillInput = ({ setIsInputVisible }) => {
  const [ nameInput, setNameInput ] = useState("");
  const [ image, setImage ] = useState(null)
  const [ imageData, setImageData ] = useState(null);


  const handleChange = (files) => {
    setImageData(files)
    
    setImage([])
    //image preview
    files.forEach(item => {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(prevState => [...prevState, reader.result]));
      reader.readAsDataURL(item);
    })
  }
  return (
    <Box sx={containerProps}>
      <Box>
        <TextField
          size='small'
          fullWidth
          label="Skill Name"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
      </Box>
      {!image && <Box>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<ImageIcon />}
        >
          Upload Logo
          <VisuallyHiddenInput
            type="file" 
            accept="image/*"
            onChange={(event) => console.log(event.target.files)}
            required
          />
        </Button>
      </Box>}
      {image && <Image 
        
      />}
      <Box sx={{display: "flex", gap: 2, width: "100%", justifyContent: "right"}}>
        <Button variant='outlined' color='success'>Save Changes</Button>
        <Button variant='contained' color='warning' onClick={() => setIsInputVisible(false)}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default AddSkillInput