import React, { useState, useEffect } from 'react';


const Favorites = () => {
    
    
    
    const favoriteMovies = localStorage.getItem('favorites');
    const keys = Object.keys(favoriteMovies);
    for (const key of keys) {
        console.log(key)
    }
    
   
    
        return(
        <div>
            
            <div className="current-movies">
           <h2>Favorites</h2>
           {/* {newFavorites} */}
            </div>
            
            
        </div>
    );
    }
    
    

export default Favorites;