import React, { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import ImageItem from '../ImageItem';
import LoadingSpinner from "../../../../components/ui/LoadingSpinner";
import "./ReorderProjects.scss";
import { useFirestore } from '../../../../hooks/useFirestore';
export default function ReorderProjects({ setShowModal, document }) {
    const [ projectsList, setProjectsList ] = useState(document.images);
    const [ isLoading, setIsLoading ] = useState(false);
    const { updateDocument } = useFirestore("user");
    const handleSubmit = async () => {
      setIsLoading(true)
      await updateDocument({...document, images: projectsList}, "projects")
      setIsLoading(false)
      setShowModal(false)
    }
    return (
        <div className='modal-prompt reorder-projects'>
            <List
                values={projectsList.map(item => item.header)}
                onChange={({ oldIndex, newIndex }) =>
                    setProjectsList(arrayMove(projectsList, oldIndex, newIndex))
                }
                renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                renderItem={({ value, props }) => <li {...props} className="drag-item"><ImageItem src={document.images.find(item => item.header === value).images[0].src}/><p className='info'>{value}</p></li>}
            />
            {!isLoading && <div className="actions">
                <button className='submit-btn' onClick={handleSubmit}>SAVE CHANGES</button>
                <button onClick={() => setShowModal(false)}>CANCEL</button>

            </div>}
            {isLoading && <LoadingSpinner/>}

        </div>
    )
}
