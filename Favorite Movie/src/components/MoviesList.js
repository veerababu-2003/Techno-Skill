import React from "react";
import MovieCard from "./MovieCard";
import { movies } from "../movieData";
import "./MoviesList.css";

const MoviesList = () => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
