import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Link to="/" class="logo"> Orbits </Link>
      <ul>
        <li><Link to="/plans" class="active">Plans</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/auth">Sign In | Sign Up</Link></li>
      </ul>
    </header>
  )
}

export default Navbar;
