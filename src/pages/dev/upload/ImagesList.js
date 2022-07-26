import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./ImagesList.scss"
export default function ImagesList({images, imageData, setImages, setImageData}) {
    const handleRemoveImage = (index) => {
        setImages(prevState => {
            const updatedItems = [...prevState];
            updatedItems.splice(index, 1);
            return updatedItems;
        })
        setImageData(prevState => {
            const updatedItems = [...prevState];
            updatedItems.splice(index, 1);
            return updatedItems;
        })
      }
  return (
    <div className='images-list'>
        <ul className='images-list'>
            {images.map((item, index ) => (
                <li className={`image-list-item`} key={index}>
                    <div className="image-container">
                        <img 
                            src={item} 
                            alt={imageData[index].name} 
                        />
                        <p>{imageData[index].name} | <span>{Math.floor(imageData[index].size / 1000)} KB</span></p>
                        <button className="close-btn" onClick={() => handleRemoveImage(index)}><CloseIcon/></button>  
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

