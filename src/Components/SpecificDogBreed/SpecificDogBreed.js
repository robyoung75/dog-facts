import React from "react";
import "../SpecificDogBreed/SpecificDogBreed.css"

function SpecificDogBreed({ name, bredFor, breedGroup, lifeSpan, temperment, id, image }) {
  return (
    <div className="specificDogBreed">
      <img src={image} alt="dog image" />

      <div className="specificDogBreed__bottom" key={id}>
        <h1>{name}</h1>
        <h2>{breedGroup} Dog</h2>
        <h3>
          Bred For: <span>{bredFor}</span>
        </h3>
        <h3>
          Breed Temperament: <span>{temperment}</span>
        </h3>
        <h3>
          Life span: <span>{lifeSpan}</span>
        </h3>
      </div>
    </div>
  );
}

export default SpecificDogBreed;
