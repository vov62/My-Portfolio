import React from "react";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/avi-vovgen-0b7119200/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/vov62" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/avi.vovgen/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; A-V, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
