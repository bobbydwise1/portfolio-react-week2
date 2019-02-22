import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  const compBox = {
    border: "solid grey",
    color: "green",
    backgroundColor: "black"
  }

  const imgBoxParent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "white"
  }

  const imgBox = {
    display: "grid",
    border: "solid grey",
    backgroundColor: "white"
  }

  const mainImageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    height: "auto",
    margin: "auto"
  }

  const imgMakeFit = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    margin: "auto",
    padding: "auto"
  }

  const imgLightning = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    margin: "auto",
    padding: "auto"
  }

  const imgMakeHalfTall = {
    maxWidth: "100%",
    maxHeight: "50%",
    margin: "auto",
    padding: "auto"
  }

  const centerText = {
    textAlign: "center",
    paddingBottom: "10px"
  }

  return (
    <div style={compBox}>
      <div style={centerText}>
        <h2>Robert Lee Portfolio</h2>
        <Link to="/">Home</Link> <Link to="/Exp">Exp</Link> <Link to="/About">About</Link> <Link to="/Projects">Projects</Link>
      </div>
    </div>
  );
}

export default Header;
