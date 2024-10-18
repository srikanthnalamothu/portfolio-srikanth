import profile from "../assets/profile.png";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Srikanth Nalamothu" />
        </div>
        <div className="about-right">
          <div className="about-description">
            <p>
              As a passionate web developer with over two years of experience, I
              thrive on creating user-friendly and efficient web applications.
              My journey into the tech world began with a fascination for how
              websites work, which led me to pursue a degree in Computer
              Science. Since then, I’ve honed my skills in HTML, CSS,
              JavaScript, and various frameworks, allowing me to craft
              responsive and dynamic web solutions. I believe in the power of
              clean code and collaborative teamwork, and I’m always eager to
              learn new technologies to enhance my craft.
            </p>
          </div>
          <div className="about-skills">
            <h1>SKILLS</h1>
            <div className="about-skill">
              <p>HTML5 & CSS3</p> <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>Reactjs</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Redux</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>{" "}
        <hr />
        <div className="about-achivement">
          <h1>3</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};
export default About;
