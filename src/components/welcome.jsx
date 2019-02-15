import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(){
  const compBox = {
    border: "solid black"
  }

  return (
    <h1 style={compBox}>YOU MADE IT!  Welcome</h1>
  );
}

export default Welcome;
