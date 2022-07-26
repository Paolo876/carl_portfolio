import React from 'react'
import "./Projects.scss";

// media
import psIcon from "../../assets/skills-icons/photoshop.svg";
import TdsIcon from "../../assets/skills-icons/3dsmax.svg";
import corIcon from "../../assets/skills-icons/corona.svg";
import cadIcon from "../../assets/skills-icons/autocad.svg";
import lumionIcon from "../../assets/skills-icons/lumion.svg";
import suIcon from "../../assets/skills-icons/sketchup.svg";
import vidIcon from "../../assets/skills-icons/video-edit.svg";
import officeIcon from "../../assets/skills-icons/office.svg";

import ProjectList from './ProjectList';
export default function Projects() {
  return (
    <div className='projects-page'>
      <div className="page-description">
        <h1>My <br/>Works</h1>
        <div className="skills">
          <p className="desc">Softwares and technologies I used throughout my projects:</p>
          <ul>
            <li><img src={psIcon} alt="skill-icon"/> Adobe Photoshop</li>
            <li><img src={TdsIcon} alt="skill-icon"/> 3ds Max (modelling)</li>
            <li><img src={corIcon} alt="skill-icon"/> Corona (rendering)</li>
            <li><img src={cadIcon} alt="skill-icon"/> AutoDesk AutoCAD</li>
            <li><img src={lumionIcon} alt="skill-icon"/> Lumion</li>
            <li><img src={suIcon} alt="skill-icon"/> SketchUp</li>
            <li><img src={officeIcon} alt="skill-icon"/> Microsoft Office</li>
            <li><img src={vidIcon} alt="skill-icon"/> Video Editing</li>
          </ul>
        </div>
      </div>
      
      <ProjectList/>
      <footer>
            <p>© 2022 Carl Adriant Dimabuyu, All Rights Reserved.</p>
      </footer>
    </div>
  )
}
