import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Resume from './Resume';

function Exp(){
  const compBox = {
    border: "solid grey",
    color: "green",
    backgroundColor: "black",
    padding: "20px"
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
    textShadow: "2px 2px 8px #448844"
  }

  const leftText = {
    textAlign: "left",
    textShadow: "2px 2px 8px #448844"
  }


  return (
    <div style={compBox}>
        <Resume/>
    </div>
  );
}

export default Exp;
