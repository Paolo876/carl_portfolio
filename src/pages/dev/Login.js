import React from 'react'
import { useGoogleLogin } from "../../hooks/useGoogleLogin";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router';
// import { useLogout } from "../../hooks/useLogout";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { login, isLoading } = useGoogleLogin();

  if(user) navigate('/');
  const handleLogin = async () => {
    await login();
  };

  return (
    <div className='login'>
        <div className="container">
            <h3>LOGIN</h3>
            <p>This page is reserved for the rightful owner of this site, Carl Adriant Dimabuyu. <br /><span onClick={() => navigate("/")}>Click here</span> to redirect back to home page.</p>
            {!user &&
            <>
                {!isLoading && <button onClick={handleLogin}>Login with Google</button>}
                {isLoading && <button disabled>Redirecting...</button>}
            </>
            }
            {user &&
            <>
                {user.photoURL && 
                    <img src={user.photoURL} alt="user-avatar"/>
                }
                <h4>Currently logged in as: {user.displayName}</h4>
            </>
            }

        </div>
    </div>
  )
}
