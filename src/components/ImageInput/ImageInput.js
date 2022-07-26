import React from 'react'

export default function ImageInput() {
  return (
    <label>
        <span>Upload Images</span>
        {imageData.length === 0 && <p>No file chosen.</p>}
        {imageData.length !== 0 && <p>{imageData.length} file(s) chosen.</p>}
        <input 
                type="file" 
                multiple 
                accept="image/*"    
                onChange={onChangePicture}
                required
            />
    </label>

  )
}
