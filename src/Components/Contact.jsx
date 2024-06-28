
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const form = useRef();
const [disable,setDisable]=React.useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
      emailjs
      .sendForm('service_8tan0jb', 'template_itrasqs', form.current, {
        publicKey: 'Sy5KpsogNlOvR7R2s',
      })
      .then(
        (res) => {
          console.log("success",res.text);
          setDisable(prev=>!prev)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setDisable(prev=>!prev)
  };

  return (
        <>
            <section id="contacts" aria-labelledby='contact'>
            <h3 id='contact'>Got an idea on your mind,send it!</h3>
              <form ref={form} onSubmit={sendEmail} className='row-flex'>
                   
                    <input type="text" name="name" placeholder='Name'  />
                    <input type="email" name="email"  placeholder='Email'/>
                    <textarea name="message" placeholder='Your Message' />
                   <button type="submit" >Send <IoIosSend /></button>
            </form>
            </section>
        </>
  )
}


  


export default Contact