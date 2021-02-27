//singular component
import { Card } from "semantic-ui-react";
import React from "react";

// PROJECT DISPLAY DETAIL
function Project(props) {
  return (
    <>
      <div className="row prow">
        <div className="col-md-6">
          <img className="projectImg" src={props.img} alt={props.title} />
        </div>
        <div className="col-md-6 proDets flex-wrap">
          <h1>
            {props.title}
            <a className="inline-link " href={props.github} target="_blank">
              <img
                id="gitIcon"
                src="./Assets/Social-Media-Icons/Github.png"
                alt={"GitHub"}
              />
            </a>
          </h1>
          <hr />
          <p className="description">
            {" "}
            {props.description}
            <a
              className="inline-link deployedLink"
              href={props.deployedLink}
              target="_blank"
            >
              Deployed Link
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Project;
