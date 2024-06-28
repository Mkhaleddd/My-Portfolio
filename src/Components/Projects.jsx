import React from 'react'

const Projects = () => {
  return (
    
    <>
     <section aria-labelledby='projects' id="projects">
        <h3 title='projects'>
            Some of my recent projects
        </h3>
        <div class="row1-container">
      <div class="card ">
      <h4>Blop CRUD App</h4><img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
      <p>a performance-efficent app ustilisng State shape normalisation by Redux to add,delete and edit your posts</p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/Redux-Blog-App/" target='_blank'>View website</a>
      <a href="https://github.com/Mkhaleddd/Redux-Blog-App" target='_blank'>View code</a>
      </div>
      
    </div>

    <div class="card">
      <h4>Tenzies Game</h4>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
      <p>Roll the dice to see if you are going to win</p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/tenzies-dice-game/" target='_blank'>View website</a>
        <a href="https://github.com/Mkhaleddd/tenzies-dice-game" target='_blank'>View code</a>
      </div>

    </div>

    <div class="card ">
    <h4>Notes App</h4>
    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
      <p>Note editor app to save your notes and style them however you like</p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/Notes-App/" target='_blank'>View website</a>
        <a href="https://github.com/Mkhaleddd/Notes-App" target='_blank'>View code</a>
      </div>
      
    </div>
  </div>
  <div class="row2-container">
    <div class="card ">
      <h4>Vans App</h4>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="vans-website"/>
      <p>A renting app  implemented with React Router for smooth navigation and optimisied user exerperince </p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/Vans-App/" target='_blank'>View website</a>
        <a href="https://github.com/Mkhaleddd/Vans-App" target='_blank'>View code</a>
      </div>
      
    </div>
  </div>
  <a href=""></a>
     </section>
    </>
  )
}

export default Projects