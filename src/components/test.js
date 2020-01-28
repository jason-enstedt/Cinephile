import React, {Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
        };
    }
    // console.log(window.location.pathname.split("/").pop());
componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&page=1')
    .then(results => {
        return results.json();
    }).then(data => {
        let movies = data.results.map((mov)=>{
            return(
                <div className="movie" key={mov.id}>
                    <img className="poster" src={"https://image.tmdb.org/t/p/w500" + mov.poster_path} alt="misc" />
                    
                    <div>
                    <h3 className="movietitle">{mov.title}</h3>
                    <p>{mov.overview}</p>
                    <p>{mov.id}</p>
                    <a href={"single/"+mov.id}>More Info</a>
                    </div>
                </div>
            )
        })
        this.setState({results:movies});

    })
}

render(){
    return(
        <div className="allresults">
            {this.state.results}
        </div>
    )
}
}
export default Test;