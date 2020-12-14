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
        <Button variant="contained" onClick={handleClick}>
          Search Random Dog
        </Button>
      </div>
    </div>
  );
}

export default DogButtons;
