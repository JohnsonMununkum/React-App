import React from 'react';

//MovieItem.js
//create reuseable MovieItem component
//can be imported into the app.js file 


const MovieItem = (props) => {
    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <p>{props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}></img>
        </div>
    );
    
  };
  
  export default MovieItem;