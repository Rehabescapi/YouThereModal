import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item"><NavLink exact to="/" >Phase1</NavLink></li>
        
        <li className="nav__list__item"><NavLink to="/Phase2" >Phase2</NavLink></li>
        <li className="nav__list__item"><NavLink to="/Phase3">Phase3</NavLink></li>
      </ul>
    </nav>
  );
};


export default Nav;