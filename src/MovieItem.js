import React from 'react';
import Card from 'react-bootstrap/Card';//import card to make the app look better
import { useEffect } from 'react';//import use effect , is like a constructor , can pass it event when something occurs

//MovieItem.js
//create reuseable MovieItem component
//can be imported into the app.js file 


const MovieItem = (props) => {
    useEffect(() => {
      console.log("Movie Item:", props.myMovie);
    }, [props.mymovie]); // Only run this effect when the mymovie prop changes
  
      return (
      <div>
        <Card>
          <Card.Header>{props.myMovie.Title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
              <footer>{props.myMovie.Year}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }

  export default MovieItem;