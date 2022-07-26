/**
 * PURPOSE:
 *  upload files to firebase storage, save data to firestore.
 * 
 * PARAMETERS:
 *    documentId (string)   = firestore document id
 *    documentItem (string)   = selected firestore document's item field
 *    storageFolder (string)  = firebase storage folder name
 *    items (array of obj)    = items to be uploaded. 
 *                               ->  items[i].file = file to be uploaded to firebase storage
 *                               ->  items[i].data = file information to be saved in the database (object)
 * RETURN VALUE:
 *    isLoading, error, uploadDocuments
 * FUNCTION SIGNATURE:
 *    useUpload(collection:string)
 */

import { useState } from 'react'

// firestore services
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase/config';

export default function useUpload(collection) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ success, setSuccess ] = useState(null);

  // uploading multiple files
  const uploadMany = async (storageFolder, items) => {
    // reset states
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try{
        let downloadURLList = [];

        // upload to storage (item.file)
        for(const item of items){
            let storageRef = ref(storage, `${storageFolder}/${item.name}`);

            await uploadBytes(storageRef, item);
            let fileURL = await getDownloadURL(storageRef)
            downloadURLList.push({src: fileURL, filename: item.name});
        }
        // update db
        // const docRef = doc(db, collection, documentId);
        // let i = 0;
        // for(const item of downloadURLList){
        //   await updateDoc(docRef, {
        //     [documentItem]: arrayUnion({src: item, fileName: items[i].file.name, ...items[i].data})
        //   });
        //   i++;
        // }
        setIsLoading(false);
        setSuccess("Upload Successful!");
        return downloadURLList;
    } catch (err) {
        setError(err.message)
    }
  }

  //uploading one file
  const uploadOne = async (documentId, documentItem, storageFolder, item) => {
    // reset states
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try{
      // upload to storage (item.file)
          let storageRef = ref(storage, `${storageFolder}/${item.file.name}`);
          await uploadBytes(storageRef, item.file);
          let fileURL = await getDownloadURL(storageRef)

        // update db
        const docRef = doc(db, collection, documentId);
          await updateDoc(docRef, {
            [documentItem]: {src: fileURL, fileName: item.file.name}
          });

        setIsLoading(false);
        setSuccess("Upload Successful!");
    } catch (err) {
        setError(err.message)
    }

  }
  return {
    isLoading,
    error,
    success,
    uploadMany,
    uploadOne
  }
}
