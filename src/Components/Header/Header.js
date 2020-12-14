import React from "react";
import "./Header.css";

function Header({ handleChange, axiosAllBreeds }) {
  return (
    <div className="header">
      <select onChange={handleChange}>
        {/* {breedList
              ? Object.keys(breedList).map((breed) => <option key={breed}>{breed}</option>)
              : "data is loading"} */}
        {axiosAllBreeds
          ? axiosAllBreeds.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))
          : null}
      </select>
    </div>
  );
}

export default Header;
