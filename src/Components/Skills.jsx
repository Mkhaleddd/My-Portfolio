import React from 'react';
import CssImg from "../assests/images/css.png";
import HtmlImg from "../assests/images/html.png";
import JSImg from "../assests/images/js.png";
import GitImg from "../assests/images/git.png";
import ReactImg from "../assests/images/react.png";
import CImg from "../assests/images/c.png";
import ReduxImg from "../assests/images/redux.png";
import BoostarpImg from "../assests/images/bootstrap.png";
import TSImg from "../assests/images/typescript.png";

const Skills = () => {
  return (
    <>
      <section aria-labelledby="skills" id="skills" className="skills">
        <h3 title="skills">Skills</h3>
        <div className="grid">
          <div className="grid-item">
            <img src={HtmlImg} alt="html5-icon" />
            <span>HTML5</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img src={CssImg} alt="css3-icon" />
            <span>CSS3</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img src={JSImg} alt="javascript-icon" />
            <span>ES6 Javascript</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img src={TSImg} alt="typescript-icon" />
            <span>Typescript</span>
            <p>Beginner</p>
          </div>
          <div className="grid-item">
            <img src={ReactImg} alt="react-icon" />
            <span>React</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img src={ReduxImg} alt="redux-icon" />
            <span>Redux Toolkit</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img src={BoostarpImg} alt="bootstrap-icon" />
            <span>Bootstrap5</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img src={GitImg} alt="git-icon" />
            <span>Git</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img src={CImg} alt="c++-icon" />
            <span>C++</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="tailwind-css-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>Tailwind CSS</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="next-js-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>Next.js</span>
            <p>Intermediate</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
