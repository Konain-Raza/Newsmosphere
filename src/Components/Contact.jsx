import React, { useState } from 'react'
import './Contact.css'
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const printValues = ()=>{
        console.log("name: " + name);
        console.log("Email: " +email);
        console.log("Message: " + message);

    }

    

  return (
    <div>
        <h1>Contact Form</h1>
        <input value={name}  onChange={(e) =>{
            setName(e.target.value) 
        }} type="text" name="name" id="" placeholder='Enter your Name: ' />
        <br />
        <input onChange={(e)=>{
            setEmail(e.target.value);
        }
        } value={email} type="text" name="email" id="" placeholder='Enter your Email: '/>
<br />
<textarea  onChange={(e)=>{
            setMessage(e.target.value)
        }
        } value={message} name="msg" id="" cols="30" rows="10" placeholder='Enter your Message: '></textarea>
<button onClick={printValues}>
    Send Message
</button>
    </div>
  )
}

export default Contact