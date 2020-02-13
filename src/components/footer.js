import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const [toTop, setToTop] = useState('');
   
    // mybutton = document.getElementById("toTopBtn");
    // window.onscroll = function() {scrollFunction()};
    if(window.onscroll){
        scrollFunction();
    }

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // mybutton.style.display = "block";
        setToTop('block');
      } else {
        // mybutton.style.display = "none";
        setToTop('none');
      }
    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    return(
        <div className="footer">
            <button className={toTop} onClick={topFunction} id="toTopBtn" title="Go to top">Top</button>
            <h3>Cinephile &copy;</h3>
            <div className="footernav">
              <NavLink to="/favorites">Favorites</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
            
        </div>
    );
}
export default Footer;