import { getCountriesData } from "../api/postApi";

export const getCountryData = async () => {
  try {
    const res = await getCountriesData();
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
