import React,{useState} from "react";
import { Link } from "react-scroll";
import logo from "../images/logo1.png";
export default function NavBars() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.screenY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label for="menu-icon" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#">HOME</Link>
        </li>
        <li>
          <Link to="#">Product</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
