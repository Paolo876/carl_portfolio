import React, { useState, useEffect } from 'react';
//media
import "./NewProjectForm.scss";
import CloseIcon from '@mui/icons-material/Close';

export default function NewProjectForm({ projectInformation, setProjectInformation, projects }) {

  //input states  
  const [ header, setHeader ] = useState('');
  const [ style, setStyle ] = useState('');
  const [ softwareInput, setSoftwareInput ] = useState('');
  const [ softwares, setSoftwares ] = useState([]);
  const [ error, setError ] = useState(null);
    
  useEffect(() => {
    if(error) setError(null);
  }, [projectInformation]);

  const handleItemKeyDown = (e) => {
    if(e.key === 'Enter'){
      setSoftwares(prevState => [...prevState, e.target.value])
      setSoftwareInput('');
    }
  }
    
  const handleBlur = () => {
    if(softwareInput.trim().length !== 0){
      setSoftwares(prevState => [...prevState, softwareInput])
      setSoftwareInput('')
    }
  }
    
  const removeItemHandler = (index) => {
    setSoftwares(prevState => {
      const updatedList = [...prevState];
      updatedList.splice(index, 1);
      return updatedList;
    })
  }

  const handleProjectInfoSubmit = async (e) => {
    e.preventDefault();
    if(header.trim().length === 0){
      setError("Error: Make sure no input is empty.");
      return;
    }
    if(projects.images.find(item => item.header === header)) {
      setError("Error: Project Title already exist, please use a different name.");
      return;
    }
    setProjectInformation({ header, style, softwares })
    setHeader("");
    setStyle("");
    setSoftwares([]);
    setError(null)
  }

  const preventFormSubmit = (e) => {
    if(e.key === 'Enter') e.preventDefault();
  }

  return (
    <div className={`new-project-form-page ${projectInformation ? "finished" : ""}`}>
      {projectInformation && 
        <div className="ready">
          <h5>INFORMATION SAVED!</h5>
          <p><span>Title:</span> {projectInformation.header}</p>
          <p><span>Style:</span> {projectInformation.style}</p>
          <ul>
            <span>Softwares:</span>
            {projectInformation.softwares.map(item => <li key={item}>{item} </li>)}
          </ul>
          <button onClick={() => setProjectInformation(null)}>CLEAR/START OVER</button>
        </div>
      }
      <form onSubmit={handleProjectInfoSubmit} onKeyDown={preventFormSubmit}>
          
          <h5>PROJECT INFORMATION</h5>
          <label className="header-input">
              <span>TITLE:</span>
              <input 
                  type="text" 
                  placeholder='GAMING ROOM v1'
                  onChange={(e) => setHeader(e.target.value)}  
                  value={header}
                  required
                  disabled={projectInformation}
              />
          </label>
          <label className="header-input">
              <span>STYLE:</span>
              <input 
                  type="text" 
                  placeholder='CONTEMPORARY'
                  onChange={e => setStyle(e.target.value)}  
                  value={style}
                  required
                  disabled={projectInformation}

                  />
          </label>
          <label className="header-input">
          <span>SOFTWARES USED:</span>
              <input 
                  type="text" 
                  placeholder='Adobe Photoshop'
                  onKeyDown={e => handleItemKeyDown(e)}
                  onChange={e => setSoftwareInput(e.target.value)}
                  onBlur={handleBlur}
                  value={softwareInput}
                  disabled={projectInformation}

              />
              <ul>
                  {softwares.map((item, index) => <li key={item} onClick={() => removeItemHandler(index)}>{item}<CloseIcon/></li>)}
              </ul>
          </label>
          <p className="error">{error}</p>
          {!projectInformation && <button type="submit" className='save-btn'>SAVE CHANGES</button>}
      </form>
    </div>
  )
}
