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
                <small>fresher</small>
              </article>
              <article className="about__card">
                {/* <FaAward className="about__icon"></FaAward>
                 */}
                <FiUsers className="about__icon"></FiUsers>
                <h5>Client</h5>
                <small>fresher</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"></VscFolderLibrary>
                <h5>Projects</h5>
                <small>10+</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, suscipit explicabo? Excepturi libero natus a ea
              debitis aut ut illo, veritatis aspernatur aliquam nesciunt quasi
              architecto! Adipisci iure nostrum fugit.
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