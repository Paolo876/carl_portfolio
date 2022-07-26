import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (_collection, _query) => {
  const [ documents, setDocuments ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  const q = useRef(_query).current;

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    let ref = collection(db, _collection);

    if(q) ref = query(ref, where(...q));
    
    const unsub = onSnapshot(ref, snapshot => {
        setDocuments( snapshot.docs.map( item => { return { id: item.id, ...item.data() } } ) )
        setIsLoading(false)
    }, error => {
      console.log(error)
      setError('could not fetch the data');
      setIsLoading(false)


    });

    return () => unsub();   //run on unmount to cancel subscription
  

  }, [_collection, q])

  return {
      documents,
      isLoading,
      error
  }
}