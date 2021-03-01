import React from "react";

function Footer() {
  return (
    <footer className="fixed-bottom">
      <p id="footerText ml-auto" style={{ color: "black", float: "left" }}>
        © Samantha Peloquin
      </p>
      <a
        id="socialIcon"
        href="https://www.linkedin.com/in/samantha-peloquin/"
        target="_blank"
      >
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/linkedin.png"
          alt="linkedIn"
        />
      </a>
      <a id="socialIcon" href="https://github.com/speloqu24" target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/Github.png"
          alt="Github"
        />
      </a>
    </footer>
  );
}

export default Footer;
