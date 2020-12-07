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

function DogButtons({ handleClick, handleChange, breedList, breedImages, handleFullAccess }) {
  const classes = useStyles();
  const [selection, setSelection] = useState();


  return (
    <div className="dogButtons">
      <div className={classes.root}>
        <div className="dogButtons__formGroup">
          <h3>Drop Down</h3>

          <select onChange={handleChange} value={selection}>
            {breedList
              ? Object.keys(breedList).map((breed) => <option key={breed}>{breed}</option>)
              : "data is loading"}
          </select>
        </div>

        <Button variant="contained" onClick={handleClick}>
          Search Random Dog
        </Button>

        <Button variant="contained" onClick={handleFullAccess}>
          full access
        </Button>
      </div>
    </div>
  );
}

export default DogButtons;
