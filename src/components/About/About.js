import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about_me-image">
              <img src={ME} alt="AboutImage" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"></FaAward>
                <h5>Experience</h5>
                <small>6month+</small>
              </article>
              <article className="about__card">
                {/* <FaAward className="about__icon"></FaAward>
                 */}
                <FiUsers className="about__icon"></FiUsers>
                <h5>Client</h5>
                <small>2+</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"></VscFolderLibrary>
                <h5>Projects</h5>
                <small>10+</small>
              </article>
            </div>
            <p>
              I believe my unique combination of technical skills and practical
              experience sets me apart from other candidates. My expertise in
              the MERN stack (MongoDB, Express, React, and Node.js), along with
              my completion of several projects using this technology,
              demonstrates my competence and proficiency in full-stack
              development. I am confident that my strong understanding of the
              MERN stack, combined with my dedication and passion for software
              development, make me a strong fit for this role. I am eager to
              bring my skills and experiences to the table and make a meaningful
              contribution to your team
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talks
            </a>
          </div>
        </div>
      </section>
    );
};

export default About;