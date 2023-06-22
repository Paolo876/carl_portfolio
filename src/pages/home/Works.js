import React from 'react';
import "./Works.scss";
import { Link } from "react-router-dom";
import { useInView, Box } from 'react-intersection-observer';
import Image from 'mui-image';
import image1 from "../../assets/showcase/sc-1.webp";
import image2 from "../../assets/showcase/sc-2.webp";
import image3 from "../../assets/showcase/sc-3.webp";
import image4 from "../../assets/showcase/sc-4.webp";
import image5 from "../../assets/showcase/sc-5.webp";
import image6 from "../../assets/showcase/sc-6.webp";

const imagesList = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/carl-dimabuyu.appspot.com/o/project-images%2Fsc-1.webp?alt=media&token=91ff023b-9a4b-4ffb-a0ee-589538d558d3",
    name: "sc-1.webp",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/carl-dimabuyu.appspot.com/o/project-images%2Fsc-2.webp?alt=media&token=063cae36-dc93-4eb9-916d-bb6fc6618fdb",
    name: "sc-2.webp",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/carl-dimabuyu.appspot.com/o/project-images%2Fsc-3.webp?alt=media&token=fd95894b-70d8-431b-9e8e-72fb4901d398",
    name: "sc-3.webp",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/carl-dimabuyu.appspot.com/o/project-images%2Fsc-5.webp?alt=media&token=42eeefdf-ba7d-437f-87a5-0609e0cb9e9b",
    name: "sc-4.webp",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/carl-dimabuyu.appspot.com/o/project-images%2Fsc-5.webp?alt=media&token=42eeefdf-ba7d-437f-87a5-0609e0cb9e9b",
    name: "sc-5.webp",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/carl-dimabuyu.appspot.com/o/project-images%2Fsc-6.webp?alt=media&token=a42afb1c-33d2-4ef2-a8e6-7b464e92f1f0",
    name: "sc-6.webp",
  },
]

const Works = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "-10% 0px -28% 0px",
    threshold: 0,
  });


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



