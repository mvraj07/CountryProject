export const Card = ({ details }) => {
  const { countryName, population, interestingFact, capital } = details;
  return (
    <>
      <div className="card-container">
        <h1>{countryName}</h1>
        <p>
          <span>Capital:</span>
          {capital}
        </p>
        <p>
          <span>Population:</span>
          {population}
        </p>
        <p>
          <span>Interesting Fact:</span>
          {interestingFact}
        </p>
      </div>
    </>
  );
};
