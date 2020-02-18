import React from 'react';



const About = () => {
    

    
    
   
    return(
        <div className="about">
            <h2>About US</h2>
            <p>Cinephile is a a movie database website created to allow users to quickly find information on any movie.</p>
            <p>Cinephile was created and maintained by Jason Enstedt as part of the BCIT TWD program</p>
            <p>If you have any questions or suggestions to improve Cinephile, please email Jason at jenstedt@my.bcit.ca</p>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img src={process.env.PUBLIC_URL + '/images/tmdb-logo.png'} />
        </div>
    );
    }
    
    

export default About;