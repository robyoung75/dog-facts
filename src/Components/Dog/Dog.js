import React, { useEffect, useState } from "react";

import DogList from "../DogList/DogList";
import "./Dog.css";
import "../Header/Header";
import {
  axiosGetAllBreeds,
  axiosGetAllImages,
  axiosGetAllImages_arr2,
  getRandomBreed,
} from "../../functions/requests";
import Header from "../Header/Header";
import coverImage from "../../images/bt.jpg";
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

    // let data = await getRandomBreed();
    // setRandomBreed(data);
  }, []);

  return (
    <div className="dog">
      <Header
        setRandomBreed={setRandomBreed}
        setJoinedArray={setJoinedArray}
        axiosAllBreeds={axiosAllBreeds}
        setAxiosBreedByName={setAxiosBreedByName}
        axiosAllImages={axiosAllImages}
        axiosAllImages_arr2={axiosAllImages_arr2}
      />

      <DogList randomBreed={randomBreed} axiosBreedByName={axiosBreedByName} />

      {!axiosBreedByName && !randomBreed ? (
        <div className="dog__coverImage">
          <h1>The Dog App</h1>
          <img src={coverImage}></img>
        </div>
      ) : null}
    </div>
  );
}

export default Dog;
