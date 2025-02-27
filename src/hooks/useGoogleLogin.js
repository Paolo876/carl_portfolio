import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { GoogleAuthProvider, signInWithRedirect, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";


export const useGoogleLogin = () => {
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const { dispatch } = useAuthContext();
  const login = async () => {
    setError(null)
    setIsLoading(true)
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    signInWithPopup(auth, provider)
      .then(result => {
        // console.log(result.user)
        dispatch({type: 'LOGIN', payload: result.user});
      })
      .catch(err => {
          setError(err.message)
      });
    // await signInWithRedirect( auth, provider)

    //     .then( result => {
    //       console.log(result.user)
    //         dispatch({type: 'LOGIN', payload: result.user});
    //     })
    //     .catch(err => {
    //         setError(err.message)
    //     });


    setIsLoading(false);
  }

  return {
      error, login, isLoading
  }

}