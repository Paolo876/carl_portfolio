import React, { useState } from 'react';
import ProjectImages from './ProjectImages';
import ProjectsList from "./ProjectsList"
import { useDocument } from '../../../../hooks/useDocuments';

import "./ManageProjects.scss";
import ProjectActions from './ProjectActions/ProjectActions';

export default function ManageProjects() {
  const { document } = useDocument("user", "projects");

  const [ selectedProjectId, setSelectedProjectId ] = useState(null);
  return (
    <div className='manage-projects'>
      {document &&
        <>
          <ProjectsList selectedProjectId={selectedProjectId} setSelectedProjectId={setSelectedProjectId}/>
          {selectedProjectId && 
            <>
              <ProjectImages  selectedProjectId={selectedProjectId} projects={document}/>
              <ProjectActions selectedProjectId={selectedProjectId} projects={document} setSelectedProjectId={setSelectedProjectId}/>
            </>
          }
        </>
      }
    </div>
  )
}
