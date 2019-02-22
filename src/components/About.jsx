import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';

function About(){
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

  return (
    <div style={compBox}>
      <h1>About Me...</h1>
      <p>My entire career path up to now has been related to the engineering, repair and documentation of electronics.  I decided to make the switch to software development because, in part, to expand my knowledge in computer science and computer electronics.  Also, the growth opportunities in software development look promising.</p>
      <div style={imgBoxParent}>
        <div style={imgBox}>
          <img src={MySampleImage} style={mainImageStyle}/>
        </div>
        <div style={imgBox}>
          <img src={MySampleImage} style={mainImageStyle}/>
        </div>
        <div style={imgBox}>
          <img src={MySampleImage} style={mainImageStyle}/>
        </div>
      </div>
    </div>
  );
}




export default About;
