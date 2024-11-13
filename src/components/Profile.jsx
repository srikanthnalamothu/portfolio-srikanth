import ProfileImg from "../assets/Profile.png";
import "./Profile.css";
const Profile = () => {
  return (
    <div id="home" className="profile">
      <img src={ProfileImg} alt="Srikanth Nalamothu" />
      <h1>I'm Srikanth Nalamothu, FrontEnd Developer</h1>
      <p>
        As a front-end developer with over two years of experience, I specialize
        in crafting dynamic and responsive web applications that prioritize user
        experience and accessibility. Proficient in
        <b> HTML5, CSS3, and JavaScript</b>, I leverage modern framework
        <b> React</b> to build interactive interfaces that seamlessly adapt
        across devices. My collaborative approach allows me to work closely with
        designers and back-end developers, ensuring that each project reflects a
        harmonious balance of functionality and aesthetic appeal. Passionate
        about continuous learning, I stay updated with the latest trends and
        best practices to deliver high-quality, engaging digital experiences.
      </p>
      <div className="profile-actions">
        <div className="profile-connect">Connect with me</div>
        <div className="profile-resume">Resume</div>
      </div>
    </div>
  );
};
export default Profile;
