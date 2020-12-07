import React, { useEffect, useState } from "react";
import DogButtons from "../DogButtons/DogButtons";
import DogList from "../DogList/DogList";
import "./Dog.css";
import {
  getRandomBreed,
  getBreedList,
  getBreedImages,
  getFullAccess,
} from "../../functions/requests";

function Dog() {
  const [breedList, setBreedList] = useState();
  const [randomBreed, setRandomBreed] = useState();
  const [breedImages, setBreedImages] = useState();
  const [fullAccess, setFullAccess] = useState();

  useEffect(async () => {
    setBreedList(null);
    let data = await getBreedList();
    setBreedList(data.message);
    
    
  }, []);

  async function handleFullAccess(e) {
    e.preventDefault()
    setFullAccess(null);
    let data = await getFullAccess();
    setFullAccess(data)
    console.log(data)
  }

  async function handleClick(e) {
    e.preventDefault();
    setRandomBreed(null);
    setBreedImages(null);
    let data = await getRandomBreed();
    setRandomBreed(data);
  }

  async function handleChange(e) {
    setBreedImages(null);
    setRandomBreed(null);
    let data = await getBreedImages(e.target.value);
    setBreedImages(data.message);
  }
  return (
    <div className="dog">
       <DogButtons
        handleClick={handleClick}
        handleChange={handleChange}
        handleFullAccess={handleFullAccess}
        breedList={breedList}
        breedImages={breedImages}
        setBreedImages={setBreedImages}
      />
      <DogList randomBreed={randomBreed} breedImages={breedImages} />
     
    </div>
  );
}

export default Dog;



