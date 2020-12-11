import React, { useEffect, useState } from "react";
import DogButtons from "../DogButtons/DogButtons";
import DogList from "../DogList/DogList";
import "./Dog.css";
import {
  axiosGetAllBreeds,
  axiosGetBreedByName,
  axiosGetAllImages,
  getRandomBreed,
} from "../../functions/requests";
import { ListItemSecondaryAction } from "@material-ui/core";

function Dog() {
  const [axiosAllBreeds, setAxiosAllBreeds] = useState();
  const [axiosBreedByName, setAxiosBreedByName] = useState();
  const [axiosAllImages, setAxiosAllImages] = useState();

  const [randomBreed, setRandomBreed] = useState();

  useEffect(async () => {
    // setBreedList returns a fairly useless list of dog but no info just a
    // list. Used to populate the dropdown menu Probably can set this with full
    // access.

    let resAllBreeds = await axiosGetAllBreeds;
    setAxiosAllBreeds(resAllBreeds.data);

    // let resBreedByName = await axiosGetBreedByName;
    // setAxiosBreedByName(resBreedByName);

    let resAllImages = await axiosGetAllImages;
    setAxiosAllImages(resAllImages.data);

    let resRandomBreed = await getRandomBreed();
    setRandomBreed(resRandomBreed);
  }, []);

  // function sets randomBreed. A click on search random dog button fires this
  // fuction returning a random image and data about a dog.
  async function handleClick(e) {
    e.preventDefault();
    let data = await getRandomBreed();
    setRandomBreed(data);
  }

  // function sets breedImages. A change in the dropdown menu
  // fires this function returning 5 images.
  async function handleChange(e) {
    let value = await e.target.value;
    // let submitValue = await value.toLowerCase();
    // let data = await axiosGetBreedByName(submitValue);
    let breedName = axiosAllImages.map((image) =>
      image.breeds.findIndex((element) => {
        if (element.name === value) {
          setAxiosBreedByName(image);
        }
      })
    );
    if (breedName !== -1) {
      console.log(breedName);
    }
  }
  return (
    <div className="dog">
      <DogButtons
        handleClick={handleClick}
        handleChange={handleChange}
        axiosAllBreeds={axiosAllBreeds}
      />
      <DogList
        randomBreed={randomBreed}
        axiosBreedByName={axiosBreedByName}
        axiosAllImages={axiosAllImages}
      />
    </div>
  );
}

export default Dog;
