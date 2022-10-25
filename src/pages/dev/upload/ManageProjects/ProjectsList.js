import React, { useState } from 'react';
import Modal from '../../../../components/ui/Modal';
import "./ProjectsList.scss";
import ReorderProjects from './ReorderProjects';

export default function ProjectsList({ selectedProjectId, setSelectedProjectId, document }) {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className='projects-list'>
      <ul>
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
      <button className='reorder-btn' onClick={() => setShowModal(true)}>REORDER PROJECTS</button>
      {showModal && <Modal><ReorderProjects setShowModal={setShowModal} document={document}/></Modal>}
    </div>

  )
}
