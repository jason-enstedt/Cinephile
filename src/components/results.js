import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";


const Results = (props) => {
    
    
    const [results, setResults] = useState([]);
    
    

    const genrequery = "&with_genres=" + props.genre; 

    const sortquery = "&sort_by=" + props.sort;
    
    useEffect(()=> {
        
        const getMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&${sortquery}&include_adult=false&include_video=false&page=1${genrequery}`);
            let data = await res.json();
            
            let movies = data.results.map((mov)=>{
                if(mov.poster_path == null){

                }
                return(
                    <div className="movie" key={mov.id}>
                        <Link to={`/single/${mov.id}`}>
                            
                        <img className="poster" src={mov.poster_path == null ? process.env.PUBLIC_URL + '/images/noposter.png' : "https://image.tmdb.org/t/p/w342" + mov.poster_path} alt="misc" />
                        
                        
                       
                            <div className="overview">
                                
                                <h3 className="movietitle">{mov.title} ({mov.release_date == null ? "..." : mov.release_date.split("-").slice(0,1)})</h3>
                                
                                <p>{mov.overview.substring(0, 300)}{mov.overview.length > 300 ? "..." : ''}</p>
                                
                            </div>
                            <p className="moreinfo">More Info</p>
                        </Link>
                    </div>
                )
                
            })
            setResults(movies);
            
        }

        getMovies();
        

    }, [genrequery, sortquery])
    
        return(
            <div className="featuredmovies">
                {results}
            </div>   
    );
    }
    
    

export default Results;