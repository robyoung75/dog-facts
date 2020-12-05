// api request function

// get breed
let getDogBreed = async (setDogBreed) => {
  try {
    let response = await fetch("https://api.thedogapi.com/v1/images/search");
    let jsonResponse = await response.json();

    if (jsonResponse) {
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

function assEater() {
  console.log("I eat ass");
}

export { getDogBreed, assEater };
