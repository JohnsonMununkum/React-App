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

function App() {
  return (
    <Router>
    <NavigationBar />
    <Routes>
      <Route path="/home" element={<Content />} />
      <Route path="/read" element={<h1>Read Component</h1>} />
      <Route path="/create" element={<h1>Create Component</h1>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
