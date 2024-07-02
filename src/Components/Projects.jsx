import React from 'react';
import {TwicImg}  from "@twicpics/components/react";

const Projects = () => {
  return (
    <>
     <section aria-labelledby='projects' id="projects">
        <h3 title='projects'>
            Some of my recent projects
        </h3>
        <div className="row1-container">
      <div className="card ">
      <h4>Blop CRUD App</h4><TwicImg src="icon-supervisor.svg"  alt='blog-website'  zoom="2"/>
      <p>a performance-efficent app ustilisng State shape normalisation by Redux to add,delete and edit your posts</p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/Redux-Blog-App/" target='_blank'>View website</a>
      <a href="https://github.com/Mkhaleddd/Redux-Blog-App" target='_blank'>View code</a>
      </div>
      
    </div>

    <div className="card">
      <h4>Tenzies Game</h4>
      <TwicImg src="icon-team-builder.svg"  alt='dice-game-website'  zoom="2" />
      <p>Roll the dice to see if you are going to win</p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/tenzies-dice-game/" target='_blank'>View website</a>
        <a href="https://github.com/Mkhaleddd/tenzies-dice-game" target='_blank'>View code</a>
      </div>

    </div>

    <div className="card ">
    <h4>Notes App</h4>
    <TwicImg src="icon-team-builder.svg"  alt='notes-website'  zoom="2"/>
      <p>Note editor app to save your notes and style them however you like</p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/Notes-App/" target='_blank'>View website</a>
        <a href="https://github.com/Mkhaleddd/Notes-App" target='_blank'>View code</a>
      </div>
      
    </div>
  </div>
  <div className="row2-container">
    <div className="card ">
      <h4>Vans App</h4>
      <TwicImg src="icon-karma.svg"  alt='vans-renting-website'  zoom="2"/>
      <p>A renting app  implemented with React Router for smooth navigation and optimisied user exerperince </p>
      <div className="flex">
        <a href="https://mkhaleddd.github.io/Vans-App/" target='_blank'>View website</a>
        <a href="https://github.com/Mkhaleddd/Vans-App" target='_blank'>View code</a>
      </div>
    </div>
  </div>
     </section>
    </>
  )
}

export default Projects