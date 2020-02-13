import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Single = () => {
    
    const location = useLocation();
    const [single, setSingle] = useState([]);
    const [reccomended, setReccomended] = useState([]);
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [video, setVideo] = useState([]);
    const [certificate, setCertificate] = useState([]);
    const [fav, setFav] = useState("btnNotFav");
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    const movieId = location.pathname.split('/').pop();
    useEffect(()=> {
        const movieId = location.pathname.split('/').pop();
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
                        <img src={"https://image.tmdb.org/t/p/w185" + act.profile_path} alt="poster" />
                        <h3>{act.name}</h3>
                    </div>
                )
            })
            setActors(actors);

            let video = data.videos.results.slice(0, 1).map((vid)=>{
                return(
                    <div className="trailer" key={vid.id}>
                        
                        <iframe width="auto" height="auto"
                        src={`https://www.youtube.com/embed/` + vid.key} title="movie trailer">
                        </iframe>
                        
                    </div>
                )
            })
            setVideo(video);

            // let certificate = data.release_dates.results.slice(0, 1).map((cer)=>{
            //     return(
            //         cer.release_dates.slice(0, 1).map((rat)=>{
            //         return(
            //             <p>{rat.certification}</p>
            //         )
            //     })
               
            //     )
                
            // })
            // setCertificate(certificate);
            let certificate = data.release_dates.results.find(o => o.iso_3166_1 == "CA").release_dates.map((cer)=>{
                return(
                   <p>{cer.certification}</p>
                )
                
            })
            setCertificate(certificate);
            
        }
        var existingEntries = JSON.parse(localStorage.getItem("favorites"));
        if(existingEntries == null){
            existingEntries = [];
            setFav("btnNotFav");
        } else{
            var foundValue = existingEntries.find(o => o.id == movieId);
            console.log(foundValue);
            if(foundValue == undefined ){
                setFav("btnNotFav");
            }else{
                
                setFav("btnFav");
                
            }
        }
    
        getSingle();
    }, [location]);


    console.log(movieId);
    // var existingEntries = JSON.parse(localStorage.getItem("favorites"));
    //     if(existingEntries == null){
    //         existingEntries = [];
    //         var favMessage = "Add to Favorites"
    //     } else{
    //         var foundValue = existingEntries.find(o => o.id == movieId);
    //         console.log(foundValue);
    //         if(foundValue == undefined ){
    //             var favMessage = "Add to Favorites";
    //         }else{
                
    //             var favMessage = "Favorited";
                
    //         }
    //     }
    

    const addToStorage = () => {
    
	
            // Parse any JSON previously stored in allEntries
        var existingEntries = JSON.parse(localStorage.getItem("favorites"));
        if(existingEntries == null) existingEntries = [];

        var foundValue = existingEntries.filter(obj=>obj.id == movieId);
        console.log("found value",foundValue);
        
        if(foundValue == undefined | foundValue.length == 0){
            existingEntries.push(single);
            localStorage.setItem("favorites", JSON.stringify(existingEntries));
            setFav("btnFav");
            console.log("local", existingEntries);
        }else{
            let newArray = existingEntries.filter(x => x.id != movieId);
            console.log(newArray);
            localStorage.setItem("favorites", JSON.stringify(newArray));
            setFav("btnNotFav");
            

        }
    
    

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
                        <div className="single-header">
                        <button className={fav} id="addToFavorites" onClick={addToStorage}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg></button>

                            <p className="single-vote">{single.vote_average}</p>  
                            <h3 className="movietitle">{single.title}<br /> ({single.release_date})</h3>
                        </div>
                  
                        
                        {certificate}
                        <div className="genres-all">
                           {genres} 
                        </div>
                        <p>Runtime: {single.runtime} Minutes</p>
                        <p>{single.overview}</p>
                        {/* <input type="button" value={fav} id="addToFavorites" onClick={addToStorage} /> */}
                    </div>
                </div>
                
                
                
            </div>
            <h2>Cast</h2>
            <div className="all-actors">
                {actors}
            </div>
            <h2>Trailer</h2>
            {video}
            <h2>Related Movies</h2>
            <Slider {...settings}>
                
            {reccomended} 
            </Slider>
            
            
           
        </div>
        )

}

  

        
        
    

export default Single;