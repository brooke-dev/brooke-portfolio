// import React from 'react';



// function Projects() {
//   return (
//   <section id="projects">
//     <h1> Projects Section Here </h1>
//   </section>
//   );
// }

// export default Projects;

import React from 'react';
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Project 1",
      screenshot: "https://d3ddatyom1hv87.cloudfront.net/home.jpg",
      demoLink: "https://www.example.com/project1",
      githubLink: "https://github.com/yourusername/project1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis erat sit amet lacus sagittis tincidunt. In hac habitasse platea dictumst. Quisque euismod quam lectus, ac tristique augue finibus in. Suspendisse potenti. Sed tincidunt augue nec posuere pharetra. Praesent pharetra tortor ac justo consectetur gravida. Nunc faucibus felis id lorem mollis, at imperdiet metus semper."
    },
    {
      title: "Project 2",
      screenshot: "https://d3ddatyom1hv87.cloudfront.net/home.jpg",
      demoLink: "https://www.example.com/project2",
      githubLink: "https://github.com/yourusername/project2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis erat sit amet lacus sagittis tincidunt. In hac habitasse platea dictumst. Quisque euismod quam lectus, ac tristique augue finibus in. Suspendisse potenti. Sed tincidunt augue nec posuere pharetra. Praesent pharetra tortor ac justo consectetur gravida. Nunc faucibus felis id lorem mollis, at imperdiet metus semper."
    },
    {
      title: "Project 3",
      screenshot: "https://d3ddatyom1hv87.cloudfront.net/home.jpg",
      demoLink: "https://www.example.com/project3",
      githubLink: "https://github.com/yourusername/project3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis erat sit amet lacus sagittis tincidunt. In hac habitasse platea dictumst. Quisque euismod quam lectus, ac tristique augue finibus in. Suspendisse potenti. Sed tincidunt augue nec posuere pharetra. Praesent pharetra tortor ac justo consectetur gravida. Nunc faucibus felis id lorem mollis, at imperdiet metus semper."
    }
  ];

  return (
    <section id="projects">
      <h1>Projects Section Here</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.title} className="project">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <img src={project.screenshot} alt={project.title} />
              <div className="overlay">
                <div className="description">{project.description}</div>
                <div className="links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
