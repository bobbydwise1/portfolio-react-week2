import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import EulersIdentidy from '../assets/images/EulersIdentidy.png';
import Oscope from '../assets/images/Oscope.jpg';
import Oscope2 from '../assets/images/Oscope2.jpg';
import ZerosOnes from '../assets/images/ZerosOnes.png';

function About(){
  const compBox = {
    border: "solid grey",
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

  const imgMakeCustomTall = {
    maxWidth: "100%",
    maxHeight: "75%",
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
      <div style={leftText}>
        <h1 style={centerText}>About Me...</h1>
        <p>My entire career path up to now has been related to the engineering, repair and documentation of electronics.  I decided to make the switch to software development because, in part, to expand my knowledge in computer science and computer electronics.  Also, the growth opportunities in software development look promising.</p>
      </div>
      <div style={imgBoxParent}>
        <div style={imgBox}>
          <img src={Oscope} style={imgMakeFit}/>
        </div>
        <div style={imgBox}>
          <img src={Oscope2} style={imgMakeCustomTall}/>
        </div>
      </div>
      <div style={imgBoxParent}>
        <div style={imgBox}>
          <img src={EulersIdentidy} style={mainImageStyle}/>
        </div>
        <div style={imgBox}>
          <img src={ZerosOnes} style={imgMakeFit}/>
        </div>
      </div>
    </div>
  );
}




export default About;
