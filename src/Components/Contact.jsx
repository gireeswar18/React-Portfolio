import React, { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const myform = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm('service_lo62nxr', 'template_16crh0s', myform.current, {
        publicKey: '1NbvlhEblvsdiMRar',
      })

      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Message Sent Successfully!")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactSection">
    <div className="container contact">
      <div className="education-title">
        <h4>Contact</h4>
      </div>
      <div className="row justify-content-center">
        <form ref={myform} onSubmit={sendEmail} className="col-md-6">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <br />
            <input
              type="text"
              className="contact-ip"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div className="mb-3">
            <label for="email-id" className="form-label">
              Email address
            </label>
            <br />
            <input
              type="email"
              className="contact-ip"
              id="email-id"
              name="user_email"
              required
            />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">
              Message
            </label>
            <br />
            <textarea
              className="contact-ip"
              id="message"
              name="message"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Send Message{" "}
            <FaPaperPlane
              style={{
                color: "white",
                background: "transparent",
                margin: "0 0 0 8px",
              }}
            />
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}
