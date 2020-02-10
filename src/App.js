import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

import CustomAutocomplete from './components/search';
import Single from './components/single';
import Funnel from './components/funnel';
import Favorites from './components/favorites';
import './App.css';

function App() {
  
  

  return (
    <Router basename='/website/movie-app'  >
    <div className="App">
      <header>
        <Header />
        <CustomAutocomplete />
      </header>
      
      
      <Route path="/" exact><Funnel /></Route>
      <Route path="/website/movie-app/single"><Single /></Route>
      <Route path="/website/movie-app/result"><Funnel /></Route>
      <Route path="/website/movie-app/favorites"><Favorites /></Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
