import React from 'react';
import "./AboutDescription.scss";
import DownloadIcon from '@mui/icons-material/Download';

export default function AboutDescription({document}) {
    return (
        <div className='about-description'>
            <div className="item">
                <h4>PROFESSIONAL SUMMARY</h4>
                <p>{document.professionalSummary}</p>
            </div>
            <div className="item">
                <h4>CAREER OBJECTIVE</h4>
                <p>{document.careerObjective}</p>
            </div>
            <div className="item-subcontainer">
                <div className="sub-item">
                    <h4>EXPERIENCE</h4>
                    <ul className="experience-list">
                        {document.experience.map(item => (
                            <li key={item.company} className='sub-item-item'>
                                <h5>{item.company}</h5>
                                <p className="position">{item.jobTitle}</p>
                                <p className="location">{item.address}</p>
                                <p className="duration">{item.duration}</p>
                                <ul className="responsibilities-list">
                                    {item.responsibilities.map(_item => <li key={_item}>{_item}</li>)}
                                </ul>       
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sub-item">
                    <h4>EDUCATION</h4>
                    <ul>
                        <li className='sub-item-item'>
                            <h5>BACHELOR OF SCIENCE IN ARCHITECTURE</h5>
                            <p className="position">Holy Angel University (Tertiary Education)</p>
                            <p className="location">Angeles City, Philippines</p>
                            <p className="duration">June 2012 – March 2017</p>
                        </li>
                        <li className='sub-item-item'>
                            <h5>HIGH SCHOOL</h5>
                            <p className="position">Royal International School (Secondary Education)</p>
                            <p className="location">Angeles City, Philippines</p>
                            <p className="duration">June 2009 – March 2012</p>
                        </li>
                        <li className='sub-item-item'>
                            <h5>ELEMENTARY</h5>
                            <p className="position">Diamond Educational Centre (Primary Education)</p>
                            <p className="location">Angeles City, Philippines</p>
                            <p className="duration">June 2002 – March 2008</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="item">
                <h4>DOWNLOAD MY CV/RESUMÉ </h4>
                <a className='download-btn' href={document.resume.src} target="_blank"><DownloadIcon/><p>pdf</p></a>
            </div> 
        </div>
    )
}
