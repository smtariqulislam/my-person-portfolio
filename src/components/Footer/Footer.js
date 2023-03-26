import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGithub, FaLinkedin,} from "react-icons/fa";



const Footer = () => {
    return (
      <footer>
        <a href="#home" className="footer_logo">
          TARIQUL
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* <li ><a href="#Testimonials">Testimonials</a></li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a href="https://facbook.com">
            <FaFacebookF></FaFacebookF>
          </a>
          <a href="https://facbook.com">
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://facbook.com">
           
            <FaGithub></FaGithub>
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; TARIQUL Portfolio. All rights reserved.</small>
        </div>
      </footer>
    );
};

export default Footer;