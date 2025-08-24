import { useEffect, useTransition, useState } from "react";
import { Loader } from "../layout/UI/loader";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../layout/countryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
      console.log(res.data);
    });
  }, []);
  {
    isPending && <Loader />;
  }

  return (
    <div className="countyr-section">
      <ul className="container grid grid-three-cols">
        {country.map((curcountry, index) => {
          return <CountryCard country={curcountry} key={index} />;
        })}
      </ul>
    </div>
  );
};
