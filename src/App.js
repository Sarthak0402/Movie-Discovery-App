
import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import logo from './logo.png';
import icon from './Icons/Union.png';


const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=fce074575cf2d60f09c522820aee6362&primary_release_date.gte=2022-10-15&primary_release_date.lte=2022-12-10";


function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [timeoutId, updateTimeoutId] = useState();

  const searchMovie = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fce074575cf2d60f09c522820aee6362&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  }
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    setQuery(event.target.value);
    const timeout = setTimeout(() => searchMovie(event.target.value), 1000);
    updateTimeoutId(timeout);

  }


  useEffect(() => {
    fetch(API_URL).then((res) => res.json()).then(data => {
      console.log(data)
      setMovies(data.results);
    })
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img className='Logo' src={logo}></img>
        <div className='SearchBox'>
          <img src={icon} className='SearchIcon'></img>
          <input placeholder='Search for a movie' name='query' value={query} onChange={onTextChange} onSubmit={searchMovie}></input>
        </div>
      </header>
      <div className='Recent'>
        Most Recent Movies
      </div>
      <div className='Moviecontainer'>
        <div className='Rowcontainer'>
          {movies.map((movieReq) => <Cards key={movieReq.id} {...movieReq} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
