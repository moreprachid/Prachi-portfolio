import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-card contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> prachimore@email.com</p>
        <p><strong>Phone:</strong> +91 9372076507</p>
        <p><strong>Location:</strong> Mumbai, India</p>
      </div>

      <div className="contact-card contact-form">
        <h2>Send a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
