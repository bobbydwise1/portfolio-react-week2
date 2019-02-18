import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  return (
    <div style={compBox}>
      <h2>Robert Lee Portfolio</h2>
      <Link to="/">Home</Link> <Link to="/Exp">Exp</Link> <Link to="/About">About</Link>
    </div>
  );
}

export default Header;
