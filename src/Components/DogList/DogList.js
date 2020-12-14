import React, { useState } from "react";
import { getBreedImages } from "../../functions/requests";
import DogBreed from "../DogBreed/DogBreed";
import SpecificDogBreed from "../SpecificDogBreed/SpecificDogBreed";
import "./DogList.css";

function DogList({ randomBreed, axiosBreedByName }) {
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

      {axiosBreedByName
        ? axiosBreedByName.breeds.map((image) => (
            <SpecificDogBreed
              key={image.id}
              name={image.name}
              bredFor={image.bred_for}
              breedGroup={image.breed_group}
              lifeSpan={image.life_span}
              temperament={image.temperament}
              id={image.id}
              image={axiosBreedByName.url}
            />
          ))
        : null}
    </div>
  );
}

export default DogList;
