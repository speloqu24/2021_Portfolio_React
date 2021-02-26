import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Triangles from "public/Assets/Triangles.jpg";

function Home() {
  return (
    <>
      <div className="jumbotron">
        <div className="row">
          <h3 className="col-md-9 greeting">
            Hello, I'm Samantha. I develop and create interfaces that are fueled
            by innovation.
          </h3>
          <p className="lead"></p>
          <hr className="my-4" />
        </div>
      </div>
    </>
  );
}

export default Home;
