import { useState } from "react";


//footer.js
//create reuseable Create component
//can be imported into the app.js file 
//function to create & set the tile of the movies 
const Create = () => {

    const [title, setTitle] = useState('');
//to handle the submit
  //adds the title to the page 
  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(title);
  }

    return (
      <div>

              <h3>Hello from the Create component</h3>
              <form onSubmit ={handleSubmit}>

                <div className="form-group">
                  <label>Add Movie Title: </label>
                  <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} 
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