import React, { useState } from 'react'
import ImagesList from '../ImagesList';
import UploadImageForm from '../UploadImageForm'
import NewProjectForm from './NewProjectForm';
import useUpload from '../../../../hooks/useUpload';
import { useFirestore } from '../../../../hooks/useFirestore';
import LoadingSpinner from '../../../../components/ui/LoadingSpinner';
import Modal from "../../../../components/ui/Modal";
import { useDocument } from '../../../../hooks/useDocuments';
import "./NewProjectAlbum.scss"

export default function NewProjectAlbum() {
  const { uploadMany } = useUpload('user');
  const { updateArrayDocument } = useFirestore('user');
  const { document } = useDocument("user", "projects");

  const [ projectInformation, setProjectInformation ] = useState(null);
  const [ images, setImages ] = useState([]);
  const [ imageData, setImageData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  const [ error, setError ] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const uploaded = await uploadMany('project-images', imageData);
      const id = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "").slice(8);
      const updateDb = {...projectInformation, images: uploaded, id};
      await updateArrayDocument('projects', 'images', updateDb);
      setSuccess(true)
      setProjectInformation(null);
      setImageData([]);
      setImages([]);
    } catch(err) {
      setError(err.message)
      console.log(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  if(isLoading || !document) {
    return (
      <Modal>
        <div className={`${document ? 'modal-prompt' : ''}`}>
          <LoadingSpinner/>
          {document && <p className='info'>UPLOADING IMAGES, PLEASE WAIT...</p>}
        </div>
      </Modal>
    )
  }
  return (
    <div className='new-project-album'>
    {!success && 
      <>
        {!isLoading && <>
          <NewProjectForm projectInformation={projectInformation} setProjectInformation={setProjectInformation} projects={document}/>
          <ImagesList images={images} setImages={setImages} setImageData={setImageData} imageData={imageData}/>
          <UploadImageForm setImages={setImages} setImageData={setImageData} imageData={imageData}/>
          {error && <p className='error'>ERR:{error.message} Please try again.</p>}

        </>}
          
        {projectInformation && imageData.length !== 0 && 
          <div className='submit-btn'>
            <button onClick={handleSubmit}>UPLOAD</button>
          </div>
        }
      </>
    }
    {success && 
      <div className='success-prompt'>
        <h5>UPLOAD SUCCESSFUL!</h5>
        <button onClick={() => setSuccess(false)}>CLICK HERE TO UPLOAD ANOTHER PROJECT.</button>
      </div>
    }
    </div>
  )
}
