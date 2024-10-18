import call from "../assets/call.svg";
import mail from "../assets/email.svg";
import location from "../assets/location.svg";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently available to work on any projects.Please reach out to
            me for any opportunities on frontend roles.Thank you.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="email Icon" />
              <p>srikanthchowdary1020@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="email Icon" />
              <p>+1 508-849-1994</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="email Icon" />
              <p>15 Vinton st, Worcester, MA-01605</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlfor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlfor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlfor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Write your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
