import React, { useEffect, useState } from "react";
import DogButtons from "../DogButtons/DogButtons";
import DogList from "../DogList/DogList";
import "./Dog.css";
import {
  axiosGetAllBreeds,
  axiosGetBreedByName,
  axiosGetAllImages,
  axiosGetRandomBreed,
} from "../../functions/requests";

function Dog() {
  const [axiosAllBreeds, setAxiosAllBreeds] = useState();
  const [axiosBreedByName, setAxiosBreedByName] = useState();
  const [axiosAllImages, setAxiosAllImages] = useState();
  const [axiosRandomBreed, setAxiosRandomBreed] = useState();

  useEffect(async () => {
    // setBreedList returns a fairly useless list of dog but no info just a
    // list. Used to populate the dropdown menu Probably can set this with full
    // access.

    let reqAllBreeds = await axiosGetAllBreeds;
    setAxiosAllBreeds(reqAllBreeds.data);

    let reqBreedByName = await axiosGetBreedByName;
    setAxiosBreedByName(reqBreedByName);

    let reqAllImages = await axiosGetAllImages;
    setAxiosAllImages(reqAllImages);

    let reqRandomBreed = await axiosGetRandomBreed();
    setAxiosRandomBreed(reqRandomBreed);

    
  }, []);

  // function sets randomBreed. A click on search random dog button fires this
  // fuction returning a random image and data about a dog.
  async function handleClick(e) {
    e.preventDefault()    
    let reqRandomBreed = await axiosGetRandomBreed();
    setAxiosRandomBreed(reqRandomBreed);
  }

  // function sets breedImages. A change in the dropdown menu
  // fires this function returning 5 images.
  async function handleChange(e) {}

  return (
    <div className="dog">
      <DogButtons
        handleClick={handleClick}
        handleChange={handleChange}
        axiosAllBreeds={axiosAllBreeds}
      />
      <DogList axiosRandomBreed={axiosRandomBreed}/>
    </div>
  );
}

export default Dog;
