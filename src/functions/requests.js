// api request function

import axios from "axios";

const axiosGetAllBreeds = axios.get(
  "https://api.thedogapi.com/v1/breeds?limit=200",
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
    },
  }
);

const axiosGetBreedByName = async (query) => {
  const response = await axios.get(
    `https://api.thedogapi.com/v1/breeds/search?q=${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
      },
    }
  );
  return response.data;
};

const getRandomBreed = async () => {
  try {
    let response = await fetch("https://api.thedogapi.com/v1/images/search");
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// get all public images
const axiosGetAllImages = axios.get(
  `https://api.thedogapi.com/v1/images/search?limit=100&order=asc`,
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
    },
  }
);

const axiosGetAllImages_arr2 = axios.get(
  `https://api.thedogapi.com/v1/images/search?page=1&limit=80&order=asc`,
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
    },
  }
);

export {
  axiosGetAllBreeds,
  axiosGetBreedByName,
  axiosGetAllImages,
  axiosGetAllImages_arr2,
  getRandomBreed,
};
