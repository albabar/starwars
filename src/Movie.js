import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

function Movies(props) {
  let { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://swapi.dev/api/films/${id}/`
    )
      .then(res => res.json())
      .then(response => {
        setMovie(response);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(id)

  if(!movie.title) {
    return <div>loading...</div>
  }
  return (
    <div>
      <h1>{movie.title}<small> by {movie.director}</small></h1>
      <p className="lead">{movie.opening_crawl}</p>
      <small>Release Date: {movie.release_date}</small>

      <ul className="list-group">
        {movie.characters.map((character, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
