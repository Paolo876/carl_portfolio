import React, { useRef } from 'react';
import "./Home.scss";
import Landing from './Landing';
import Works from "./Works";
import bg from "../../assets/bg-white.png";
import { useIntersection } from '../../hooks/useIntersection';
import About from './About';

export default function Home() {
  const worksRef = useRef();
  const Aboutref = useRef();
  // const inViewport = useIntersection(worksRef, '-30%'); // Trigger as soon as the element becomes visible

  return (
    <div className='home' style={{background: `url(${bg})`}}>
      <Landing/>
      <Works/>
      <About/>
      {/* <Works ref={worksRef}  isVisible={inViewport}/>
      <About ref={Aboutref}/> */}
      <footer>
        <p>© 2022 Carl Adriant Dimabuyu, All Rights Reserved.</p>
      </footer>
    </div>
  )
}
