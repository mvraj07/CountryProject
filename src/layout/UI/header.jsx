import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-logo">
          <NavLink to="/">WorldAtlas</NavLink>
        </div>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/country">Country</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};
