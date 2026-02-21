import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CountryCard } from "../layout/UI/CountryCard";
import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { DropdownMenu } from "../layout/UI/DropdownMenu";

export const Country = () => {
  // const [countries, setcountries] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const countries = useLoaderData();
  const handleDropdownMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="country-section">
      <div className="features container">
        <div className="search-filter">
          <input type="text" placeholder="Search for Country" />
        </div>
        <div className="ascending-filter">
          <button>Asc</button>
        </div>
        <div className="descending-filter">
          <button>Desc</button>
        </div>
        <div className="Sort-filter">
          <div className="dropdown" onClick={handleDropdownMenu}>
            <NavLink to="/country?region=Asia">
              All
              <IoIosArrowDropdownCircle />
            </NavLink>
            {toggleMenu ? <DropdownMenu /> : ""}
          </div>
        </div>
      </div>

      <div className="container cards">
        {countries.map((curCountry) => {
          return (
            <CountryCard curCountry={curCountry} key={curCountry.name.common} />
          );
          // console.log(curCountry);
        })}
      </div>
    </div>
  );
};
