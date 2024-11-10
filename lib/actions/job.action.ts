// import { JobFilterParams } from "./shared.types";

import { JobFilterParams } from "./shared.types";

// Fetches the user's country based on their IP address.
export const fetchLocation = async (): Promise<string | null> => {
  try {
    const response = await fetch("http://ip-api.com/json/?fields=country");
    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }
    const location = await response.json();
    return location.country;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null; // Return null in case of an error
  }
};

// Fetches a list of all countries
export const fetchCountries = async (): Promise<any[] | null> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return null; // Return null or an empty array in case of error
  }
};

// Fetches jobs based on given filters (query and page number)
export const fetchJobs = async (
  filters: JobFilterParams
): Promise<any[] | null> => {
  const { query, page } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const result = await response.json();
    return result.data || []; // Ensure that we return an empty array if there's no data
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null; // Return null in case of an error
  }
};
