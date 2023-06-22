import './App.css';
// import bg from "./assets/bg-white.png"
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import MainNavigation from './components/layout/MainNavigation';
import { useAuthContext } from './hooks/useAuthContext';
import DevNavbar from './pages/dev/DevNavbar';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="app" >
      <BrowserRouter>
        { user && <DevNavbar/> }
        <Navbar/>
        <MainNavigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
