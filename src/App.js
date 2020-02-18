import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import CustomAutocomplete from './components/search';
import Single from './components/single';
import Funnel from './components/funnel';
import Favorites from './components/favorites';
import ScrollToTop from 'react-router-scroll-top';
import './App.css';

function App() {
  
  

  return (
    <Router >
      <ScrollToTop>
    <div className="App">
      <header>
        <Header />
        <CustomAutocomplete />
      </header>
      <div className="container">
        <Route path="/" exact><Funnel /></Route>
        <Route path="/single"><Single /></Route>
        <Route path="/website/movie-app/result"><Funnel /></Route>
        <Route path="/favorites"><Favorites /></Route>
        <Route path="/about"><About /></Route>
      </div>
      
      
      <Footer />
    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
