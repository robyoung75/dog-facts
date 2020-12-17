import React, { useState } from "react";
import "./Header.css";

import { getRandomBreed } from "../../functions/requests";

function Header({
  axiosAllBreeds,
  handleClick,
  setRandomBreed,
  axiosAllImages,
  axiosAllImages_arr2,
  setJoinedArray,
  setAxiosBreedByName,
}) {
  const [isActive, setActive] = useState(false);

  // function sets randomBreed. A click on search random dog button fires this
  // fuction returning a random image and data about a dog.
  async function handleClick() {
    setAxiosBreedByName(null);
    let data = await getRandomBreed();
    setRandomBreed(data);
    setActive()
  }

  async function handleChange(e) {
    setRandomBreed(null);
    let value = await e.target.value;
    let arr1 = axiosAllImages;
    let arr2 = axiosAllImages_arr2;
    let arr3 = await arr1.concat(arr2);
    setJoinedArray(arr3);
    await arr3.map((image) =>
      image.breeds.findIndex((element) => {
        if (element.name === value) {
          setAxiosBreedByName(image);
        }
      })
    );
    setActive();
  }

  const headerDropdown = () => {
    setActive(!isActive);
    setRandomBreed(null)
    setAxiosBreedByName(null)
  };
  return (
    <div className="header">
      <div className={!isActive ? "header__list" : "header__listDropdown"}>
        <p onClick={handleClick}>Search Random Breed</p>
        <p>
          <span style={{ fontSize: "15px", paddingRight: "5px" }}>
            Select a breed
          </span>
          <select onChange={handleChange}>
            {axiosAllBreeds
              ? axiosAllBreeds.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))
              : null}
          </select>
        </p>
      </div>
      <div
        className={!isActive ? "header__btn" : "header__btnActive"}
        onClick={headerDropdown}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
