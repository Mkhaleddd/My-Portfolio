import React from 'react'
import { PiStudent } from "react-icons/pi";
import { MdOutlineGrade } from "react-icons/md";

const About = () => {

      
  return (
  <>
 
    <section className="about-wrapper" id="about" aria-labelledby='about'>
        <h3 title='about'>About me</h3>
        <p className='text'>
             A Frontend Developer enthusiast with a strong desire to create engaging and user-friendly digital experiences with a solid foundation in HTML, CSS, and JavaScript, I thrive on transforming ideas into intuitive interfaces that resonate with users.
               Throughout my journey, I've honed my skills in responsive design, UI/UX principles, and front-end frameworks like React . I'm eager to contribute my creativity and technical skills to projects that push boundaries and deliver exceptional user experiences and able to
                reduce time-to-value on critical new skill-sets by rapidly mastering and adopting groundbreaking technology,business concepts and industry knowledge.
        </p>
        <div className="flex">
            <div className="row-flex rotate">
                <span>
                    <PiStudent />
                </span>
           <span>
             Studying Electrical Engineering at Ain Shams Univeristy
           </span>
          
        </div>
        <div className="row-flex rotate">
            <span>
                     <MdOutlineGrade />
            </span>
            <span>
                 Current GPA:3.32
            </span>
           
            
        </div>
        </div>
    
        
    </section>
    
</>
  ) 
}

export default About