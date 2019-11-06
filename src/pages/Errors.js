import React from 'react';
import {Link} from 'react-router-dom';

const Errors = (props) =>{
    return(
        <div>
            <h1> 404 </h1>
            <h2> Page not found </h2>
            <Link to='/'> Go Home !!!!!!! </Link>
        </div>
    )
}

export default Errors;