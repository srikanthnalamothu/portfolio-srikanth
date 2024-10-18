import "./NavBar.css";
import logo from "../assets/logo.jpeg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Website Logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};
export default Navbar;
