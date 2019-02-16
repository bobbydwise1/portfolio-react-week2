import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Welcome(){
  const compBox = {
    border: "solid black",
    backgroundColor: "light yellow"
  }

  return (
    <div>
      <div class="jumbotron">
        <h1>Hello, my name is Robert Lee.</h1>
      </div>

        <p>"Even the longest journey begins with a single step."</p>

      <p>I'm currently in the process of making a career change into software development.  My professional backround is Electrical Engineering.</p>
    </div>
  );
}

export default Welcome;
