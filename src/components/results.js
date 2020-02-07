import React, { useState, useEffect } from 'react';
import Hero from './hero';


const Results = (props) => {
    
    
    const [results, setResults] = useState([]);
    
    const typeToDisplay = props.query;
    
    useEffect((props)=> {
        
        const getMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${typeToDisplay}?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&page=1`);
            let data = await res.json();
            
            let movies = data.results.map((mov)=>{
                return(
                    <div className="movie" key={mov.id}>
                         <a href={"single/"+mov.id}>
                        <img className="poster" src={"https://image.tmdb.org/t/p/w342" + mov.poster_path} alt="misc" />
                        
                        
                       
                            <div className="overview">
                                
                                <h3 className="movietitle">{mov.title} ({mov.release_date.split("-").slice(0,1)})</h3>
                                
                                <p>{mov.overview.substring(0, 300)}{mov.overview.length > 300 ? "..." : ''}</p>
                                
                            </div>
                            <p className="moreinfo">More Info</p>
                        </a>
                    </div>
                )
            })
            setResults(movies);
            
        }
        getMovies();
    }, [typeToDisplay])
    
        return(
        <div>
            <Hero />
          
            <div className="featuredmovies">
                {results}
            </div>
            
            
            
        </div>
    );
    }
    
    

export default Results;