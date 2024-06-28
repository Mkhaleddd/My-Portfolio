import React from 'react'
import { CiUser } from "react-icons/ci";
import { LuCode2 } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { MdOutlineModeComment } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="tabs" role='navigation'>
    <div className="selector"></div>
    <a href="#about" ><CiUser /></a>
    <a href="#skills"><LuCode2 /></a>
    <a href="#projects"><GrProjects /></a>
    <a href="#contacts"><MdOutlineModeComment /></a>
  </nav>
  )
}

export default Nav