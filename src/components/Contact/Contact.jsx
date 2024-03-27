import React, { useRef } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_hmq2rug", "template_xjioh5c", form.current, {
        publicKey: "i5U-nQG7sOsQEJdY3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Thankyou for your message.Will get back to you soon");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Sorry,something is wrong");
        }
      );
    setTimeout(() => e.target.reset(), "1000");
  };

  return (
    <section className="contact">
      <h2>Get In Touch</h2>

      <div className="contact-box">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <hr />
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
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn btn2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
