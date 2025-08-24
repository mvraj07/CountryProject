import CardData from "../api/countryData.json";
export const About = () => {
  return (
    <section className="section-about">
      <div className="container about-flex">
        <div className="about-heading  about-flex">
          <h2>Here are the interesting facts</h2>
          <h2> We are proud of</h2>
        </div>
        <div className="about-cards">
          {CardData.map((card) => {
            return (
              <div className="card" key={card.id}>
                <p className="cardTitle">{card.countryName}</p>
                <p>
                  <span>Capital: </span>
                  {card.capital}
                </p>
                <p>
                  <span>Population: </span> {card.population}
                </p>
                <p>
                  <span>Interesting Fact: </span> {card.interestingFact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
