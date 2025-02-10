import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import ProjectImage from './ProjectImage'

import projImage1 from "../../assets/showcase/sc-1.webp"
import projImage2 from "../../assets/showcase/sc-2.webp"
import projImage3 from "../../assets/showcase/sc-3.webp"
import projImage4 from "../../assets/showcase/sc-4.webp"
import projImage5 from "../../assets/showcase/sc-5.webp"
import projImage6 from "../../assets/showcase/sc-6.webp"
import ProjectModal from './ProjectModal'



const projectImagesContainerProps = {
  pt: 5,
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
  gap: 1
}

// header, id, images[{filename, src, }], softwares, style
const ProjectImages = [
  {src: projImage1, filename: 1, title: "GAMING BEDROOM"},
  {src: projImage2, filename: 2, title: "GAMING BEDROOM"},
  {src: projImage3, filename: 3, title: "GAMING BEDROOM"},
  {src: projImage4, filename: 4, title: "GIRL BEDROOM"},
  {src: projImage5, filename: 5, title: "THIS IS A LONG TITLE TEST TEST TEST"},
  {src: projImage6, filename: 6, title: "GIRL BEDROOM"},
];

const DUMMYIMAGES = [
  {header: "Girl Bedroom", id: 1, images: [{src: projImage1, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
  {header: "Gaming Bedroom", id: 2, images: [{src: projImage2, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
  {header: "Dining and Handwash Room + Esquisse", id: 1, images: [{src: projImage1, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
  {header: "Bespoke + Furniture", id: 3, images: [{src: projImage3, filename: 1, title: "GAMING BEDROOM"}, {src: projImage2, filename: 1, title: "GAMING BEDROOM"}, {src: projImage6, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
  {header: "Her Master Bedroom", id: 4, images: [{src: projImage4, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
  {header: "Teen Bedroom", id: 5, images: [{src: projImage5, filename: 1, title: "GAMING BEDROOM"}, {src: projImage2, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
  {header: "Master Toilet + Esquisse", id: 6, images: [{src: projImage6, filename: 1, title: "GAMING BEDROOM"}, {src: projImage5, filename: 1, title: "GAMING BEDROOM"}, {src: projImage1, filename: 1, title: "GAMING BEDROOM"}, {src: projImage2, filename: 1, title: "GAMING BEDROOM"}, {src: projImage3, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
]

const ProjectsList = () => {
  const [ isModalVisible, setIsModalVisible ] = useState({ isVisible: false, id: null })

  return (
    <Box
      sx={{
        gridArea: "projects",
      }}
    >
      <Box sx={projectImagesContainerProps}>
        {DUMMYIMAGES.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
        {DUMMYIMAGES.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
        {DUMMYIMAGES.map(item => <ProjectImage key={item.id} id={item.id} title={item.header} images={item.images} softwares={item.softwares} style={item.style} setIsModalVisible={setIsModalVisible}/>)}
      </Box>
      {isModalVisible.isVisible && <ProjectModal 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible}
      />}
    </Box>
  )
}

export default ProjectsList