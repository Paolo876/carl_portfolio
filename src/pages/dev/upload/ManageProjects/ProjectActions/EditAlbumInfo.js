import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../../../../components/ui/LoadingSpinner';
import CloseIcon from '@mui/icons-material/Close';
import "./EditAlbumInfo.scss"

export default function EditAlbumInfo({ selectedProject, handleDocumentUpdate, isLoading }) {

  useEffect(() => {
    if(selectedProject){
      setHeader(selectedProject.header);
      setStyle(selectedProject.style);
      setSoftwares(selectedProject.softwares);
      setSoftwareInput('');
    }

  }, [ selectedProject ]);

  const [ header, setHeader ] = useState('')
  const [ style, setStyle ] = useState('')
  const [ softwares, setSoftwares ] = useState([])
  const [ softwareInput, setSoftwareInput ] = useState('')

  //form events
  const handleItemKeyDown = (e) => {
    if(e.key === 'Enter'){
      setSoftwares(prevState => [...prevState, e.target.value])
      setSoftwareInput('');
    }
  }
  const removeItemHandler = (index) => {
    setSoftwares(prevState => {
      const updatedList = [...prevState];
      updatedList.splice(index, 1);
      return updatedList;
    })
  }
  const preventFormSubmit = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
    }
  }

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProject = {...selectedProject, header, style, softwares};
    handleDocumentUpdate(updatedProject);
  }
  return (
    <form className='edit-album-info' onSubmit={handleSubmit} onKeyDown={preventFormSubmit} >
        <h4>EDIT PROJECT INFO</h4>
        <label>
            <span>TITLE:</span>
            <input type="text" value={header} onChange={e => setHeader(e.target.value)} disabled={isLoading}/>
        </label>
        <label>
            <span>STYLE:</span>
            <input type="text" value={style} onChange={e => setStyle(e.target.value)} disabled={isLoading}/>
        </label>
        <label>
            <span>ADD SOFTWARES:</span>
            <input type="text" value={softwareInput} onChange={e => setSoftwareInput(e.target.value)} onKeyDown={e => handleItemKeyDown(e)} disabled={isLoading}/>
        </label>
        <ul>
            {softwares && softwares.map((item, index) => <li key={index}><p>{item}</p><button type='button'  onClick={() => removeItemHandler(index)}><CloseIcon/></button></li>)}
        </ul>
        {!isLoading && <button type="submit" className='submit-btn'>SAVE CHANGES</button>}
        {isLoading && <button type="submit" disabled>SAVING CHANGES...</button>}
        {isLoading && <LoadingSpinner/>}
    </form>
  )
}
