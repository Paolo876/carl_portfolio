import React, { useState } from 'react'
import "./NewResumeForm.scss"
import CloseIcon from '@mui/icons-material/Close';
import useUpload from '../../../hooks/useUpload';

export default function NewResumeForm() {
  const [ file, setFile ] = useState(null);
  const { isLoading, error, success, uploadOne } = useUpload('user');

  const onChange = e => {
    if (e.target.files.length !== 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(file){
      await uploadOne('about', 'resume', 'about', {file});
      setFile(null);
    }
  }
  return (
    <form className='new-resume-form' onSubmit={handleSubmit}>
        <h5>UPLOAD NEW RESUME FILE(pdf)</h5>
        <div className="file-input-container">
          <label className='file-input'>
            <span>Choose File</span>
              <input
                  type="file" 
                  accept="application/pdf"    
                  onChange={onChange}
                  onClick={e => e.target.value = null}
              />
              <p>{file ? file.name : "No File Chosen."}</p>
          </label>
          {file && <button type='button' onClick={() => setFile(null)}><CloseIcon/></button>}
        </div>
        <div className="submit-btn">
          {success && <p className="success">{success}</p>}
          {error && <p className='error'>ERROR: {error}</p>}
          {file && !isLoading && <button type="submit">SUBMIT</button>}
          {file && isLoading && <button type="submit" disabled>UPLOADING...</button>}
        </div>
    </form>
  )
}
