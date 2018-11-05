import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
      <li className="nav__list--item"><Link to="/Phase0" >Phase0</Link></li>
        <li className="nav__list--item"><Link to="/Phase1" >Phase1</Link></li>
        
        <li className="nav__list--item"><Link to="/Phase2" >Phase2</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;