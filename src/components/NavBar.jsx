import "./NavBar.css";
import logo from "../assets/logo.jpeg";
import { useState, useRef } from "react";
import nav_underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.png";
import menu_close from "../assets/menu_close.png";
const Navbar = () => {
  const [menu, setMenu] = useState("about");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Website Logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu open"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="menu close"
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
            {menu == "home" ? <img src={nav_underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>{" "}
            {menu == "about" ? <img src={nav_underline} /> : <></>}
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>{" "}
            {menu == "contact" ? <img src={nav_underline} /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
