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
        <p className='form-info'>Priiii paki convert nlng ung image ng <strong>.webp or .jpg</strong>(compressed) tapos kahit max dimensions niya is 1920px x 1080px. 
          <br/> ps. mas oks ung .webp format ng image para sa mga web pages
        </p>
        {/* <p className='form-info'>UPDATED: No need to convert </p> */}
        <div className="project-selection">
          <button type="button" onClick={() => setUploadSelected("new")} className={`${uploadSelected === "new" ? 'selected' : ''}`}>NEW POST</button>
          <button type="button" onClick={() => setUploadSelected("add")} className={`${uploadSelected === "add" ? 'selected' : ''}`}>MANAGE POSTS</button>
        </div>
        {/* {uploadSelected === "new" && <NewProjectForm setUploadSelected={setUploadSelected}/>}
        {uploadSelected === "add" && <AddToExistingForm setUploadSelected={setUploadSelected}/>} */}
        {uploadSelected === "new" && <NewProjectAlbum setUploadSelected={setUploadSelected}/>}
        {uploadSelected === "add" && <ManageProjects setUploadSelected={setUploadSelected}/>}
    </div>
  )
}
