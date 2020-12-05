import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getDogBreed, assEater } from "../../functions/requests";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function DogButtons({handleClick}) {
  const classes = useStyles();

  return (
    <div className="dogButtons">
      <div className={classes.root}>
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
