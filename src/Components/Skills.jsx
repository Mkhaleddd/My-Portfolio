import React from 'react'


const Skills = () => {
 
  return (
    <>
     <section aria-labelledby='skills' id='skills' className='skills'>
      <h3 title='skills'>I have acquired the following skills with addition 
        to resposive Web Desgin,SEO optimization and Web Accessibilty</h3>
       <ul className='scroll-con carousel-pr ' >
        <li className="flip-animate" > 
          <span data-hover="Advanvced">
            ReactJS library</span>
        </li>
        <li className="flip-animate" > 
          <span data-hover="Intermediate">
            Redux Toolkit</span>
        </li>
        <li className="flip-animate" > 
          <span data-hover="Intermediate">
            React Router</span>
        </li>
        <li className="flip-animate" > 
          <span data-hover="Intermediate">
            Javascricpt ES6</span>
        </li>
        <li className="flip-animate" > 
          <span data-hover="Advanced">
            CSS 3</span>
        </li>
        <li className="flip-animate" > 
          <span data-hover="Advanced">
            HTML 5</span>
        </li>
       </ul>
     </section>
    </>
  )
}

export default Skills