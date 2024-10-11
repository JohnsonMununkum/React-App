import logo from './logo.svg';
import './App.css';
//navbar.js importing
//allowing app to use these components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavBar';
//importing the content.js file 
import Content from './Content';
//importing the Footer from the footer.js file
import Footer from './Footer';
//importing the Header from the Header.js file
import Header from './Header';
//importing the Create from the Create.js file
import Create from './Create';
//importing the Read from the Read.js file
import React from 'react';
import Read from './Read';

//for part 6 putting the header into the read section allowing read to be shown when you click on read 
//and create to be shown when you click on create 
//content does not show anything as you are already on that page

function App() {
  return (
    <Router>
    <NavigationBar />
    <Routes>
      <Route path="/home" element={<Content />} />
      <Route path="/read" element={<Read />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
