import React, { useState} from 'react';
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
            <h3>Footer</h3>
        </div>
    );
}
export default Footer;