import { useState } from 'react'
import ContentItemContainer from './ContentItemContainer'
import useAboutRedux from '../../../../hooks/useAboutRedux'
import { TextField } from '@mui/material'


const CareerObjective = ({ id, title }) => {
  const { about: { careerObjective } } = useAboutRedux();

  console.log(careerObjective)
  return (
    <ContentItemContainer id={id} title={title}>
      <TextField
        id="outlined-multiline-static"
        // label="Multiline"
        multiline
        rows={4}
        value={careerObjective}
        fullWidth
        variant="filled"
      />
    </ContentItemContainer>
  )
}

export default CareerObjective