import React from 'react';
import './NavBar.css'; // Import CSS styles for the component
import { NavLink } from 'react-router-dom';

function NavBar({isDarkMode, setIsDarkMode}) {

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <NavLink to="/" style={{marginRight: '20px'}} >Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/connect">Connect with Me!</NavLink>
    </nav>
  );
}

export default NavBar;

