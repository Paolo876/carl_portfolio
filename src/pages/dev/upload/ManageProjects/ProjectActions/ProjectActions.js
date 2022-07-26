import React, { useState } from 'react';
import LoadingSpinner from '../../../../../components/ui/LoadingSpinner';
import EditAlbumInfo from './EditAlbumInfo';
import AddImageForm from './AddImageForm';
import { useFirestore } from '../../../../../hooks/useFirestore';
import Modal from "../../../../../components/ui/Modal"
import "./ProjectActions.scss";
import DeleteProject from './DeleteProject';

export default function ProjectActions({ selectedProjectId, projects, setSelectedProjectId }) {
  const selectedProject = projects.images.find(item => item.id === selectedProjectId);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ modalMessage, setModalMessage ] = useState(null);
  const { updateDocument } = useFirestore("user");

  const handleDocumentUpdate = async (updatedProject) => {
    setIsLoading(true);
    const updatedProjectDocument = projects.images.map(item => {
      if(item.id === selectedProjectId) return updatedProject;
      return item;  
    })
    const updatedDocument = {...projects, images: updatedProjectDocument };
    await updateDocument(updatedDocument, 'projects');
    setIsLoading(false);
  }

  if(isLoading) return (
    <Modal>
    <div className='modal-prompt'>
      <LoadingSpinner/>
      <p className='header'>{modalMessage ? modalMessage : 'SAVING CHANGES, PLEASE WAIT...'}</p>
    </div>
      
    </Modal>
  );
  return (
    <div className='project-actions'>
        <h3>EDIT PROJECT</h3>
        <EditAlbumInfo selectedProject={selectedProject} handleDocumentUpdate={handleDocumentUpdate} isLoading={isLoading} />
        <AddImageForm selectedProject={selectedProject} handleDocumentUpdate={handleDocumentUpdate} setIsLoading={setIsLoading} setModalMessage={setModalMessage}/>
        <DeleteProject selectedProject={selectedProject} selectedProjectId={selectedProjectId} projects={projects} setSelectedProjectId={setSelectedProjectId}/>
    </div>
  )
}
