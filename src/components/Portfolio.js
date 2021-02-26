import React from "react";
import Project from "./Project";

const projectsArray = [
  {
    title: "Alcohol Archives",
    github: "https://github.com/SterlingOrth/Alcohol_Archives",
    deployedLink: "https://sterlingorth.github.io/Alcohol_Archives/",
    img: "./Assets/",
  },
];

function Portfolio() {
  return (
    <>
      {projectsArray.map((project) => (
        <Project
          title={project.title}
          github={project.github}
          deployedLink={project.deployedLink}
        />
      ))}
    </>
  );
}

export default Portfolio;