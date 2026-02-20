import countryData from "../api/countryData.json";
import { Card } from "../components/Card";

export const About = () => {
  return (
    <section className="container about-section">
      <h2 className="common-heading">
        Here are the Interesting Facts <br />
        We are proud of
      </h2>
      <div className="cards">
        {countryData.map((curCountry) => (
          <Card key={curCountry.id} details={curCountry} />
        ))}
      </div>
    </section>
  );
};
