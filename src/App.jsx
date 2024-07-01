import { useState } from 'react'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Nav from './Components/Nav'
import Footer from './Components/Footer'

import './App.css'

function App() {

  return (
    <>
    <header>     
            <div className="container">
                <div className="box">

                    <div className="title">
                        <span className="block"></span>
                        <h1>Mariam Khaled<span></span></h1>
                    </div>

                    <div className="role">
                        <div className="block"></div>
                        <h2>Frontend developer</h2>
                    </div>
              </div>
              </div>
              <div className="flex">
          <a className='button-background-move' download href='https://www.canva.com/design/DAGJZfvwspY/2tMv3plrqox48REdrmOZzw/view?utm_content=DAGJZfvwspY&utm_campaign=designshare&utm_medium=link&utm_source=editor' >
            Download CV
          </a>
          <a className='button-cover' role='button' href='#contacts' >
          <span className="text">Contact Me!</span><span>Thanks!</span>
          </a></div>
    </header>
    

  

    <main>
         <About />
         <Skills />
         <Projects />
         <Contact />
    </main>
  <Footer />
   <Nav />
    </>
  )
}

export default App
