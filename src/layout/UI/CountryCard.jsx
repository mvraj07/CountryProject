import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ curCountry }) => {
  // console.log(curCountry);
  const { flags, population, region, capital, name } = curCountry;
  // console.log(name.common);
  return (
    <div className="card-container country-card ">
      <img src={flags.svg} alt="" />
      <div className="country-content">
        <h2>
          {name.common.length >= 14
            ? name.common.slice(0, 14) + "..."
            : name.common}
        </h2>
        <div className="details">
          <p>
            <span>Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span>region: </span>
            {region}
          </p>
          <p>
            <span>capital: </span>
            {capital}
          </p>
        </div>
      </div>
      <NavLink to={`/country/${name.common}`}>
        <button className="read-more-button">
          Read More <FaLongArrowAltRight />
        </button>
      </NavLink>
    </div>
  );
};
