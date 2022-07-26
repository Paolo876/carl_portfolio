import React, { useState, useRef } from 'react'
import "./ContactForm.scss";
import emailjs from '@emailjs/browser';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDocument } from "../../hooks/useDocuments";

export default function ContactForm() {
  const { document } = useDocument('config', 'emailjs')
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  //input states
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ message, setMessage ] = useState("");
  const form = useRef();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try{
        if(document){
            await emailjs.sendForm(document.serviceId, document.templateId, form.current, document.publickey);
            setSuccess(true)    
        } else {
            throw new Error("Failed to load database variables.")
        }
    } catch (err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }
  }
  return (
    <form ref={form} className='contact-form' onSubmit={handleSubmit}>
        <p className='header'>For inquiries, feel free to send me a message using this form or through my contact informations provided.
            <br/>I'm looking forward to hear from you and I'd be happy to answer any questions!</p>
        {!success && <>
            <label>
                <span className='input-label'>NAME</span>
                <input 
                    type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name="name"
                    required
                />
            </label>
            <label>
                <span className='input-label'>EMAIL</span>
                <input 
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    required
                />
            </label>
            <label>
                <span className='input-label'>PHONE <span>(optional)</span></span>
                <input 
                    type="tel"
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    name="phone"
                />
            </label>
            <label>
                <span className='input-label'>MESSAGE</span>
                <textarea 
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    required
                />
            </label>
            <div className="btn-container">
                {error && <p>{error}<br/>Please reload the page and try again.</p>}
                {!isLoading && <button type="submit">SUBMIT</button>}
                {isLoading && <button disabled>SUBMITTING FORM...</button>}
            </div>
        </>}


        {success && 
        <div className='success-prompt'>
            <CheckCircleOutlineIcon/>
            <p>Thank you for your inquiry! Your message has been delivered successfully.<br/>I will get in touch with you as soon as I can.</p>
        </div>}
    </form>
  )
}
