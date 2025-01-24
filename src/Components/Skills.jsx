import React from 'react';

const Skills = () => {
  return (
    <>
      <section aria-labelledby="skills" id="skills" className="skills">
        <h3 title="skills">Skills</h3>
        <div className="grid">
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html5-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>HTML5</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css3-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>CSS3</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>ES6 Javascript</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="typescript-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>Typescript</span>
            <p>Beginner</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>React</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="redux-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>Redux Toolkit</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>Bootstrap5</span>
            <p>Advanced</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>Git</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              alt="c++-icon"
              style={{ width: "64px", height: "64px" }}
            />
            <span>C++</span>
            <p>Intermediate</p>
          </div>
          <div className="grid-item">
            <img
            src="https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg"
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
