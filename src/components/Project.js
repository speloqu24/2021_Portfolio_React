//singular component
import React from "react";
import { Link } from "react-router-dom";

// PROJECT DISPLAY DETAIL
function Project(props) {
  return (
    <>
      <button
        type="button"
        class="portBtn btn"
        style={{ background: "black", color: "white", margin: "2vw" }}
      >
        <Link to={props.deployedLink}>{props.title}</Link>
      </button>
    </>
  );
}

export default Project;
