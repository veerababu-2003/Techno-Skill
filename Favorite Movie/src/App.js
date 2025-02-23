import React from "react";
import MoviesList from "./components/MoviesList";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Favorite Tollywood Movies</h1>
      </header>
      <MoviesList />
    </div>
  );
}

export default App;
