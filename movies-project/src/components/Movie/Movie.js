import React, { useState } from "react";
import classes from "../../index.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, overview, poster_path, vote_average }) => {
  return (
    <Auxiliary>
      <div className={classes.movie} >
        <img src={IMG_API + poster_path} />
        <div className={classes.movieInfo}>
        <h3>{title}</h3>
        <span>{vote_average}</span>
        </div>
        <div className={classes.movieOver}>
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </div>
    </Auxiliary>
  );
};

export default Movie;
