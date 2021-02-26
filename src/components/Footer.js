import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    facebook: "https://www.facebook.com/samantharaepeloquin/",
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
      <Link id="socialIcon" to={socialLinks.facebook}>
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/facebook.png"
          alt="facebook"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.instagram}>
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/instagram.png"
          alt="instagram"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.github}>
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/Github.png"
          alt="Github"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.twitter}>
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/twitter.png"
          alt="twitter"
        />
      </Link>
      <Link id="socialIcon" to={socialLinks.linkedIn}>
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
