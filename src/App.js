import './App.css';
// import bg from "./assets/bg-white.png"
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import MainNavigation from './components/layout/MainNavigation';
import { useAuthContext } from './hooks/useAuthContext';
import DevNavbar from './pages/dev/DevNavbar';
import useProjectsRedux from './hooks/useProjectsRedux';
import { useEffect } from 'react';


function App() {
  const { user } = useAuthContext();
  const { getProjects } = useProjectsRedux();

  useEffect(() => {
    // getProjects()
  }, [])


  return (
    <div className="app" >
      <BrowserRouter>
        { user && <DevNavbar/> }
        {/* <Navbar/> */}
        <MainNavigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
