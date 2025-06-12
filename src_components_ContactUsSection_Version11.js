import * as React from "react";

export default function ContactUsSection() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Ready to discuss your next project or have questions?<br />
        Fill out the form below and our team will get back to you promptly.
      </p>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="contact-name">Name</label>
        <input type="text" id="contact-name" name="name" required placeholder="Your Name" />
        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" required placeholder="you@email.com" />
        <label htmlFor="contact-phone">Phone Number</label>
        <input type="tel" id="contact-phone" name="phone" required placeholder="(555) 555-5555" />
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4" required placeholder="How can we help you?"></textarea>
        <button type="submit">Send Message</button>
        {submitted && (
          <div className="contact-success" style={{ color: "#15803d", fontWeight: 600, marginTop: "1.2em" }}>
            Thank you! Your message has been sent.
          </div>
        )}
      </form>
    </section>
  );
}