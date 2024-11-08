import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movies from './Movies';
//importing movies into read.js



//footer.js
//create reuseable Create component
//can be imported into the app.js file 
const Read = () => {

    //array of movies being put in
    const data = [
      /*  {
          "Title": "Avengers: Infinity War",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }*/
      ];

      //estate variable called movies given an initial value with an empty array
      const [movies, setMovies] = useState([]);

      //get api from external source 
      //synchronise with an external system
      useEffect(
        ()=>{
            //use a package call axis
            //app now has abillity to http methods
            //axios.get makes a http request to our api doing it in the background
            //app will continue to work while this is going on
            //result of this is called a promise
            //https://jsonblob.com/api/jsonblob/1287718524221775872
            axios.get('http://localhost:4000/api/movies')
            //.then this will happen succesfully
            //callbackfunctions
            //execute .then when it has excuted successfully
            .then((response)=> {
           console.log(response.data);
           //passed an array
           setMovies(response.data.movies);
            })
            //,catch if something goes wrong 
            .catch(
              (error)=>{
                console.log(error);
              }
            )
        }
      );
      
            //passing array of data down to movies
    return(
        <div>
            <h3>Hello from the Read component</h3>
            <h4><Movies myMovies={movies}/> </h4>
        </div>
    );
  };
  
 
  export default Read;