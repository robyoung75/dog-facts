import React, { useState } from "react";
import DogBreed from "../DogBreed/DogBreed";

function DogList({ breeds }) {
  return (
    <div className="dogList">
      {breeds
        ? breeds.map((breed) => (
            <DogBreed
              key={breed.id}
              url={breed.url}
              id={breed.id}
              newBreed={breed.breeds}
            />
          ))
        : null}
    </div>
  );
}

export default DogList;
