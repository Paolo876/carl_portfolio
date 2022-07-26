import React from 'react'
import "./UploadImageForm.scss"

export default function UploadImageForm({ setImages, setImageData, imageData}) {
  const onChangePicture = e => {
    if (e.target.files.length !== 0) {
      let arr = [];
      for(let item of e.target.files){
        const newFile = new File([item], `${String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "").slice(12)}_${item.name}`, {
          type: item.type,
        })
        arr.push(newFile)
      }

      setImageData(prevState => [...prevState, ...arr]);

      //image preview
      arr.forEach(item => {
        const reader = new FileReader();
        reader.addEventListener("load", () => setImages(prevState => [...prevState, reader.result]));
        reader.readAsDataURL(item);
      })
    }
  };
  
  return (
    <form className="upload-image-form">
      <label className='image-input'>
        {imageData.length === 0 && <span className='input-btn'>Choose Files</span>}
        {imageData.length !== 0 && <span className='input-btn'>Add More Files</span>}
        {imageData.length !== 0 && <span className='input-length'>{imageData.length} file(s) chosen.</span>}
        <input
          type="file" 
          accept="image/*"    
          onChange={onChangePicture}
          multiple
          required
        />
      </label>
    </form>
  )
}
