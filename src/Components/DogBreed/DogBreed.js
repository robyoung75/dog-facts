import React from "react";
import "./DogBreed.css";

function DogBreed({ id, url, newBreed }) {
  return (
    <div className="dogBreed">
      <div className="dogBreed__left">
        <img src={url} alt="dog image" />
      </div>

      {newBreed
        ? newBreed.map((breed) => (
            <div className="dogBreed__right" key={breed.id}>
              <h1>{breed.name}</h1>
              <h2>{breed.breed_group} Dog</h2>
              <h3>
                Bred For: <span>{breed.bred_for}</span>
              </h3>
              <h3>
                Breed Temperament: <span>{breed.temperament}</span>
              </h3>
              <h3>Life span: {breed.life_span}</h3>
            </div>
          ))
        : null}
    </div>
  );
}

export default DogBreed;
