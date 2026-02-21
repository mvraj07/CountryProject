import axios from "axios";
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountriesData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

export const getCountryDetail = (countryName) => {
  // console.log(countryName);
  return api.get(
    `/name/${countryName}?fields=name,population,region,subregion,capital,currencies,flags,languages`,
  );
};
