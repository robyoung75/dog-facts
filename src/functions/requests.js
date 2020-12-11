// api request function

import axios from "axios";
import cors from "cors";

const apiKey = "9d214f6b-6207-4c43-bc89-3efa18e2b42f";
const URL = "https://thedogapi.com/v1/images?";

const axiosGetAllBreeds = axios.get(
  "https://api.thedogapi.com/v1/breeds?limit=200",
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
    },
  }
);

const axiosGetBreedByName = axios.get(
  "https://api.thedogapi.com/v1/breeds/search?q=bass",
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
    },
  }
);

// get all public images
const axiosGetAllImages = axios.get(
  `https://api.thedogapi.com/v1/images/search?limit=100`,
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "9d214f6b-6207-4c43-bc89-3efa18e2b42f",
    },
  }
);

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

const getBreedImages = async (targetValue, fullAccess, breedList) => {
  try {
    if (targetValue === "afghan hound") {
      targetValue = "hound";
    } else if (targetValue === "african hunting dog") {
      targetValue = "african";
    } else if (targetValue === "airedale terrier") {
      targetValue = "airedale";
    } else if (targetValue === "alaskan husky") {
      targetValue = "husky";
    } else if (targetValue === "alaskan malamute") {
      targetValue = "malamute";
    } else if (targetValue === "american bulldog") {
      // map bulldogs and make it random of the choice.
      targetValue = "bulldog";
    } else if (targetValue === "american eskimo dog") {
      targetValue = "eskimo";
    } else if (targetValue === "american eskimo dog (miniature)") {
      targetValue = "eskimo";
    } else if (targetValue === "american pit bull terrier") {
      targetValue = "pitbull";
    } else if (targetValue === "american staffordshire terrier") {
      // map bull terrier for staffordshire
      targetValue = "bullterrier";
    } else if (targetValue === "appenzeller sennenhund") {
      targetValue = "appenzeller";
    } else if (targetValue === "australian cattle dog") {
      targetValue = "cattledog";
    } else if (targetValue === "australian kelpie") {
      targetValue = "kelpie";
    } else if (targetValue === "australian shepherd") {
      // map australian
      targetValue = "australian";
    } else if (targetValue === "australian terrier") {
      targetValue = "terrier";
    } else if (targetValue === "basset bleu de gascogne") {
      targetValue = "hound";
    }

    let response = await fetch(
      `https://dog.ceo/api/breed/${targetValue}/images`
    );
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  axiosGetAllBreeds,
  axiosGetBreedByName,
  axiosGetAllImages,
  getRandomBreed,
};
