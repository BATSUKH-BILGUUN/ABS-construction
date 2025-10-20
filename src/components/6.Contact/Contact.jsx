import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  /** @type {import('react').MutableRefObject<HTMLFormElement | null>} */
  const form = useRef(null);
  const [status, setStatus] = useState("");

  /**
   * Handle form submission.
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      setStatus("Form reference is not available.");
      return;
    }

    emailjs
      .sendForm(
        "ABS.construction",
        "template_5uxsaes", 
        form.current,
        "Rh6AhpgHYt4TOG35B" 
      )
      .then(
        (result) => {
          console.log("SUCCESS", result.text);
          setStatus("Message sent successfully!");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error("FAILED", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left - Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            Have questions or need a quote? Fill out the form below to get in
            touch with us!
          </p>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
          <p>{status}</p>
        </form>

        <div className="contact-info">
          <h3>ABS construction information</h3>
          <p>
            <FaMapMarkerAlt /> <strong>Address:</strong> 123 Main St, City,
            Country
          </p>
          <p>
            <FaPhoneAlt /> <strong>Mobile:</strong> +123 456 7890
          </p>
          <p>
            <FaEnvelope /> <strong>Email:</strong> mail@abs.com
          </p>
          <p>
            <strong>Business Hours:</strong> Mon-Fri 9am - 6pm
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;