import React from 'react'
import { useEffect, useState } from 'react';
import axios from '../axios';
import SearchCom from '../components/SearchCom';
import Banner from '../components/Banner';

const base_url = "https://image.tmdb.org/t/p/original/"
const API_KEY = "8a3d6962b99c06a2bef565df4b0be5e1";


function Search() {

    const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(`/search/movie?&api_key=${API_KEY}&query=${searchValue}`);
          if(request.data.results) {
            setMovies(request.data.results);
          }
          return request
        }
        fetchData();
      }, [searchValue])
  return (
    <div className='saerch-container'>
        <Banner />
        <h1 className='h1'>
        Search Your Favorite Movies
        </h1>
        <SearchCom searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="row-poster search-row">
            {movies.map(movie =>
                <img 
                key={movie.id}
                src={`${base_url}${movie.poster_path}`} 
                alt={movie.name} 
                className='row-posters search-results'
                />
                )}
        </div>
    </div>
  )
}

export default Search
