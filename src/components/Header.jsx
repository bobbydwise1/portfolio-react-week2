import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  const compBox = {
    border: "solid black"
  }

  return (
    <div style={compBox}>
      <h1>Tamerlame 2000 Chess</h1>
      <Link to="/">Home</Link> <Link to="/rules">Rules</Link> <Link to="/pieces">Game Pieces</Link> <Link to="/signin">Sign In</Link> <Link to="/signout">Sign Out</Link>
    </div>
  );
}

export default Header;
