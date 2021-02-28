import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      <div className="jumbotron">
        <img
          class="textwrap rounded-circle"
          id="blueHead"
          src="./Assets/Social-Media-Icons/SPeloquinBlue.png"
          alt="headshot"
        />
        <p className="rounded-circle">COLORADO BASED FULL STACK DEVELOPER</p>
        <img
          className="html skillsimage"
          src="Assets/Social-Media-Icons/html5.png"
          alt="html5"
        />
        <img
          className="CSS3 skillsimage"
          src="Assets/Social-Media-Icons/css3.png"
          alt="css3"
        />
        <img
          className="mern"
          src="Assets/Social-Media-Icons/MERN-logo.png"
          alt="jq"
        />
        <img
          className="mysql skillsimage"
          src="Assets/Social-Media-Icons/mysql-.png"
          alt="mysql"
        />
        <img
          className="npm skillsimage"
          src="Assets/Social-Media-Icons/npm-logo.png"
          alt="npm"
        />
        {/* <p className="lead"></p> */}
        {/* <hr className="my-4" /> */}
      </div>
      {/* <div className="skills">
        <hr />
        <h3>Technologies</h3>
        <hr />
        <
      </div> */}
    </>
  );
}

export default Home;
