import React from 'react';
import Nav from './nav';
const Header = () => {
    const addShow = () => {
        var search = document.getElementById('searchBar');
        search.classList.add('show');
        search.focus();
        
    }
    const addNav = () => {
        var addNav = document.getElementById('main-nav');
        addNav.classList.add('reveal');
    }
    return(
        <div>
        <Nav />
        <div className="headerFlex">
            <button id="menuBtn" onClick={addNav}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"/></svg></button>
            <div className="title">
                <a href="/"><h1>Cinephile</h1></a>
            </div>
            <button id="searchButton" onClick={addShow}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg></button>
        </div>
        </div>
    );
}
export default Header;