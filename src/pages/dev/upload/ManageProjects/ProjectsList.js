import React from 'react';
import { useDocument } from '../../../../hooks/useDocuments';

import "./ProjectsList.scss";

export default function ProjectsList({ selectedProjectId, setSelectedProjectId }) {
  const { document } = useDocument("user", "projects");
  
  return (
    <ul className='projects-list'>
      <h3>SELECT PROJECT:</h3>
      {document && document.images.map((item, index) => (
        <li key={index}>
            <button 
              className={`${selectedProjectId && selectedProjectId === item.id ? 'active' : ''}`}
              type='button' 
              onClick={() => setSelectedProjectId(item.id)}
            >{item.header}</button>
        </li>))}
    </ul>
  )
}
