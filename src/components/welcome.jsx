import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';
import MaxwellsEquations from '../assets/images/MaxwellsEquations.png';
import LightningFree from '../assets/images/LightningFree.jpg';
import DigitalMultiMeter from '../assets/images/DigitalMultiMeter.png';
import OnesZeros from '../assets/images/OnesZeros.png';

function Welcome(){
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
    <div>
    <div style={compBox}>
      <div style={leftText}>
        <p>I'm currently in the process of making a career change into software development.  My professional backround is Electrical Engineering.</p>
        <div style={imgBoxParent}>
          <div style={imgBox}>
            <img src={LightningFree} style={imgLightning} alt='Behold Thor'/>
          </div>
          <div style={imgBox}>
            <img src={DigitalMultiMeter} style={imgMakeHalfTall} alt='The Hammer of EE'/>
          </div>
        </div>
        <div style={imgBoxParent}>
          <div style={imgBox}>
            <img src={MaxwellsEquations} style={imgMakeFit} alt='None of These are Named After Maxwell'/>
          </div>
          <div style={imgBox}>
            <img src={OnesZeros} style={imgMakeFit} alt='The Digital Age 1'/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Welcome;
