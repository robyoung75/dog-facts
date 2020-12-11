import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function DogButtons({ handleClick, handleChange, axiosAllBreeds }) {
  const classes = useStyles();

  return (
    <div className="dogButtons">
      <div className={classes.root}>
        <div className="dogButtons__formGroup">
          <h3>Drop Down</h3>

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

        <Button variant="contained" onClick={handleClick}>
          Search Random Dog
        </Button>
      </div>
    </div>
  );
}

export default DogButtons;
