import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      <div className="jumbotron">
        <div className="row">
          <img id="" src="" className="col-md-3 rounded-circle" />
          <h1 className="col-md-9 greeting">
            Hello, I'm Samantha. I develop and create interfaces that are fueled
            by innovation.
          </h1>
          <p className="lead"></p>
          <hr className="my-4" />
        </div>
        <a className="btn btn-primary btn-lg" href="" role="button">
          Portfolio
        </a>
      </div>
    </>
  );
}

export default Home;
