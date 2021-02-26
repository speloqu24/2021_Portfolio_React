//singular component
import React from "react";
import { Link } from "react-router-dom";

// PROJECT DISPLAY DETAIL
function Project(props) {
  return (
    <>
      <div className="row prow">
        <div className="col-md-6">
          {/* <Link to={props.page}>{props.title}</Link> */}
          <img className="projectImg" src={props.img} alt={props.title} />
        </div>
        <div className="col-md-6">
          <h1>
            {props.title}
            <Link className="inline-link" to={props.github}>
              <img
                id="gitIcon"
                src="./Assets/Social-Media-Icons/Github.png"
                alt={"GitHub"}
              />
            </Link>
          </h1>
          <hr />
          <p> {props.description}</p>
          <a
            className="inline-link"
            href="https://sterlingorth.github.io/Alcohol_Archives/"
          ></a>
        </div>
      </div>
      {/* <button
        type="button"
        class="portBtn btn"
        style={{ background: "black", color: "white", margin: "2vw" }}
      >
        <Link to={props.page}>{props.title}</Link>
      </button> */}
    </>
  );
}

export default Project;
