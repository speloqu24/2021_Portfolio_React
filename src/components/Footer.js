import React from "react";

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
      <a id="socialIcon" href={socialLinks.instagram} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/instagram.png"
          alt="instagram"
        />
      </a>
      <a id="socialIcon" href={socialLinks.github} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/Github.png"
          alt="Github"
        />
      </a>
      <a id="socialIcon" to={socialLinks.twitter} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/twitter.png"
          alt="twitter"
        />
      </a>
      <a id="socialIcon" to={socialLinks.linkedIn} target="_blank">
        <img
          className="icons"
          src="./Assets/Social-Media-Icons/linkedin.png"
          alt="linkedIn"
        />
      </a>
    </footer>
  );
}

export default Footer;
