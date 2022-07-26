import React, { useState } from 'react';
import Modal from '../../../../../components/ui/Modal';
import LoadingSpinner from '../../../../../components/ui/LoadingSpinner';
import "./DeleteProject.scss"
//firebase
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../../../../firebase/config';
import { useFirestore } from '../../../../../hooks/useFirestore';

export default function DeleteProject({ selectedProject, selectedProjectId, setSelectedProjectId, projects }) {
  const [ showModal, setShowModal ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const { updateDocument } = useFirestore('user');

  const handleDelete = async () => {
    setIsLoading(true);
    setError(null);
    try{
      // delete project images
      for(const item of selectedProject.images){
        const imageRef = ref(storage, `project-images/${item.filename}`)
        await deleteObject(imageRef);  
      }
      //update document
      const updatedProjects = projects.images.filter(item => item.id !== selectedProjectId);
      const updatedDocument =  {...projects, images: updatedProjects }
      await updateDocument(updatedDocument, 'projects');
      setSelectedProjectId(null)
    } catch(err){
      setError(err.message);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='delete-project'>
    <h3>DELETE</h3>
      {error && <p className='error'>{error}</p>}
      <button onClick={() => setShowModal(true)}>DELETE PROJECT</button>
      {showModal && <Modal>
        {!isLoading && <div className="modal-prompt">
          <div className="header">Are you sure you want to delete this project?</div>
          <div className="info">Title: {selectedProject.header}</div>
          <div className="info">Images: {selectedProject.images.length}</div>
          <div className="actions">
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={() => setShowModal(false)}>CANCEL</button>
          </div>
        </div>}
        {isLoading && <div className='modal-prompt'>
          <LoadingSpinner/>
          <div className="info">DELETING PROJECT...</div>
        </div>}
      </Modal>}
    </div>
  )
}
