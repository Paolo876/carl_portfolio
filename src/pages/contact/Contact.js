import React from 'react'
import ContactForm from './ContactForm';

// media
import "./Contact.scss";
import bg from "../../assets/bg-white.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <div className='contact' style={{background: `url:${bg}`}}>
        <div className="container">
            <div className="info">
                <h1>Hire me!</h1>
                <div className="name">
                    <p>CARL ADRIANT DIMABUYU</p>
                    <p className='location'>Al Mansoura, Doha, Qatar <LocationOnIcon/></p>
                </div>
                <div className="contact-links">
                    <div className="social">
                        <h3>SOCIAL LINKS</h3>
                        <ul>
                            <li><a href="https://www.facebook.com/adobotrash" target="_blank" rel="noreferrer"><FacebookIcon/></a></li>
                            <li><a href="https://www.instagram.com/adobotrash/" target="_blank" rel="noreferrer"><InstagramIcon/></a></li>
                            <li><a href="https://www.linkedin.com/in/carladriantdimabuyu/"><LinkedInIcon/></a></li>
                        </ul>
                    </div>
                    <div className="email">
                        <h3>EMAIL</h3>
                        <a href="mailto: carl.dimabuyu@gmail.com" target="_blank" rel="noreferrer">carl.dimabuyu@gmail.com</a>
                    </div>
                    <div className="phone">
                        <h3>PHONE</h3>
                        <div>
                            <p>+974-5571-5380</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
        <footer>
            <p>© 2022 Carl Adriant Dimabuyu, All Rights Reserved.</p>
      </footer>
    </div>
  )
}
