import React from 'react';
import "./Works.scss";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

import image1 from "../../assets/showcase/sc-1.webp";
import image2 from "../../assets/showcase/sc-2.webp";
import image3 from "../../assets/showcase/sc-3.webp";
import image4 from "../../assets/showcase/sc-4.webp";
import image5 from "../../assets/showcase/sc-5.webp";
import image6 from "../../assets/showcase/sc-6.webp";


const Works = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "-10% 0px -28% 0px",
    threshold: 0,
  });
  if(inView) console.log("asd")


  return (
    <div className='works home-item' ref={ref}>
        <h1 className='header-text'>MY WORKS</h1>

 
        {inView &&          
          <ul className="images">
            <li><img src={image1} alt="showcase-preview"/></li>
            <li><img src={image2} alt="showcase-preview"/></li>
            <li><Link to="/projects">SEE ALL MY WORKS</Link></li>
            <li><img src={image3} alt="showcase-preview"/></li>
            <li><img src={image4} alt="showcase-preview"/></li>
            <li><img src={image5} alt="showcase-preview"/></li>
            <li><img src={image6} alt="showcase-preview"/></li>
          </ul>  
        }      
    </div>
  )
}
// const Works = React.forwardRef(({ isVisible }, ref) => {
//   return (
//     <div className='works home-item' ref={ref}>
//         <h1 className='header-text'>MY WORKS</h1>

//         {isVisible && 
//           <ul className="images">
//             <li><img src={image1} alt="showcase-preview"/></li>
//             <li><img src={image2} alt="showcase-preview"/></li>
//             <li><Link to="/projects">SEE ALL MY WORKS</Link></li>
//             <li><img src={image3} alt="showcase-preview"/></li>
//             <li><img src={image4} alt="showcase-preview"/></li>
//             <li><img src={image5} alt="showcase-preview"/></li>
//             <li><img src={image6} alt="showcase-preview"/></li>

//           </ul>        
//         }

//     </div>
//   )
// })

export default Works;



