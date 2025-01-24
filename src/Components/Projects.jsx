import React, { useState } from "react";
import blogImg from "../assests/images/blog.png";
import tenziesImg from "../assests/images/tenzies.png";
import notesImg from "../assests/images/notes.png";
import vansImg from "../assests/images/vans.png";
import quizzicalImg from "../assests/images/quizzicalIMG.png";
import fileImg from "../assests/images/FileIMG.png";
import memeImg from "../assests/images/memeImg.png";
import visitImg from "../assests/images/visit.png";
import feedbackImg from "../assests/images/feedback.png";

const projects = [
  {
    title: "Blog CRUD App",
    description: "A performance-efficient app utilizing state shape normalization by Redux to add, delete, and edit your posts.",
    image: blogImg,
    category: "React",
    website: "https://mkhaleddd.github.io/Redux-Blog-App/",
    code: "https://github.com/Mkhaleddd/Redux-Blog-App",
  },
  
  {
    title: "Tenzies Game",
    description: "Roll the dice to see if you are going to win.",
    image: tenziesImg,
    category: "React",
    website: "https://mkhaleddd.github.io/tenzies-dice-game/",
    code: "https://github.com/Mkhaleddd/tenzies-dice-game",
  },
  {
    title: "Notes App",
    description: "Note editor app to save your notes and style them however you like.",
    image: notesImg,
    category: "React",
    website: "https://mkhaleddd.github.io/Notes-App/",
    code: "https://github.com/Mkhaleddd/Notes-App",
  },
  {
    title: "Vans App",
    description: "A renting app implemented with React Router for smooth navigation and optimized user experience.",
    image: vansImg,
    category: "React",
    website: "https://mkhaleddd.github.io/Vans-App/",
    code: "https://github.com/Mkhaleddd/Vans-App",
  },
  {
    title: "Quizzical App",
    description: "a quiz app built with TypeScript, allowing users to choose a category, difficulty level, and question type to take customized quizzes.",
    image: quizzicalImg,
    category: "React",
    website: "https://mkhaleddd.github.io/Quizzical-TypeScript-App/",
    code: "https://github.com/Mkhaleddd/Quizzical-TypeScript-App",
  },
  {
    title: "File Explorer",
    description: "A file manager app with CRUD operations for files and folders, using recursion for hierarchy handling, a custom hook for state management, and DFS for efficient search.",
    image: fileImg,
    category: "React",
    website: "https://mkhaleddd.github.io/file-explorer/",
    code: "https://github.com/Mkhaleddd/file-explorer",
  },
  {
    title: "Meme Generator",
    description: " A simple React app to create memes by adding text to the top and bottom of randomly selected meme images.",
    image: memeImg,
    category: "React",
    website: "https://mkhaleddd.github.io/meme-generator-app/",
    code: "https://github.com/Mkhaleddd/meme-generator-app",
  }
  ,{
    title: "APEC FeedBack Form",
    description: "  updated the UI of APEC's feedback forms to make them more user-friendly and responsive.",
    image: feedbackImg,
    category: "Javascript",
    website: "https://apeceg.com/Events2025/visits25/Visits25_Feedback.php",
    
  },
  {
    title: "APEC Visit Registration",
    description: "updated the UI of APEC's  registration forms to make them more user-friendly and responsive. Additionally, I added functionality to the registration form, enabling students to apply for visits or internships based on their year and major. ",
    image: visitImg,
    category: "Javascript",
    website: "https://apeceg.com/Events2025/visits25/index",
  
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab);

  return (
    <>
      <section id="projects" className="projects-section">
        <h3 className="section-title">Some of my recent projects</h3>

        <div className="project-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? "active-tab" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.title}>
              <img
                src={project.image}
                alt={`${project.title} image`}
                className="project-image"
              />
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Website
                </a>
               {project.code&& <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Code
                </a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
