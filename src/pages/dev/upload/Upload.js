import React, { useState } from 'react';
import "./Upload.scss";
// import NewProjectForm from './NewProjectForm';
// import AddToExistingForm from './AddToExistingForm';
import NewProjectAlbum from './NewProjectAlbum/NewProjectAlbum';
import ManageProjects from './ManageProjects/ManageProjects';
export default function Upload() {
  const [ uploadSelected, setUploadSelected ] = useState(null);

  return (
    <div className='upload-page'>
        <h1>UPLOAD NEW PROJECT / IMAGE</h1>
        <p className='form-info'>Pre paki convert nlng ung image ng <strong>.webp or .jpg</strong>(compressed) tapos kahit max dimensions niya is 1920px x 1080px. 
          <br/> tapos yung file size hangga't maaari atleast di lalagpas ng 1mb para smooth hehe. thanks :*
        </p>
        {/* <p className='form-info'>UPDATED: No need to convert </p> */}
        <div className="project-selection">
          <button type="button" onClick={() => setUploadSelected("new")} className={`${uploadSelected === "new" ? 'selected' : ''}`}>NEW PROJECT ALBUM</button>
          <button type="button" onClick={() => setUploadSelected("add")} className={`${uploadSelected === "add" ? 'selected' : ''}`}>MANAGE PROJECTS</button>
        </div>
        {/* {uploadSelected === "new" && <NewProjectForm setUploadSelected={setUploadSelected}/>}
        {uploadSelected === "add" && <AddToExistingForm setUploadSelected={setUploadSelected}/>} */}
        {uploadSelected === "new" && <NewProjectAlbum setUploadSelected={setUploadSelected}/>}
        {uploadSelected === "add" && <ManageProjects setUploadSelected={setUploadSelected}/>}
    </div>
  )
}
