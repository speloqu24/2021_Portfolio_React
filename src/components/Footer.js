import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    instagram: "https://www.instagram.com/speloqu24/?hl=en",
    github: "https://github.com/speloqu24",
    twitter: "https://twitter.com/mkehappn?lang=en",
    linkedIn: "https://www.linkedin.com/in/samantha-peloquin/",
  },
];

function Footer() {
  return (
    <footer className="fixed-bottom">
      <p id="footerText ml-auto" style={{ color: "black", float: "left" }}>
        © Samantha Peloquin
      </p>
      <Link id="socialIcon" to={socialLinks.instagram} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/instagram.png"
          alt="instagram"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.github} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/Github.png"
          alt="Github"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.twitter} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/twitter.png"
          alt="twitter"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.linkedIn} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/linkedin.png"
          alt="linkedIn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
