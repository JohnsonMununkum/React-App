import React from 'react';

//Movies.js
//create reuseable Movie component
//can be imported into the Movies.js file 
//props is short for properties how we pass data to a component 
//allows movie component to handle to array from the read.js class
const Movies = (props) => {
    return (
        <div>
          movies component
          {console.log(props.myMovies)}
        </div>

    );
  };
  
  export default Movies;