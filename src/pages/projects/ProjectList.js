import React, { useState, useEffect } from 'react';
import { useDocument } from '../../hooks/useDocuments';
import arrayChunks from '../../utils/array-chunk';
import Modal from "../../components/ui/Modal";

// media
import "./ProjectList.scss";
import ProjectImage from './ProjectImage';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

export default function ProjectList() {
  const { document, error, isLoading } = useDocument("user", "projects");
  const [ projectsList, setProjectsList ] = useState([]);
  const [ showModal , setShowModal ] = useState({isVisible: false, data: null});
  const [ imageLoading , setImageLoading ] = useState(true);
  
  useEffect(()=>{
    if(document){
        if(document.images) {
          setProjectsList(document.images)
        }
    }
  }, [document]);

  const handleHideModal = () => {
    setShowModal({isVisible: false, data: null});
    setImageLoading(true)
  }
  return (
    <div className="project-list">
        {isLoading && <LoadingSpinner isInverted={true} />}
        {error && <p>Failed to fetch data. Please reload the page.</p>}
        {!isLoading && projectsList.map((item, index) => (
          <ul key={index} className="project-container">
            <h3>{item.header} <span>{item.style}</span></h3>
            <ul className='softwares-list'>{item.softwares.map(_item => <li key={_item}>{_item}</li>)}</ul>
              {arrayChunks(item.images, 4).map( (__item, _index) => (
                <ul className={`grid-${__item.length}`} key={_index}>
                  {__item.map((image, index) => (    
                    <ProjectImage 
                      src={image.src}
                      index={index}
                      key={index}
                      onClick={() => setShowModal({isVisible: true, data: {...item, src: image.src}})}
                      />
                  ))}
                </ul>
              ))}
          </ul>
        ))}

        {showModal.isVisible && 
        <Modal handleHideModal={handleHideModal}>
          <div className="project-image-modal">
            <img src={showModal.data.src} alt="modal" className='modal-image' onLoad={() => setImageLoading(false)}/>
            {imageLoading && <LoadingSpinner isInverted={true} />}
            {!imageLoading && <div className="modal-info">
              <h1>{showModal.data.header} <span>{showModal.data.style}</span></h1>
              <ul>
                {showModal.data.softwares.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>}
          </div>
        </Modal>}
    </div>
  )
}
{/* <ul className={`${__item.length === 2 ? 'grid-2': 'grid-4'}`} key={_index}> */}
