import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./AddExperienceForm.scss"
import { useFirestore } from '../../../hooks/useFirestore';

export default function AddExperienceForm() {
  const { updateArrayDocument, response } = useFirestore('user');

  const [ isLoading, setIsLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  // input states
  const [ company, setCompany ] = useState('');
  const [ jobTitle, setJobTitle ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ duration, setDuration ] = useState('');
  const [ responsibilities, setResponsibilities ] = useState([]);
  const [ responsibilityInput, setResponsibilityInput ] = useState('');
  
  const handleBlur = () => {
    if(responsibilityInput === '') {
      return
    }
    else if(responsibilityInput.trim().length !== 0){
      setResponsibilities(prevState => [...prevState, responsibilityInput])
      setResponsibilityInput('')
    }
  }
  const removeItemHandler = (index) => {
    setResponsibilities(prevState => {
      const updatedList = [...prevState];
      updatedList.splice(index, 1);
      return updatedList;
    })
  }
  const handleItemKeyDown = (e) => {
    if(e.key === 'Enter'){
      setResponsibilities(prevState => [...prevState, e.target.value])
      setResponsibilityInput('');
    }
  }
  const preventFormSubmit = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    await updateArrayDocument('about', 'experience', {company, jobTitle, address, duration, responsibilities})
    if(!response.error){
      setSuccess(true)
      setCompany('')
      setJobTitle('')
      setAddress('')
      setDuration('')
      setResponsibilities([])
      setResponsibilityInput('')
    }
    setIsLoading(false)

  }
  return (
    <form className='add-experience-form' onSubmit={handleSubmit} onKeyDown={preventFormSubmit} onClick={() => setSuccess(false)}>
        <h5>ADD A WORK EXPERIENCE</h5>
        <label>
          <span>COMPANY NAME:</span>
          <input 
              type="text"
              onChange={e => setCompany(e.target.value)}
              value={company}
              placeholder="ALEXO DESIGN CONSULTANCY"
              required
          />
        </label>
        <label>
          <span>JOB TITLE:</span>
          <input 
              type="text"
              onChange={e => setJobTitle(e.target.value)}
              value={jobTitle}
              placeholder="CAD Draftsman"
              required
          />
        </label>
        <label>
          <span>ADDRESS:</span>
          <input 
              type="text"
              onChange={e => setAddress(e.target.value)}
              value={address}
              placeholder="Villa Gloria Angeles City, Philippines"
              required
          />
        </label>
        <label>
        <span>DURATION:</span>
        <input 
            type="text"
            onChange={e => setDuration(e.target.value)}
            value={duration}
            placeholder="September 2015 – November 2015 (Part-time)"
            required
        />
        </label>
        <label>
        <span>RESPONSIBILITIES:</span>
        <input 
            type="text" 
            placeholder='3D modelled a modern Nipa hut (Vacation house)'
            onKeyDown={e => handleItemKeyDown(e)}
            onChange={e => setResponsibilityInput(e.target.value)}
            onBlur={handleBlur}
            value={responsibilityInput}
        />
        <ul>
            {responsibilities.map((item, index) => <li key={item} onClick={() => removeItemHandler(index)}>{item}<CloseIcon/></li>)}
        </ul>
        </label>
          {success && <p className='success'>Update Successful!</p>}
          {response.error && <p className='error'>{response.error}</p>}

          {!isLoading && <button type="submit" className='save-btn'>SUBMIT</button>}
          {isLoading && <button type="submit" className='save-btn' disabled>SAVING CHANGES...</button>}
    </form>
  )
}
