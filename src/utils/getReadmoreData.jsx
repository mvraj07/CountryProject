import { getCountryDetail } from "../api/postApi";

export const getReadmoreData = async ({ params }) => {
  try {
    console.log(params);
    const res = await getCountryDetail(params.countryName);

    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};
