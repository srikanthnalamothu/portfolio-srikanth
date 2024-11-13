import call from "../assets/call.svg";
import mail from "../assets/email.svg";
import location from "../assets/location.svg";
import "./ContactForm.css";
const ContactForm = () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3f9867be-b36f-40b3-9110-44afcd4fb81e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    name.value = "";
    email.value = "";
    message.value = "";
  };

  return (
    <div id="contact" className="contact">
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
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            id="message"
            placeholder="Write your message here"
            required
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
