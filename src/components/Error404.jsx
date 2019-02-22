import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Error404(){
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
    paddingBottom: "10px",
    textShadow: "2px 2px 8px #448844"
  }

  const leftText = {
    textAlign: "left",
    paddingBottom: "10px",
    textShadow: "2px 2px 8px #448844"
  }

  return (
    <div style={compBox}>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;
