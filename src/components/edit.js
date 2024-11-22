//Add functionality to allow users to edit movies.
//When a user clicks the "Edit" button, a new window will open where they can modify movie information. 
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//retrieve the specific movie data from the database.
//oad and edit details for a single, specific movie.
//navigation to different routes programmatically.
//is used after the user submits the edited movie information.
//Once the update is saved, useNavigate is called to redirect the user back to the "read" page where they can view all movies, including the one they just edited.
export default function Edit(props) {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const navigate = useNavigate();

useEffect(() => {
    axios.get('http://localhost:4000/api/movie/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { id, title, year, poster };
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Movie Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Movie" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}