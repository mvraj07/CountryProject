export const CountryCard = ({ country }) => {
  const { flags, region, capital } = country;
  return (
    <li className="countrycard card">
      <div className="countryimage">
        <img src={flags.svg} alt={flags.alt} />
      </div>
      <div className="country-info">
        <h2>
          {country.name.common.length > 15
            ? country.name.common.slice(0, 14) + "..."
            : country.name.common}
        </h2>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </li>
  );
};
