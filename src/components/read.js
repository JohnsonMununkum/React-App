import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            setData(response.data.movies);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
};

useEffect(() => {
  Reload();
}, []);



  return (
    <div>
      <h3>Movie List</h3>
            <Movies myMovies={data} ReloadData={Reload} />
    </div>
  );
}

export default Read;