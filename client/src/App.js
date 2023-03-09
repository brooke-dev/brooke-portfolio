import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import React from 'react'

// Components
import NavBar from './NavBarFolder/NavBar'
import Home from './NavBarFolder/Home'
import About from './NavBarFolder/About'
import Projects from './NavBarFolder/Projects'
import Connect from './NavBarFolder/Connect'



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/connect" element={<Connect/>} />
      </Routes>
       {/* <h1>Page Count: {count}</h1> */}

    </div>
   
  );
}

export default App;

