import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Single = () => {
    const movieId = window.location.pathname.split("/").pop();
    const [single, setSingle] = useState([]);
    const [reccomended, setReccomended] = useState([]);
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [video, setVideo] = useState([]);
    const [certificate, setCertificate] = useState([]);
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
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&append_to_response=credits,videos,recommendations,release_dates`);
            let data = await res.json();
            
            let mov = data;          
            setSingle(mov);

            let genres = mov.genres.map((genre)=>{
                return(
                    <p key={genre.id}>{genre.name}</p>
                )
            })
            setGenres(genres);

            let reccomended = data.recommendations.results.map((mov)=>{
                return(
                    <div className="reccomended" key={mov.id}>
                        <a href={"single/"+mov.id}>
                        <img className="poster" src={"https://image.tmdb.org/t/p/w342" + mov.poster_path} alt="misc" />
                    
                        </a>
                    </div>
                )
            })
            setReccomended(reccomended);

            let actors = data.credits.cast.slice(0, 6).map((act)=>{
                return(
                    <div className="actor" key={act.id}>
                        
                            <img src={"https://image.tmdb.org/t/p/w185" + act.profile_path} />
                        
                    </div>
                )
            })
            setActors(actors);

            let video = data.videos.results.slice(0, 1).map((vid)=>{
                return(
                    <div className="trailer" key={vid.id}>
                        
                        <iframe width="auto" height="auto"
                        src={`https://www.youtube.com/embed/` + vid.key}>
                        </iframe>
                        
                    </div>
                )
            })
            setVideo(video);

            let certificate = data.release_dates.results.slice(0, 1).map((cer)=>{
                cer.release_dates.slice(0, 1).map((rat)=>{
                    return(
                        <p>{rat.certification}</p>
                    )
                })
               
            })
            setCertificate(certificate);
            
        }
        getSingle();
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

    return(
            
        <div className="single" key={single.id}>
            <div className="single-wrapper">
                
                <div className="single-hero">
                    <img className="backdrop" src={"https://image.tmdb.org/t/p/w780" + single.backdrop_path} alt={single.title} />
                
                    
                </div>
                <div className="single-main">
                    <img className="poster" src={"https://image.tmdb.org/t/p/w342" + single.poster_path} alt="misc" />
                    <div className="single-main-content">  
                        <h3 className="movietitle">{single.title} ({single.release_date})</h3>
                        <p>{single.vote_average}</p>
                        {certificate}
                        {genres}
                        <p>{single.overview}</p>
                        <p>{single.id}</p>
                        <p>{single.runtime} Minutes</p>
                        <input type="button" value="Add to Favorites" id="addToFavorites" onClick={addToStorage} />
                    </div>
                </div>
                
                
                
            </div>
            <div className="all-actors">
                {actors}
            </div>
            {video}
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