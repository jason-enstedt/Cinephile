import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const unReveal = () => {
            var unReveal = document.getElementById('main-nav');
            unReveal.classList.remove('reveal');
            document.body.classList.remove('stop-scroll');
        }
    return(
        
        <div className="main-nav" id="main-nav">
            <div className="exit-bar">
                <h2>Menu</h2>
                <button className="nav-exit" onClick={unReveal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
            </div>
           <nav>
              
                <ul>
                   <NavLink to="/" exact onClick={unReveal}> <li>Home</li></NavLink>
                    <NavLink to="/favorites" onClick={unReveal}><li>Favorites</li></NavLink>     
                </ul>
           </nav>
        </div>
    );
}
export default Nav;