import './App.css';
import { BrowserRouter } from "react-router-dom";
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
        <MainNavigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
