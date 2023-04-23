import React, {useState, useEffect} from 'react'
import styles from '../styles/ContactUsSection.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons";

function ContactUsSection() {
  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [affair, setAffair] = useState("")
  const [message, setMessage] = useState("")

  const resetForm = () => {
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("affair").value=""
    document.getElementById("message").value=""
    setFullName("")
    setEmail("")
    setAffair("")
    setMessage("")
  }

  const handleSubmit = async ev => {
    ev.preventDefault()
    if (fullname.length > 6 && email.includes("@" && ".com") && affair.length > 0 && message.length > 0) {
      const submitButton = document.getElementById("submitbutton")
      submitButton.value = "Sending Data..."
      await new Promise(resolve => setTimeout(resolve, 2000))
      submitButton.value = "Submit"
      resetForm()
    } else {
      document.getElementById("submitbutton").value = "Fill out all fields"
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactBox}>
        <form 
        className={styles.contactForm}>
          <h1>CONTACT US</h1>
          <div className={styles.contactUser}>
            <input 
            id="name"
            placeholder='Full Name' 
            required 
            onChange={(e)=>setFullName(e.target.value)}/>
            <input 
            id="email"
            placeholder='Email Adress' 
            required
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className={styles.contactMessage}>
            <input 
            id="affair"
            placeholder='Affair' 
            required
            onChange={(e)=>setAffair(e.target.value)}/>
            <textarea 
            id="message"
            placeholder='Message'
            required
            onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <div className={styles.contactSend}>
            <input 
            id="submitbutton"
            type="submit" 
            onClick={(ev)=>handleSubmit(ev)}/>
          </div>
        </form>
        <div className={styles.moreinfo}>
          <b>More Info</b> <br/><br/>
          <FontAwesomeIcon icon={faLocationDot} /> 221b Baker Street, London<br/>
          <FontAwesomeIcon icon={faPhone} /> (111) 111 111 111 <br/>
          <FontAwesomeIcon icon={faEnvelope} /> contact@website.com <br/><br/>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem <br/><br/>
          <b>Company.com</b>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection