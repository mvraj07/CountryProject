import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header-section">
      <div className="container grid grid-two-cols">
        <div className="logo">
          <NavLink to="/" className="navlink">
            <h1>AtlasWorld</h1>
          </NavLink>
        </div>
        <ul className="nav-flex">
          <NavLink to="/" className="navlink">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="navlink">
            <li>About</li>
          </NavLink>
          <NavLink to="/country" className="navlink">
            <li>Country</li>
          </NavLink>
          <NavLink to="/contact" className="navlink">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};
