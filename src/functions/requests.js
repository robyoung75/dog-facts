// api request function

const apiKey = "9d214f6b-6207-4c43-bc89-3efa18e2b42f"
const URL = "https://thedogapi.com/v1/images?"

// access db
const getFullAccess = async () => {
  try {
    let response = await fetch("https://api.thedogapi.com/v1/breeds")
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch(error) {
    console.log(error)
  }
}
// https://thedogapi.com/v1/images?api_key=9d214f6b-6207-4c43-bc89-3efa18e2b42f
// get random breed
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

// get all breeds list.
const getBreedList = async () => {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

const getBreedImages = async (targetValue) => {
  try {
    let response = await fetch(`https://dog.ceo/api/breed/${targetValue}/images`);
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getRandomBreed, getBreedList, getBreedImages, getFullAccess };
