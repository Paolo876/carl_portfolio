import React, { useState } from 'react'
import "./AddSkills.scss"
import CloseIcon from '@mui/icons-material/Close';
import useUpload from '../../../hooks/useUpload';

export default function AddSkills() {
  const { isLoading, error, uploadDocuments } = useUpload('user')
  // input states
  const [ image, setImage ] = useState(null);
  const [imageData, setImageData ] = useState(null);
  const [ name, setName ] = useState('');

  const handleRemoveImage = () => {
    setImage(null);
    setImageData(null);
  }
  const onChangeImage = e => {
    if (e.target.files.length !== 0) {
      setImageData(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadDocuments("about", "softwareSkills", "about", [{file: imageData, data: {name}}])
    setImage(null)
    setImageData(null)
    setName("")
  }
  return (
    <form className='add-skills-form' onSubmit={handleSubmit}>
        <h5>ADD SOFTWARE SKILL</h5>
        <div className="container">
          <div className="image-input-container">
            <h4>SKILL ICON <span>(50px x 50px or less)</span></h4>
            <div className="image-preview">
              {image && <img src={image} alt="preview"/>}
              {imageData && <button type='button' onClick={handleRemoveImage}><CloseIcon/></button>}
            </div>
            <label className='file-input'>
                <span>Choose File</span>
                  <input
                      type="file" 
                      accept="image/*"    
                      onChange={onChangeImage}
                      onClick={e => e.target.value = null}
                      required
                  />
                  <p>{imageData ? imageData.name : "No File Chosen."}</p>
              </label>
          </div>

          <label>
            <h4>NAME:</h4>
            <input 
              type="text"
              value={name}
              onChange={ e => setName(e.target.value)}
              required
            />
          </label>
          <div className='submit-btn-container'>
            {error && <p className='error'>Error: {error}</p>}
            {!isLoading && imageData && <button className='submit-btn'>SUBMIT</button>}
            {isLoading  && imageData && <button disabled className='submit-btn'>UPLOADING ITEMS...</button>}        
          </div>
        </div>
    </form>
  )
}
