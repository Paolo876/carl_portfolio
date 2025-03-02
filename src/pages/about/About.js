import React from 'react';
import { useDocument } from '../../hooks/useDocuments';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import AboutDescription from './AboutDescription';

// media
import "./About.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import caloyFace from "../../assets/caloyface.webp";
import MobileSidebar from '../../components/layout/MobileSidebar';

export default function About() {
  const { document, isLoading, error } = useDocument('user', 'about');

  if(isLoading) return <div className="about-description"><LoadingSpinner/></div>;
  if(error) return <div className="about-description"><p className="error">{error}</p></div>;
  return (
    <div className='about-page'>
      {document &&
        <div className="container">
          <div className="profile-container">
            <div className="profile-img">
              <img src={caloyFace} alt="caloy-face"/>
            </div>
            <p className="name">{document.information.name}</p>
            <p className='location'>{document.information.address}<LocationOnIcon/></p>
            <p className="sub-info"><span>Email: </span>{document.information.email}</p>
            <p className="sub-info"><span>Phone: </span>{document.information.phone}</p>
            <h3>SOFTWARE SKILLS</h3>
            <ul>
              {document.softwareSkills.map(item => <li key={item.name}><img src={item.src} alt="skill-icon"/> {item.name}</li>)}
            </ul>
          </div>
          <AboutDescription document={document}/>
          <MobileSidebar/>
        </div>
      }
      <footer>
            <p>© 2022 Carl Adriant Dimabuyu, All Rights Reserved.</p>
      </footer>
    </div>
  )
}
