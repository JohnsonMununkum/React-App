import React from 'react';

//content.js file
//this is the content that lies in the page 
//allows the content page to be imported from the app.js file allowing us the reuse the file for many different apps
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;


