import React, { useState } from 'react'
import ImageItem from '../ImageItem';
import Modal from '../../../../components/ui/Modal';
import LoadingSpinner from '../../../../components/ui/LoadingSpinner';

//firebase
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../../../firebase/config';
import { useFirestore } from '../../../../hooks/useFirestore';
//media
import CloseIcon from '@mui/icons-material/Close';
import "./ProjectImages.scss";

export default function ProjectImages({ selectedProjectId, projects }) {
  const selectedProject = projects.images.find(item => item.id === selectedProjectId);
  const { updateDocument } = useFirestore('user');

  const [ selectedImage, setSelectedImage ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const deleteImage = async () => {
    setIsLoading(true);
    setError(null)
    try {
      const imageRef = ref(storage, `project-images/${selectedImage.filename}`)
      await deleteObject(imageRef);  
    } catch(err){
        setError(err.message)
    }finally {
      const updatedImages = selectedProject.images.filter(item => item.src !== selectedImage.src)
      const updatedProject = {...selectedProject, images: updatedImages};
      const updatedProjectDocument = projects.images.map(item => {
        if(item.id === selectedProjectId) return updatedProject;
        return item;  
      })
      const updatedDocument = {...projects, images: updatedProjectDocument };
      await updateDocument(updatedDocument, 'projects');
      setSelectedImage(null);
      setIsLoading(false);
    }
  }

  return (
    <ul className='project-images'>
      {selectedProject && selectedProject.images.map((item) => (
        <li key={item.filename}><button onClick={() => setSelectedImage(item)}><CloseIcon/></button><ImageItem src={item.src}/></li>
      ))}
      {selectedImage && 
        <Modal>
          <div className="modal-prompt">
            <ImageItem src={selectedImage.src}/>
            <p className='header'>Delete {selectedImage.filename}?</p>
            {error && <p className='info'>ERROR: {error}</p>}
            <div className="actions">
              {isLoading && 
                <>
                  <LoadingSpinner isInverted={true} />
                  <button disabled>DELETING IMAGE...</button>
                </>
              }
              {!isLoading && 
                <>
                  <button onClick={deleteImage}>DELETE</button>
                  <button onClick={() => setSelectedImage(null)}>Cancel</button>
                </>
              }
            </div>
          </div>
        </Modal>
      }
    </ul>
  )
}
