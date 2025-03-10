import React from 'react'
import { Routes, Route, Navigate } from 'react-router';
import { useAuthContext } from '../../hooks/useAuthContext';

// pages
import Home from '../../pages/home/Home';
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";

//dev
import Login from '../../pages/dev/Login';
import Upload from '../../pages/dev/upload/Upload';
import UpdateResume from '../../pages/dev/updateResume/UpdateResume';
import Post from '../../pages/post/Post';

export default function MainNavigation() {
  const { isLoginAllowed, user, authIsReady } = useAuthContext();

  return (
    <main>
      {authIsReady &&
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/post/:id' element={ <Post/> }/>
            <Route path='/about' element={ <About/>}/>
            <Route path='/contact' element={ <Contact/>}/>
            <Route path="*" element={<Navigate to="/"/>} />
            <Route path='/dev/login' element={ !user ? <Login/> : <Navigate to="/"/>}/>
            <Route path='/dev/upload' element={ isLoginAllowed || user ? <Upload/> : <Navigate to="/"/>}/>
            <Route path='/dev/update-resume' element={ isLoginAllowed || user ? <UpdateResume/> : <Navigate to="/"/>}/>
        </Routes>
      }
    </main>
  )
}
