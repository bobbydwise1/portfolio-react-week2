import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  const compBox = {
    border: "solid darkgreen",
    color: "green",
    backgroundColor: "black",
    padding: "20px"
  }

  const imgBoxParent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "black"
  }

  const imgBox = {
    display: "grid",
    border: "solid darkgreen",
    backgroundColor: "black"
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
    textShadow: "2px 2px 8px #448844"
  }

  const leftText = {
    textAlign: "left",
    textShadow: "2px 2px 8px #448844"
  }

  return (
    <div style={compBox}>
      <div style={centerText}>
        <h1>Robert Lee Portfolio</h1>
        <p>♚<Link to="/">Welcome</Link>♛<Link to="/Exp">Expierence</Link>♝<Link to="/Projects">Software Projects</Link>♞<Link to="/About">About Me</Link>♜</p>
      </div>
    </div>
  );
}

export default Header;
