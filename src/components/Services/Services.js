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
              <h2>UI/UX Design</h2>
            </div>

            <ul className="service_list">
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </ul>
          </article>
          {/* End of UI/UX  */}
          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className="service_list">
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </ul>
          </article>
          {/* End of web development  */}
          <article className="service">
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service_list">
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              <BiCheck className="service_list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </ul>
          </article>
          {/* End of content creation */}
        </div>
      </section>
    );
};

export default Services;