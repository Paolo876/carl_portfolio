import React from 'react';
import AddExperienceForm from './AddExperienceForm';
import NewResumeForm from './NewResumeForm';
import UpdateAboutInfo from './UpdateAboutInfo';
import { useDocument } from "../../../hooks/useDocuments"

import "./UpdateResume.scss";
import AddSkills from './AddSkills';

export default function UpdateResume() {
  const { document } = useDocument('user', 'about');

  return (
    <div className='update-resume-page'>
      <div className="container">
        <div className='item'>
            <AddExperienceForm/>
            <NewResumeForm/>
        </div>
        <div className='item'>
          {document && <UpdateAboutInfo document={document}/>}
          <AddSkills/>
        </div>

      </div>
    </div>
  )
}
