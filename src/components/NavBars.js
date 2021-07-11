import React,{useState} from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";
export default function NavBars() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.screenY <= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label for="menu-icon" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={2000}>HOME</Link>
        </li>
        <li>
          <Link to="products" smooth={true} duration={2000}>Product</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={2000}>About</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={2000}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
