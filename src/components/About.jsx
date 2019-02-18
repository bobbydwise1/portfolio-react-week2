import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function About(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }


  return (
    <div>
      <h1>About Me...</h1>
      <p>My entire career path up to now has been related to the engineering, repair and documentation of electronics.  I decided to make the switch to software development because, in part, to expand my knowledge in computer science and computer electronics.  Also, the growth opportunities in software development look promising.</p>

    </div>
  );
}




export default About;
