import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Welcome(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  return (
    <div style={compBox}>

      <p>I'm currently in the process of making a career change into software development.  My professional backround is Electrical Engineering.</p>

    </div>
  );
}

export default Welcome;
