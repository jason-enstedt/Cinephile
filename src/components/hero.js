import React, { useState, useEffect } from 'react';
const Hero = (props) => {
    
    const [movieOfTheDay, setMovieOfTheDay] = useState([]);
    useEffect(()=> {
        //fetch our weather data using the fetch api (native js)
        // setup an async / await to wait for the returned data
        //from the openweatherapi
        const getMovieOfTheDay = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${props.movieOfTheDay}?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US`);
            let data = await res.json();
            
            let movieOfTheDay = data;

            setMovieOfTheDay(movieOfTheDay);
            
        }
        getMovieOfTheDay();
    }, [props.movieOfTheDay]);

    return(
        <div className="hero">
            
            <img className="backdrop" src={"https://image.tmdb.org/t/p/original" + movieOfTheDay.backdrop_path} alt={movieOfTheDay.title} />
            
            <img className="poster" src={"https://image.tmdb.org/t/p/original" + movieOfTheDay.poster_path} alt="misc" />
            
            <div className="words">
            
                <h2>{movieOfTheDay.title}</h2>
                <a href={"/single/" + movieOfTheDay.id}> 
                    <p className="seeMore">More Info</p>
                </a>
            </div>
            
            
        </div>
    );
}
export default Hero;