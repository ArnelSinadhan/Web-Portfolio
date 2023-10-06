import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <h1 className="logo">AS</h1>
      <nav>
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        <NavLink className="nav-links" to="about">
          About
        </NavLink>
        <NavLink className="nav-links" to="skills">
          Skills
        </NavLink>
        <NavLink className="nav-links" to="project">
          Projects
        </NavLink>
        <NavLink className="nav-links" to="contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
