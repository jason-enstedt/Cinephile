import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Single = () => {
    const movieId = window.location.pathname.split("/").pop();
    const [single, setSingle] = useState([]);
    const [reccomended, setReccomended] = useState([]);
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    

    useEffect(()=> {
        //fetch our weather data using the fetch api (native js)
        // setup an async / await to wait for the returned data
        //from the openweatherapi
        const getSingle = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US`);
            let data = await res.json();
            
            let mov = data;
            
                
            
            setSingle(mov);
            
        }
        getSingle();
    }, [movieId]);

    useEffect(()=> {
        //fetch our weather data using the fetch api (native js)
        // setup an async / await to wait for the returned data
        //from the openweatherapi
        const getRecommended = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&page=1`);
            let data = await res.json();
            
            let reccomended = data.results.map((mov)=>{
                return(
                    <div className="reccomended" key={mov.id}>
                        <a href={"single/"+mov.id}>
                        <img className="poster" src={"https://image.tmdb.org/t/p/w500" + mov.poster_path} alt="misc" />
                    
                        </a>
                    </div>
                )
            })
            setReccomended(reccomended);
            
        }
        getRecommended();
    }, [movieId]);
    
    const addToStorage = () => {
    
	
	var existing = localStorage.getItem('favorites');

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : {};
    
    const value = {
        id:single.id,
        image:single.poster_path
    }
	// Add new data to localStorage Array
	existing[single.id] = value;

	// Save back to localStorage
	localStorage.setItem('favorites', JSON.stringify(existing));
    }
 console.log('last',single.genres);
    return(
            
        <div className="single" key={single.id}>
            <div className="single-wrapper">
                
                <div className="single-hero">
                    <img className="backdrop" src={"https://image.tmdb.org/t/p/original" + single.backdrop_path} alt={single.title} />
                
                    
                </div>
                <div className="single-main">
                    <img className="poster" src={"https://image.tmdb.org/t/p/w500" + single.poster_path} alt="misc" />
                    <div className="single-main-content">  
                        <h3 className="movietitle">{single.title} ({single.release_date})</h3>
                        <p>{single.vote_average}</p>
                        
                        {/* {single.genres.map(genre =>(<p>{genre.name}</p>))} */}
                        <p>{single.overview}</p>
                        <p>{single.id}</p>
                        <input type="button" value="Add to Favorites" id="addToFavorites" onClick={addToStorage} />
                    </div>
                </div>
                
                
                
            </div>
            <h3>Related Movies</h3>
            <Slider {...settings}>
                
               {reccomended} 
            </Slider>
            
            
            <div className="">

            </div>
        </div>
        )

}

  

        
        
    

export default Single;