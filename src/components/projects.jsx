import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Projects(){
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

  const styleBold = {
    fontWeight: "bold",
    fontSize: "14px"
  }

  const styleItalicBold = {
    fontWeight: "bold",
    fontStyle: "italic"
  }

  const styleItalic = {
    fontStyle: "italic"
  }

  const styleNormal = {
    fontStyle: "normal"
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
      <h1>Projects</h1>
      <p>Below are listed some software projects I have worked on:</p>

        <h2 style={styleBold}>Clone of Classic Tetris</h2>
        <ul>
          <li style={styleItalicBold}>Epicodus</li>
          <li style={styleItalic}>Portland, Oregon, USA</li>
          <li style={styleNormal}>A clone attempt of the classic Nintendo Entertainment System of Tetris.  Done using Angular Framework, and the p5 javascript library.</li>
        </ul>

        <h2 style={styleBold}>Battleship</h2>
        <ul>
          <li style={styleItalicBold}>Epicodus</li>
          <li style={styleItalic}>Portland, Oregon, USA</li>
          <li style={styleNormal}>A clone of Battleship.  Done using the Ruby on Rails Framework.</li>
        </ul>
    </div>
  );
}




export default Projects;
