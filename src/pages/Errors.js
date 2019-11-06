import React from 'react';
import {Link} from 'react-router-dom';

const Errors = (props) =>{
    return(
        <div className="error">
            <h1 id="header"> Salad Club </h1>
            <img src="error.png" width="400px"></img>
            <h1> 404 </h1>
            <h2> Page not found </h2>
            <Link to='/'> <button>Back to home</button></Link>
            
        </div>
    )
}

export default Errors;