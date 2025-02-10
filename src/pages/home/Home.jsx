import React from 'react';
import { Box } from '@mui/material';

import ProjectsList from './ProjectsList';
import Sidebar from './Sidebar';


export default function Home() {
  return (
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: "'projects nav' 'footer footer'",
          gridTemplateColumns: "4fr 340px",
          gap: 5,
          mx: {lg: 6, xl: 8},
        }}
      >
        <Sidebar/>
        <ProjectsList/>
      </Box>
  )
}
