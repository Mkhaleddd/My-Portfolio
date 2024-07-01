import React from 'react'
import { CiUser } from "react-icons/ci";
import { LuCode2 } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { MdOutlineModeComment } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="tabs" role='navigation'>
    <div className="selector"></div>
    <a href="#about"  aria-label='About'><CiUser /></a>
    <a href="#skills" aria-label='Skills'><LuCode2 /></a>
    <a href="#projects" aria-label='Projects'><GrProjects /></a>
    <a href="#contacts" aria-label='Contacts'><MdOutlineModeComment /></a>
  </nav>
  )
}

export default Nav