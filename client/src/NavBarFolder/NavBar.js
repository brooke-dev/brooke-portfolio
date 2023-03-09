import React from 'react';
import './NavBar.css'; // Import CSS styles for the component
import { NavLink } from 'react-router-dom';
import darkmode from './iconImages/darkmode.png'
import lightmode from './iconImages/lightmode.png'

function NavBar({isDarkMode, setIsDarkMode}) {

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        <img src={isDarkMode ? lightmode : darkmode} alt="Toggle dark mode" />
      </button>
      <NavLink to="/" style={{marginRight: '20px'}} >Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/connect">Connect with Me!</NavLink>
    </nav>
  );
}

export default NavBar;

