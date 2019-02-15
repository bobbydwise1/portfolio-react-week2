import React from 'react';
import { Link } from 'react-router-dom';

function CapturedBox(){
  const compBox = {
    border: "solid black"
  }
  return (
    <h1 style={compBox}>YOU MADE IT!  CAPTURED BOX</h1>
  );
}

export default CapturedBox;
