import React from 'react'
import { TextField, Box, Button } from '@mui/material'
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

const AddSkillInput = () => {
  return (
    <Box>
      <Box>
        <TextField

        />
      </Box>
      <Box>
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
      </Box>
    </Box>
  )
}

export default AddSkillInput