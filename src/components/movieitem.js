import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
//navigate to a new route without refreshing the page.
import { Link } from 'react-router-dom';
//adding button to movie item.js
import Button from 'react-bootstrap/Button';
import axios from "axios";



//defines the path the Link component should navigate to when clicked.
//This URL structure matches the route defined in App.js (/edit/:id) and allows React Router to capture the movie’s ID and pass it to the Edit component
const MovieItem = (props)=> {
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
        .then(() => {
            props.Reload(); // Refresh the movie list after deletion
        })
        .catch((error) => {
            console.error("Error deleting movie:", error);
        });
};


  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

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
        <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
      </Card>
            {/* Other movie details */}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>


    </div>
  );
}

export default MovieItem;