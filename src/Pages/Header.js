import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav className="mt-2">
        <a href="#about" className="mr-4">About</a>
        <a href="#projects" className="mr-4">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#NotFound">footer</a>
        <a href="#Home">footer</a> 
        <a  href="#Resume">Resume</a> 
        
      </nav>
    </header>
  );
};

export default Header;