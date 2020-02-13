import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

import CustomAutocomplete from './components/search';
import Single from './components/single';
import Funnel from './components/funnel';
import Favorites from './components/favorites';
import './App.css';

function App() {
  
  

  return (
    <Router >
    <div className="App">
      <header>
        <Header />
        <CustomAutocomplete />
      </header>
      
      
      <Route path="/" exact><Funnel /></Route>
      <Route path="/single"><Single /></Route>
      <Route path="/website/movie-app/result"><Funnel /></Route>
      <Route path="/favorites"><Favorites /></Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
