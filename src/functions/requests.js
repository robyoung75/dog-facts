// api request function

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

// get breed list, will populate the dropdown list in the app.
const getBreedList = async () => {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }

  } catch(error) {
    console.log(error);
  }
}



export { getRandomBreed, getBreedList };
