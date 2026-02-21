import { NavLink } from "react-router-dom";

export const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <NavLink to="/country">All</NavLink>
      <NavLink to="/country?region=Africa">Africa</NavLink>
      <NavLink to="/country?region=Asia">Asia</NavLink>
      <NavLink to="/country?region=Europe">Europe</NavLink>
    </div>
  );
};
