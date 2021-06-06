import React, { useEffect, useState } from 'react';
import classes from '../../index.css';
import Movie from '../../components/Movie/Movie';

const ANIMATION_API = `https://api.themoviedb.org/3/discover/movie?with_genres=${16}&api_key=d38aa8716411ef7d8e9054b34a6678ac`;

const animationBuilder = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(ANIMATION_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className={classes.movieContainer}>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

export default animationBuilder;