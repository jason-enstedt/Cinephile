import React, { useState, useEffect } from 'react';


const Favorites = () => {
    const [newFavorites, setNewFavorites] = useState([]);
    
    
    const favoriteMovies = localStorage.getItem('favorites');
    

    var newfav = JSON.parse(favoriteMovies);
   
    const keys = newfav.map((fav) =>{
        return(
            <div className="movie" key={fav.id}>
                         <a href={"single/"+fav.id}>
                        <img className="poster" src={"https://image.tmdb.org/t/p/w342" + fav.poster_path} alt="misc" />
                        
                        
                       
                            <div className="overview">
                                <h3 className="movietitle">{fav.title} ({fav.release_date.split("-").slice(0,1)})</h3>
                                
                                <p>{fav.overview.substring(0, 300)}{fav.overview.length > 300 ? "..." : ''}</p>
                                
                            </div>
                            <p className="moreinfo">More Info</p>
                        </a>
                    </div>
        )
    });

    

        return(
        <div>
            
            <div className="current-movies">
           <h2>Favorites</h2>
           <div className="featuredmovies">
                { keys }
           </div>
           
            </div>
            
            
        </div>
    );
    }
    
    

export default Favorites;