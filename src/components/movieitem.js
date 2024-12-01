import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
//navigate to a new route without refreshing the page.
import { Link } from 'react-router-dom';
//adding button to movie item.js
import Button from 'react-bootstrap/Button';
import axios from "axios";

const MovieItem = (props) => {
  if (!props.mymovie) {
    console.warn("Movie item data is missing");
    return null; // Prevent rendering if data is undefined
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (!props.mymovie._id) {
      console.error("Cannot delete movie without an ID");
      return;
    }
    axios.delete(`http://localhost:4000/api/movie/${props.mymovie._id}`)
      .then(() => {
        props.Reload(); // Refresh movie list
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  };

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link to={`/edit/${props.mymovie._id}`} className="btn btn-primary">Edit</Link>
      </Card>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default MovieItem;
