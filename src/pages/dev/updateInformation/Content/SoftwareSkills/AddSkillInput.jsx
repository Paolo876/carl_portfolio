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

const inputsContainer = {
  display: "flex",
  flexDirection : "row",
  width: "100%",
  gap: 1.5,
  backgroundColor: "rgba(255,255,255,.15)",
  alignItems: "center",
  py: 2,
  px: 2,
  borderRadius: 4,
}

const logoContainerProps = { 
  height: {sm: 50 }, 
  width : "auto",
  display: {xs: "none", sm:"flex" }, 
  justifyContent: "center",
}


const AddSkillInput = ({ setIsInputVisible }) => {
  const [ nameInput, setNameInput ] = useState("");
  const [ image, setImage ] = useState(null)
  const [ imageData, setImageData ] = useState(null);


  const handleChange = (files) => {
    setImageData(files)
    setImage(null)
    const reader = new FileReader();
    reader.addEventListener("load", () => setImage(reader.result));
    reader.readAsDataURL(files[0]);
  }


  return (
    <Box sx={containerProps}>
      <Box sx={inputsContainer}>
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
              onChange={(event) => handleChange(event.target.files)}
              required
            />
          </Button>
        </Box>}
        {image && <Box sx={logoContainerProps}>
          <Image 
            src={image}
            alt="logo-preview"
            fit="scale-down" 
            height="auto" 
            width="auto" 
          />
        </Box>}
        <Box sx={{flex: 1}}>
          <TextField
            size='small'
            fullWidth
            label="Skill Name"
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
          />
        </Box>
      </Box>
      <Box sx={{display: "flex", gap: 2, width: "100%", justifyContent: "right"}}>
        <Button variant='outlined' color='success' disabled={!image || nameInput.trim().length === 0}>Save Changes</Button>
        <Button variant='contained' color='warning' onClick={() => setIsInputVisible(false)}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default AddSkillInput