import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const { currentUser } = props; // object destructuring
  return(
    <nav>
      <NavLink to='/questions'>Questions Index</NavLink>
      <NavLink to='/questions/new'>New Question?</NavLink>
      { !currentUser && <NavLink to='/sign_in'>Sign In</NavLink> }
      { currentUser && <span>{currentUser.first_name}</span>}
    </nav>
  )
}


export default NavBar