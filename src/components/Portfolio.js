import React from "react";
import Project from "./Project";

const projectsArray = [
  {
    title: "Feed Your Bean",
    github: "https://github.com/speloqu24/BeanTeam",
    deployedLink: "https://feed-your-bean.herokuapp.com/",
    img: "./Assets/Social-Media-Icons/Feed_Your_Bean.png",
    tech:
      "MERN, Semantic UI, Passport, Password Strength, Youtube React, CSS, Adobe",
    description:
      "The motivation for this application came from wanting to create an application that could compile a list of videos to help coding students learn more about the coding languages during their time in a coding bootcamp.",
  },

  {
    title: "Provider Portal",
    github: "https://github.com/speloqu24/Provider-Portal",
    deployedLink: "https://calm-forest-80939.herokuapp.com/",
    img: "./Assets/Social-Media-Icons/Provider Portal.png",
    tech: "JS, Passport, CSS, MySQL, Express",
    description:
      "Provider Portal is a non intimidating CRM (Customer Relationship Management) created for start up health-care companies or clinics. This application allows the user to link clients to providers as well as store contact information and in the future documents specific to their relationship with the client.",
  },
  {
    title: "Employee Directory",
    github: "https://github.com/speloqu24/employee_directory",
    deployedLink: "https://employee-directory-srp.netlify.app/",
    img: "./Assets/Social-Media-Icons/Employee_Direct_Img.png",
    tech: "JS, axios, randomuser.me API, REACT",
    description:
      "Using an API call a to random-user, this application displays a table of 100 employees. These employees can be searched and displayed alphabetically by clicking on the Name header.",
  },
  {
    title: "Budget Tracker",
    github: "https://github.com/speloqu24/Budget_Tracker",
    deployedLink: "https://shrouded-citadel-91338.herokuapp.com/",
    img: "./Assets/Social-Media-Icons/BudgetTrackerUI.png",
    tech: "JS, Mongoose, Mongo, Express, ServiceWorker",
    description:
      "This application allows users to track their income and expenses. Using the budget tracker both online and offline has proven to be useful to those who are trying to track what they spend.",
  },
  {
    title: "Alcohol Archives",
    github: "https://github.com/SterlingOrth/Alcohol_Archives",
    deployedLink: "https://sterlingorth.github.io/Alcohol_Archives/",
    img: "./Assets/Social-Media-Icons/AlcoholArchives.png",
    tech: "JS, API call, jQuery, CSS, HTML",
    description:
      "Here is a website which generates a selected movie, description and rating based on a genre. This application will also generate a beverage to match. An application created to assist the indecisive, alcohol-loving (or not) moviegoer.",
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
          tech={project.tech}
          deployedLink={project.deployedLink}
          img={project.img}
        />
      ))}
    </>
  );
}

export default Portfolio;
