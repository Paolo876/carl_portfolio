import React, { useState } from 'react'
import "./UpdateAboutInfo.scss";
import { useFirestore } from '../../../hooks/useFirestore';
export default function UpdateAboutInfo({document}) {

  const { updateDocument, response } = useFirestore('user');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ success, setSuccess ] = useState(null);
  // input states
  const [ name, setName ] = useState(document.information.name);
  const [ email, setEmail ] = useState(document.information.email);
  const [ address, setAddress ] = useState(document.information.address);
  const [ phone, setPhone ] = useState(document.information.phone);
  const [ professionalSummary, setProfessionalSummary ] = useState(document.professionalSummary);
  const [ careerObjective, setCareerObjective ] = useState(document.careerObjective);

  const preventFormSubmit = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if( name.trim().length !== 0 || email.trim().length !== 0 || address.trim().length !== 0 || phone.trim().length !== 0 ||
          professionalSummary.trim().length !== 0 || careerObjective.trim().length !== 0) 
    {
      setIsLoading(true)
      const information = {name, email, address, phone};
      await updateDocument({information, professionalSummary, careerObjective}, 'about', null)
      setIsLoading(false)
      setSuccess(true)
    }
  }

  return (
      <form className='update-about-info' onSubmit={handleSubmit} onKeyDown={preventFormSubmit} onClick={() => setSuccess(null)}>
        <h5>UPDATE RESUME INFORMATION</h5>
        <div className="information">
          <label>
            <span>Name:</span>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
          </label>
          <label>
            <span>Email:</span>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
          </label>
          <label>
            <span>Address:</span>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} required/>
          </label>
          <label>
            <span>Phone:</span>
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required/>
          </label>
        </div>
        <label>
          <span>PROFESSIONAL SUMMARY</span>
          <textarea value={professionalSummary} onChange={e => setProfessionalSummary(e.target.value)} required/>
        </label>
        <label>
          <span>CAREER OBJECTIVE</span>
          <textarea value={careerObjective} onChange={e => setCareerObjective(e.target.value)} required/>
        </label>
        {success && <p className='success'>Update Successful!</p>}
        {response.error && <p className='error'>{response.error}</p>}
        <div className="save-btn">
          {!isLoading && <button type="submit">SUBMIT</button>}
          {isLoading && <button type="submit" disabled>SAVING CHANGES...</button>}
        </div>
        
      </form>
  )
}
