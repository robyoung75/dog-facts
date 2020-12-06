import React, { useEffect, useState } from "react";
import DogButtons from "../DogButtons/DogButtons";
import DogList from "../DogList/DogList";
import "./Dog.css";
import { getRandomBreed, getBreedList } from "../../functions/requests";

function Dog() {
  const [breedList, setBreedList] = useState();
  const [breedNames, setBreedNames] = useState();
  const [randomBreed, setRandomBreed] = useState();
  

  useEffect(async () => {
    
    setBreedList(null);
    setBreedNames(null);
    let data = await getBreedList();
    setBreedList(data.message);
    setBreedNames(Object.keys(data.message))
    
    
  }, [])

  async function handleClick(e) {
    e.preventDefault();
    setRandomBreed(null);
    let data = await getRandomBreed();
    setRandomBreed(data);
    
  }
  return (
    <div className="dog">
      <DogList randomBreed={randomBreed} />
      <DogButtons handleClick={handleClick} breedNames={breedNames} />
    </div>
  );
}

export default Dog;
