import { useState } from 'react'
import axios from 'axios'


const useImagekitUpload = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  // get authentication endpoint
  const getAuthenticationEndpoint = async () => {
    setIsLoading(true)
    try {
        const res = await axios.get(`http://localhost:3000/api/imagekit/`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
        setIsLoading(false)
        return res.data
    } catch(err) {
        setIsLoading(false)
        setError((err.response && err.response.data) ? err.response.data.message : err.message)
    }
  }

  return {

  }
}

export default useImagekitUpload