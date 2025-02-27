import React from 'react'
import "./DevNavbar.scss";
import { useAuthContext } from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
export default function DevNavbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className='devNav'>
        <ul>
            <li><img src={user.photoURL} alt="user-avatar"/></li>
            <li><p>Logged in as: {user.displayName}</p></li>
            <li><Link to="/dev/upload">UPLOAD IMAGES</Link></li>
            <li><Link to="/dev/update-resume">UPDATE RESUME</Link></li>
            <li style={{marginLeft: "80px"}}><button onClick={() => logout()}>LOGOUT</button></li>
        </ul>
    </div>
  )
}
