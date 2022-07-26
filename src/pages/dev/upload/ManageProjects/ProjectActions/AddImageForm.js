import React, { useState, useEffect } from 'react'
import useUpload from '../../../../../hooks/useUpload';
import UploadImageForm from '../../UploadImageForm';
import ImagesList from '../../ImagesList';

import "./AddImageForm.scss"
export default function AddImageForm({ selectedProject, handleDocumentUpdate, setIsLoading, setModalMessage }) {
  const [ images, setImages ] = useState([]);
  const [imageData, setImageData ] = useState([]);
  const [ error, setError ] = useState(null);

  const { uploadMany, isLoading, error: uploadError } = useUpload('user');

  useEffect(() => {
    setImages([]);
    setImageData([]);
    setError(null);
  }, [ selectedProject ]);

  const handleFormSubmit = async () => {
    setError(null);
    setModalMessage("UPLOADING IMAGES, PLEASE WAIT...")
    setIsLoading(true) 
    try {
      //upload images
      const uploaded = await uploadMany('project-images', imageData);
      //update project object
      const project = { ...selectedProject };
      project.images= [...project.images, ...uploaded];
      handleDocumentUpdate(project)
    } catch(err) {
      setError(err.message);
      setIsLoading(false);
    } finally {
      setModalMessage("SAVING CHANGES...")
      setImageData([]);
      setImages([]);
    }
  }
  return (
    <div className='add-image-form'>
        <h3>ADD IMAGE/S TO PROJECT</h3>
        <div className="image-preview">
            <ImagesList images={images} imageData={imageData}  setImageData={setImageData} setImages={setImages} />
        </div>
        <UploadImageForm setImageData={setImageData} setImages={setImages} imageData={imageData}/>
        {error && <p>{error}, Please try again.</p>}
        {uploadError && <p>{uploadError}, Please try again.</p>}
        {!isLoading && imageData.length !== 0 && <button onClick={handleFormSubmit} className='submit'>UPLOAD IMAGES</button>}
        {isLoading && <button disabled className='submit'>UPLOADING...</button>}
    </div>
  )
}
