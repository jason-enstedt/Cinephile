import React, { useState} from 'react';
import Results from './results';
import Hero from './hero';
const Funnel = () => {
    
    const [genreAll, setGenreAll] = useState('')
    const [sortAll, setSortAll] = useState('popularity.desc')
    const genres = {
        "genres": [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
          }
        ]
      }

      let genreInput = genres.genres.map((gen)=>{
          return(
              <option key ={gen.id} value={gen.id}>{gen.name}</option>
          )
          
      });
      const updateSearch = () => {
          var newfield = document.getElementById("genreSelect").value;
          setGenreAll(newfield);
      }
      const updateSort = () => {
        var newfield = document.getElementById("sortSelect").value;
        setSortAll(newfield);
    }
      
    return(
        <div>
          <Hero />
          <div className="resultsAndFilter">
            <div className="filterInputs">
              <select onChange={updateSort} id="sortSelect">
                  <option value="popularity.desc">Sort by...</option>
                  <option value="popularity.desc">Popularity &#x21e7;</option>
                  <option value="popularity.asc">Popularity &#x21e9;</option>
                  <option value="revenue.desc">Revenue &#x21e7;</option>
                  <option value="revenue.asc">Revenue &#x21e9;</option>
                  <option value="vote_average.desc">Rating &#x21e7;</option>
                  <option value="vote_average.asc">Rating &#x21e9;</option>
                  <option value="release_date.desc">Release date &#x21e7;</option>
                  <option value="release_date.asc">Release date &#x21e9;</option>
              </select>
              <select onChange={updateSearch} id="genreSelect">
                  <option value=''>All Genres</option>
                  {genreInput}
              </select>
            </div>
            <Results genre={genreAll} sort={sortAll}/>  
          </div>
        </div>
       
    );
}
export default Funnel;