import React, { useEffect, useState } from "react";
import DogButtons from "../DogButtons/DogButtons";
import DogList from "../DogList/DogList";
import "./Dog.css";
import '../Header/Header';
import {
  axiosGetAllBreeds,
  axiosGetAllImages,
  axiosGetAllImages_arr2,
  getRandomBreed,
} from "../../functions/requests";
import Header from "../Header/Header";

function Dog() {
  // state using hooks
  const [axiosAllBreeds, setAxiosAllBreeds] = useState();
  const [axiosBreedByName, setAxiosBreedByName] = useState();
  const [axiosAllImages, setAxiosAllImages] = useState();
  const [axiosAllImages_arr2, setAxiosAllImages_arr2] = useState();
  const [randomBreed, setRandomBreed] = useState();
  const [joinedArray, setJoinedArray] = useState();

  useEffect(async () => {
    // sets state to a list of all breeds. Data used to populate the dropdown menu
    let resAllBreeds = await axiosGetAllBreeds;
    setAxiosAllBreeds(resAllBreeds.data);
    // sets state to all images. Currently only the first array is fetched. Need
    // to fetch the second array. Currently LeonBerger is the last dog in the
    // first array.
    let resAllImages = await axiosGetAllImages;
    setAxiosAllImages(resAllImages.data);

    let arr2 = await axiosGetAllImages_arr2;
    setAxiosAllImages_arr2(arr2.data);
  }, []);

  // function sets randomBreed. A click on search random dog button fires this
  // fuction returning a random image and data about a dog.
  async function handleClick() {
    setAxiosBreedByName(null);
    let data = await getRandomBreed();
    setRandomBreed(data);
  }

  async function handleChange(e) {
    setRandomBreed(null);
    let value = await e.target.value;
    let arr1 = axiosAllImages;
    let arr2 = axiosAllImages_arr2;
    let arr3 = await arr1.concat(arr2);
    setJoinedArray(arr3);
    await arr3.map((image) =>
      image.breeds.findIndex((element) => {
        if (element.name === value) {
          setAxiosBreedByName(image);
        }
      })
    );
  }

  return (
    <div className="dog">
      <Header handleChange={handleChange} axiosAllBreeds={axiosAllBreeds} />
      <DogButtons
        handleClick={handleClick}
        handleChange={handleChange}
        axiosAllBreeds={axiosAllBreeds}
      />
      <DogList randomBreed={randomBreed} axiosBreedByName={axiosBreedByName} />
    </div>
  );
}

export default Dog;
