import React from 'react'
import { FaLinkedin,FaGithub,FaGoogle} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer>
<ul>
  <li>
    <a href="https://www.linkedin.com/feed/" target='_blank' aria-label='Linkedin'>
      <i className="fa fa-Linkedin" aria-hidden="true"></i>
      <span>Linked<FaLinkedin /></span>
    </a>
  </li>
  <li>
    <a href="https://github.com/Mkhaleddd/" target="_blank" aria-label='Github'>
      <i className="fa fa-Github" aria-hidden="true"></i>
      <span> <FaGithub /> Github</span>
    </a>
  </li>
  <li>
    <a href="https://myaccount.google.com/" aria-label='Google'>
      <i className="fa fa-google-plus" aria-hidden="true"></i>
      <span><FaGoogle />oogle</span>
    </a>
  </li>

</ul>
    </footer>
    </>
  )
}

export default Footer