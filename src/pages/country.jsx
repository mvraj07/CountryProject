import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CountryCard } from "../layout/UI/CountryCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { DropdownMenu } from "../layout/UI/DropdownMenu";

export const Country = () => {
  const countries = useLoaderData();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropname, setDropname] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleDropdownSelection = (e) => {
    setDropname(e.target.name);
    setToggleMenu(false);
    setFilteredCountries(filteredCountriesReturn(e));
  };
  const filteredCountriesReturn = (e) => {
    const region = e.target.name;
    if (region.toLowerCase() === "all") {
      return countries;
    } else if (e.target.name === "ascending") {
      console.log("logic reached");
      return countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common),
      );
    } else {
      return countries.filter((curCountry) => {
        if (curCountry.region === region) return curCountry;
      });
    }
  };
  const handleButtonClicks = (e) => {
    console.log("asc clicked");
    setFilteredCountries(filteredCountriesReturn(e));
  };

  return (
    <div className="country-section">
      <div className="features container">
        <div className="search-filter">
          <input type="text" placeholder="Search for Country" />
        </div>
        <div className="ascending-filter">
          <button onClick={handleButtonClicks} name="ascending">
            Asc
          </button>
        </div>
        <div className="descending-filter">
          <button onClick={handleButtonClicks} name="descending">
            Desc
          </button>
        </div>
        <div
          className="Sort-filter"
          onMouseEnter={() => setToggleMenu(true)}
          onMouseLeave={() => setToggleMenu(false)}
        >
          <div className="dropdown">
            <button>
              {dropname}
              <IoIosArrowDropdownCircle />
            </button>
            {toggleMenu ? (
              <DropdownMenu handleDropdownSelection={handleDropdownSelection} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="container cards">
        {filteredCountries.map((curCountry) => {
          // console.log(curCountry);
          return (
            <CountryCard curCountry={curCountry} key={curCountry.name.common} />
          );
          // console.log(curCountry);
        })}
      </div>
    </div>
  );
};
