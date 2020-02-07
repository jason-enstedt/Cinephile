import React from 'react';
import Results from './results';
const Funnel = () => {
    const typeToDisplay = 'now_playing';
    return(
        <div>
        

        <Results query = {typeToDisplay} />   
        </div>
       
    );
}
export default Funnel;