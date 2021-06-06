import React from "react";
import classes from "../index.css";
import Action from "../components/MovieGenres/Action";
import Adventure from "../components/MovieGenres/Adventure";
import Animation from "../components/MovieGenres/Animation";
import Comedy from "../components/MovieGenres/Comedy";
import Auxiliary from "../hoc/Auxiliary/Auxiliary";

const movieBuilder = () => {
  return (
    <Auxiliary>
      <div className={classes.genres}>
        <div>
          <h3 className={classes.movieGenre}>Action</h3>
          <Action />
        </div>
        <div>
          <h3 className={classes.movieGenre}>Adventure</h3>
          <Adventure />
        </div>
        <div>
          <h3 className={classes.movieGenre}>Animation</h3>
          <Animation />
        </div>
        <div>
          <h3 className={classes.movieGenre}>Comedy</h3>
          <Comedy />
        </div>
      </div>
    </Auxiliary>
  );
};

export default movieBuilder;
