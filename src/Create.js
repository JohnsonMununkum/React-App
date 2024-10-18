import { useState } from "react";


//footer.js
//create reuseable Create component
//can be imported into the app.js file 
//function to create & set the tile of the movies 
const Create = () => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  //to handle the submit
  //adds the title to the page 
  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      title,
      year,
      poster,
    };
    console.log(movieData);

  }

  //inputting title year & poster
  return (
    <div>

      <h3>Hello from the Create component</h3>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />

          <label> Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />

          <label> Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>


        <div>
          <input type="submit" value="Add Movie"></input>
        </div>
      </form>
    </div>
  );
};

export default Create;