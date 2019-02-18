import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';

function Welcome(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  const imgBoxParent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
  }

  const imgBox = {
    display: "grid",
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  const mainImageStyle = {
    width: "100%",
    height: "auto",
    margin: "auto"
  }

  return (
    <div style={compBox}>
      <p>I'm currently in the process of making a career change into software development.  My professional backround is Electrical Engineering.</p>
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

export default Welcome;
