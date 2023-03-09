import './App.css';
import { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
import React from 'react'
import { Element } from 'react-scroll';


// Components
import NavBar from './NavBarFolder/NavBar'
import Home from './NavBarFolder/Home'
import About from './NavBarFolder/About'
import Projects from './NavBarFolder/Projects'
import Connect from './NavBarFolder/Connect'



function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  const [isDarkMode,setIsDarkMode] = useState(false)


  return (
    // <div className="App">
      <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/connect" element={<Connect/>} />
      </Routes> */}
       {/* <h1>Page Count: {count}</h1> */}
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="connect">
          <Connect />
        </Element>
    </div>
   
  );
}

export default App;

