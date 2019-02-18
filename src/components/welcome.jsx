import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

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

  return (
    <div style={compBox}>
      <p>I'm currently in the process of making a career change into software development.  My professional backround is Electrical Engineering.</p>
      <div style={imgBoxParent}>
        <div style={imgBox}>
          <p>test</p>
        </div>
        <div style={imgBox}>
          <p>test</p>
        </div>
        <div style={imgBox}>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
