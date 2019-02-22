import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';
import MaxwellsEquations from '../assets/images/MaxwellsEquations.gif';
import LightningFree from '../assets/images/LightningFree.jpg';
import DigitalMultiMeter from '../assets/images/DigitalMultiMeter.jpg';

function Welcome(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  const imgBoxParent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
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

  const imgMakeFit = {
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
    <div>
    <div style={compBox}>
      <p>I'm currently in the process of making a career change into software development.  My professional backround is Electrical Engineering.</p>
      <div style={imgBoxParent}>
        <div style={imgBox}>
          <img src={LightningFree} style={imgMakeFit}/>
        </div>
        <div style={imgBox}>
          <img src={DigitalMultiMeter} style={imgMakeHalfTall}/>
        </div>
      </div>
      <div style={imgBoxParent}>
        <div style={imgBox}>
          <img src={MaxwellsEquations} style={imgMakeFit}/>
        </div>
        <div style={imgBox}>
          <img src={MaxwellsEquations} style={imgMakeFit}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Welcome;
