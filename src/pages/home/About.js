import React from 'react';
import { useNavigate } from "react-router";

// media
import "./About.scss";
import caloy from "../../assets/caloyface.webp";
import designSvg from "../../assets/design.svg"
import aestheticSvg from "../../assets/aesthetics.svg";
import analysisSvg from "../../assets/analysis.svg";

const About = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div className='about home-item' ref={ref}>
        <h1 className='header-text'>ABOUT ME</h1>
        <div className="content">
          <div className="info">
            <p className="hello">Hello,</p>
            <p className='desc'>my name is <span className='span-1'>Carl</span>. I am a hybrid professional offering
                expertise in <span className='span-1'>manual and digital
                design</span>, currently based in Doha, Qatar. <br/>I am an efficient learner
                and a knowledge-seeker
                especially in 
                <span className='span-2'>
                  <br/><strong><img src={designSvg} className="info-icon" alt='info-icon'/>design</strong>, 
                  <br/><strong><img src={aestheticSvg} className="info-icon" alt='info-icon'/>aesthetics</strong>, and 
                  <br/><strong><img src={analysisSvg} className="info-icon" alt='info-icon'/>structural analysis</strong>.</span>
            </p>
          </div>
          <div className="image-container">
            <img src={caloy} alt="caloy-face"/>
          </div>
          <div className="action-buttons">
            <button onClick={() => navigate("/about")}>MORE ABOUT ME!</button>
            <button onClick={() => navigate("/contact")}>HIRE ME!</button>
          </div>
        </div>

    </div>
  )
})

export default About;
