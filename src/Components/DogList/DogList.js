import React, { useState } from "react";
import { getBreedImages } from "../../functions/requests";
import DogBreed from "../DogBreed/DogBreed";
import "./DogList.css";

function DogList({ randomBreed, breedImages }) {
  let imagesReduced = [];
  if (breedImages) {
    for (let i = 0; i < 5; i++) {
      imagesReduced.push(breedImages[i]);
    }
    console.log(imagesReduced);
  }

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

      {breedImages
        ? imagesReduced.map((image) => (
            <img key={image} className="dogList__image" src={image}></img>
          ))
        : null}
    </div>
  );
}

export default DogList;
