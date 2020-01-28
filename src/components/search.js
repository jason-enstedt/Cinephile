import React, {useState, useEffect} from 'react';



  
const Search = () => {
    const [input, setInput] = useState([]);
    const [results, setResults] = useState([]);
    var empty = '';
    const clearSearch = () => {

    

    
        if(document.getElementById('searchField').value == ''){
            setInput('');
        }

        
    }
  const searchFast = () => {
    
    
    console.log(document.getElementById('searchField').value)

    if((document.getElementById('searchField').value) == ''){
      var newQuery = '';
      
    }else{
      var query = document.getElementById('searchField').value;
      
      var newQuery = query.split(' ');
    }
    
    setInput(newQuery)
    
  }
  console.log(input);
  useEffect(()=> {
    
    // var queries = input.toString();
    var queries = Array.prototype.join.call(input, " ");
    console.log("queries ", queries);
    if(queries == ''){
      
      setResults(empty);
      return;
        
      
      
      
    }
    console.log('queries', queries);
    const getResults = async () => {
      
      // var legit = queries.join('%20');
      
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&query=${queries}&page=1&include_adult=false`);
      
      let data = await res.json();
      
      let movies = data.results.slice(0, 5).map((mov)=>{
          
          return(
              <a href={"/single/" + mov.id}>
              <li>
                <div>
                 <img className="searchImg" src={"https://image.tmdb.org/t/p/w500" + mov.poster_path} /> 
                </div>
                <div className="searchInfo">
                  <p>{mov.title}</p>
                  <p>{mov.release_date}</p>
                  <p>{mov.vote_average}</p>
                </div>
                
              </li>
              </a>
          )
      })
      
        setResults(movies);
      
      
    
  }
  getResults();
  }, [input])

  
  const hideBar = () => {
    var bar = document.getElementById('searchBar');
    bar.classList.remove('show');
  }
  return(
    <div className="searchBar" id="searchBar">
     <div className="searchBox">
       <input type="text" name="searchField" id="searchField"  placeholder="Search a Movie..."  onKeyUp={searchFast} onKeyDown={clearSearch}/>
      <button id="hideBtn" onClick={hideBar}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
     </div>
      
      <div className="resultlist">
        <ul>
        {results}
        </ul>
      </div>
    
   
    </div>
    
  );
}

export default Search;