import React from 'react';
import {Link} from "react-router-dom";


const Favorites = () => {
    // const [newFavorites, setNewFavorites] = useState([]);
    
    
    const favoriteMovies = localStorage.getItem('favorites');
    
    if(JSON.parse(localStorage.getItem("favorites")) == null | []){

        var existingEntries = JSON.parse(localStorage.getItem("favorites"));

        if(existingEntries == null) existingEntries = [];

        localStorage.setItem("favorites", JSON.stringify(existingEntries));
        
        var keys = <p>You dont have any favorites!</p>;

    }else{
        var newfav = JSON.parse(favoriteMovies);
   
        var keys = newfav.map((mov) =>{
            return(
                <div className="movie" key={mov.id}>
                        <Link to={`/single/${mov.id}`}>
                        <img className="poster" src={"https://image.tmdb.org/t/p/w342" + mov.poster_path} alt="misc" />
                        
                        
                       
                            <div className="overview">
                                
                                <h3 className="movietitle">{mov.title} ({mov.release_date == null ? "..." : mov.release_date.split("-").slice(0,1)})</h3>
                                
                                <p>{mov.overview.substring(0, 300)}{mov.overview.length > 300 ? "..." : ''}</p>
                                
                            </div>
                            <p className="moreinfo">More Info</p>
                        </Link>
                    </div>
            )
        });
    }

   

    

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