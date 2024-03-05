import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <hr />
      <div className="contact-box">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p>
            <span>
              <SiGmail />
            </span>
            bibek9818917036@gmail.com
          </p>
          <div className="social-icon">
            <Link to="https://www.linkedin.com/in/bibek-shrestha-86a91318b/">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/bibek190">
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="contact-right">
          <form action="" className="contact-form">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
