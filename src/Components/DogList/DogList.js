import React, { useState } from "react";
import DogBreed from "../DogBreed/DogBreed";

function DogList({ randomBreed }) {
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
    </div>
  );
}

export default DogList;
