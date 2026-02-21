import { useLoaderData, useNavigate } from "react-router-dom";

export const ReadMore = () => {
  // console.log(countryDetails);

  const data = useLoaderData();

  const nav = useNavigate();

  const langs = Object.values(data.languages).join(", ");

  const currencies = Object.values(data.currencies)
    .map((cur) => {
      return cur.name;
    })
    .join(", ");

  return (
    <div className="readmore-page">
      <div className="card-container container readmore">
        <img src={data.flags.svg} alt="" />
        <div className="country-content">
          <h2>{data.name.common}</h2>
          <p>
            <span>Official Name: </span>
            {data.name.official}
          </p>
          <p>
            <span>capital: </span>
            {data.capital}
          </p>
          <div className="details">
            <p>
              <span>region: </span>
              {data.region}
            </p>
            <p>
              <span>Sub Region: </span>
              {data.subregion}
            </p>
            <p>
              <span>Population: </span>
              {data.population.toLocaleString()}
            </p>
            <p>
              <span>Languages: </span>
              {langs}
            </p>
            <p>
              <span>Currencies: </span>
              {currencies}
            </p>
          </div>
        </div>

        <button
          className="button read-more-button"
          onClick={() => {
            nav(-1);
          }}
        >
          GO Back{" "}
        </button>
      </div>
    </div>
  );
};
