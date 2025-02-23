import React from "react";
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <h3 className="movie-name">{movie.name}</h3>
      <p className="movie-description">{movie.description}</p>
    </div>
  );
};

export default MovieCard;