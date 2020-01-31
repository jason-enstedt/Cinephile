import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed:5000,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const stopInfinite = 'top_rated';
    const [movieOfTheDay, setMovieOfTheDay] = useState([]);
    useEffect(()=> {
        //fetch our weather data using the fetch api (native js)
        // setup an async / await to wait for the returned data
        //from the openweatherapi
        const getMovieOfTheDay = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${stopInfinite}?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&page=1`);
            let data = await res.json();
            
            let movieOfTheDay = data.results.slice(1,10).map((one)=>{
            return(
                <div className="hero" key={one.id}>
                
                    <img className="backdrop" src={"https://image.tmdb.org/t/p/w780" + one.backdrop_path} alt={one.title} />
                    
                    <div className="words">
                    
                        <h2>{one.title}</h2>
                        <a href={"/single/" + one.id}> 
                            <p className="seeMore">More Info</p>
                        </a>
                    </div>
                
                
                </div>
                );
            });

            setMovieOfTheDay(movieOfTheDay);
            
        }
        getMovieOfTheDay();
    }, [stopInfinite]);

    return(
        <Slider {...settings}>
                
               {movieOfTheDay} 
            </Slider>
        
    );
}
export default Hero;