import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function About(){
  const compBox = {
    border: "solid yellow",
    backgroundColor: "light yellow"
  }


  return (
    <div>
      <h1>About Me...</h1>
      <p>My backround is Electrical Engineering.  My entire career path up to now has been related to the engineering, repair and documentation of electronics.  I decided to make the switch to software development because the growth opportunities look very promising.  Software development is also something that was always on the back of my mind, and now I've decided to bring it to the front.</p>

  <p>I would say I'm on a non-traditional route to  software development.  The following poem was something I found when I was younger...</p>
    </div>
  );
}




export default About;
