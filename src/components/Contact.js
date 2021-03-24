import React from "react";

function Contact() {
  return (
    <>
      <div className="row prow">
        <div className="col-md-6">
          <img
            class="textwrap rounded-circle"
            id="blueHead"
            src="./Assets/Social-Media-Icons/SPeloquinBlue.png"
            alt="headshot"
          />
        </div>
        <div className="col-md-6 proDets flex-wrap">
          <h3>Contact Me:</h3>
          <hr />
          <h6>E: Speloqu24@Gmail.com</h6>
          <h6>P: 262.287.3998</h6>
          <a
            id="socialIcon"
            href="https://www.linkedin.com/in/samantha-peloquin/"
            target="_blank"
          >
            LinkedIn
          </a>
          <br></br>
          <a
            id="socialIcon"
            href="https://github.com/speloqu24"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
