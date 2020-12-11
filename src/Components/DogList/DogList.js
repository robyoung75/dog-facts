import React, { useState } from "react";
import { getBreedImages } from "../../functions/requests";
import DogBreed from "../DogBreed/DogBreed";
import "./DogList.css";

function DogList({ randomBreed, axiosBreedByName, axiosAllImages }) {
  // let imagesReduced = [];
  // if (breedImages) {
  //   for (let i = 0; i < breedImages.length; i++) {
  //     imagesReduced.push(breedImages[i]);
  //   }
  //   console.log(imagesReduced);
  // }

  return (
    <div className="dogList">
      {randomBreed
        ? randomBreed.map((breed) => (
            <DogBreed
              key={breed.id}
              url={breed.url}
              id={breed.id}
              newBreed={breed.breeds}
            />
          ))
        : null}

      {/* {axiosBreedByName
        ? axiosBreedByName.map((image) => (
            <>
              <p>{image.name}</p>
              <p>{image.bred_for}</p>
              <p>{image.breed_group}</p>
              <p>{image.life_span}</p>
              <p>{image.temperment}</p>
              <p>{image.id}</p>
            </>
          ))
        : null} */}
      <div>
        {axiosBreedByName ?  <img src={axiosBreedByName.url} alt="test" /> : null }
       
        {axiosBreedByName ?  axiosBreedByName.breeds.map(breed => console.log(breed.name)) : null }
   
      </div>
    </div>
  );
}

export default DogList;
