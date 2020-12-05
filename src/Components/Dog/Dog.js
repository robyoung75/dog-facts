import React, { useState } from "react";
import DogButtons from "../DogButtons/DogButtons";
import DogList from "../DogList/DogList";
import "./Dog.css";
import { getDogBreed } from "../../functions/requests";

function Dog() {
  const [breeds, setBreeds] = useState();
  const [test, setTest] = useState();

  async function handleClick(e) {
    e.preventDefault();
    setBreeds(null);
    let data = await getDogBreed();
    setBreeds(data);
  }
  return (
    <div className="dog">
      <DogList test={test} breeds={breeds} />
      <DogButtons handleClick={handleClick} />
    </div>
  );
}

export default Dog;
