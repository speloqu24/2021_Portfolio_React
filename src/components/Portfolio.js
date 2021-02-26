import React from "react";
import Project from "./Project";

const projectsArray = [
  {
    title: "Alcohol Archives",
    github: "https://github.com/SterlingOrth/Alcohol_Archives",
    deployedLink: "https://sterlingorth.github.io/Alcohol_Archives/",
    img: "./Assets/Social-Media-Icons/AlcoholArchives.png",
    description:
      "Here is a website which generates a selected movie, description and rating based on a genre. This application will also generate a beverage to match. An application created to assist the indecisive, alcohol-loving (or not) moviegoer.",
  },
  {
    title: "Provider Portal",
    github: "https://github.com/speloqu24/Provider_Portal",
    deployedLink: "https://calm-forest-80939.herokuapp.com/",
    img: "./Assets/Social-Media-Icons/Provider Portal.png",
    description:
      "Provider Portal is a non intimidating CRM (Customer Relationship Management) created for start up health-care companies or clinics. This application allows the user to link clients to providers as well as store contact information and in the future documents specific to their relationship with the client.",
  },
  {
    title: "Employee Directory",
    github: "https://github.com/speloqu24/employee_directory",
    deployedLink: "https://zen-volhard-4c8149.netlify.app/",
    img: "./Assets/Social-Media-Icons/Employee_Direct_Img.png",
    description:
      "Using an API call a to random-user, this application displays a table of 100 employees. These employees can be searched and displayed alphabetically by clicking on the Name header.",
  },
];

function Portfolio() {
  return (
    <>
      {projectsArray.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          github={project.github}
          page={project.page}
          description={project.description}
          deployedLink={project.deployedLink}
          img={project.img}
        />
      ))}
    </>
  );
}

export default Portfolio;
