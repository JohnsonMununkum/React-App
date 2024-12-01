import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieItem(props) {
    {/* handles the deletion function*/}
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

    return (
        <div>
            {/* Other movie details */}
            <Card>
        <Card.Header>{props.myMovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.poster} alt={props.myMovie.title} />
            {/* movie id added beside the year now have it as myMovie to match so movies are being showed*/}
            <footer>{props.myMovie.year}  Movie ID: 
              {
                props.myMovie._id
              }
            </footer>
          </blockquote>

        </Card.Body>
        <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">Edit</Link>
      </Card>
      {/* button to click for movie deletetion*/}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div> 
    );
}

export default MovieItem;