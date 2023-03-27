import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import{ImWhatsapp} from 'react-icons/im'

const Contact = () => {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon"></MdOutlineEmail>
              <h4>Email</h4>
              <h5>sm.tariqul.islam.cse@gmail.com</h5>
            </article>
            <article className="contact_option">
              <ImWhatsapp className="contact_option-icon"></ImWhatsapp>
              <h4>WhatsApp</h4>
              <h5>+8801400740303</h5>
            </article>
          </div>
          {/* end of the contact options */}
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
};

export default Contact;