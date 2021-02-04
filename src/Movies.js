import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://swapi.dev/api/films/"
    )
      .then(res => res.json())
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="list-group">
      {movies.map((movie, i) => (
        <Link key={i} to={`/movies/${movie.url.replace('http://swapi.dev/api/films/', '')}`} className="ist-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{movie.title}</h5>
            <small>{movie.release_date.split('-')[0]}</small>
          </div>
          <p className="mb-1">{movie.opening_crawl}</p>
          <small>{movie.director}</small>
        </Link>
      ))}
    </div>
  );
}

export default Movies;
