import React, { useState, useEffect } from 'react'
import "./Landing.scss";
import logo from "../../assets/ADOBO_-_signature_-_logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const { dispatch } = useAuthContext();
  const [ allowLogin, setAllowLogin ] = useState(0); 
  const navigate = useNavigate();
  
  //for dev secret login
  useEffect(()=> {
    if(allowLogin <= 5){
      if(allowLogin === 5){
        dispatch({type: "ALLOW_LOGIN", payload: true})
        navigate("/dev/login");
      }
    } else {  
      setAllowLogin(0);
    }
  }, [allowLogin, dispatch, navigate]);

  return (
    <div className='landing'>
      <div className="header">
        <div className='header-name'>
          <div className="left-text">
            <p>CARL</p>
            <p>adriant</p>
            <p>dimabuyu</p>
          </div>
          <div className="border"></div>
        </div>
        <button className='header-logo'>
          <img src={logo} alt="logo"  draggable="false" />
          <div className='line-left' onDoubleClick={() => setAllowLogin(allowLogin + 2)}></div>
          <div className='line-right' onDoubleClick={() => setAllowLogin(allowLogin + 3)}></div>
        </button>
        <ul className="links">
          <li><a href="https://www.facebook.com/adobotrash" target="_blank" rel="noreferrer" ><FacebookIcon/></a></li>
          <li><a href="https://www.instagram.com/adobotrash/" target="_blank" rel="noreferrer" ><InstagramIcon/></a></li>
          <li><a href="mailto: carl.dimabuyu@gmail.com" target="_blank" rel="noreferrer"><GoogleIcon/></a></li>
          <li><a href="https://www.linkedin.com/in/carladriantdimabuyu/" target="_blank" rel="noreferrer" ><LinkedInIcon/></a></li>
        </ul>
      </div>
    </div>
  )
}
