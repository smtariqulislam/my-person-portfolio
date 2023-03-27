import React from 'react';
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>Frontend Development</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>creative website design that users like.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>Responsiveness website make that user like.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>The user can easily understand every feature.</p>
              </li>
            </ul>
          </article>
          {/* End of frontend  */}
          <article className="service">
            <div className="service_head">
              <h3>Full-Stack Development</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>
                  Developing front end website architecture.
                </p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>Designing user interactions on web pages.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>Developing back end website applications.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>Creating servers and databases.</p>
              </li>
             
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>Ensuring responsiveness of applications.</p>
              </li>
              
              
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>Designing and developing APIs.</p>
              </li>
             
             
            </ul>
          </article>
          {/* End of full-stack development  */}
          <article className="service">
            <div className="service_head">
              <h3>Teaching CHESS Game</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>How to play chess game</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>How to think the next move and win eassily</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"></BiCheck>
                <p>You can know about the art of chess</p>
              </li>
            </ul>
          </article>
          {/* End of chess learning */}
        </div>
      </section>
    );
};

export default Services;