import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function DogButtons({ handleClick, breedNames }) {
  const classes = useStyles();

  return (
    <div className="dogButtons">
      <div className={classes.root}>
        <div className="dogButtons__formGroup">
          <h3>Drop Down</h3>
          <select>
            {breedNames
              ? breedNames.map((breed) => <option key={breed}>{breed}</option>)
              : "data loading"}
          </select>
        </div>

        <Button variant="contained" onClick={handleClick}>
          Search Random Dog
        </Button>
        {/* <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button> */}
      </div>
    </div>
  );
}

export default DogButtons;
