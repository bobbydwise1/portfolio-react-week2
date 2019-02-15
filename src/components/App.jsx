import React from 'react';
import Header from './Header';

import Gameboard from './gameboard';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';
import MyAnotherTestImage from '../assets/images/testwide.png';

function App(){
  const topLineImageStyle = {
    margin: "0 auto 0 auto",
    display: "inline-block",
  }
  const mainImageStyle = {
    width: "25%",
    height: "auto"
  }
  return (
    <div>
      <div style={topLineImageStyle}>
        <img src={MySampleImage} style={mainImageStyle}/>
        <img src={MyAnotherTestImage} style={mainImageStyle}/>
      </div>
      <Header/>
      <Switch>

        <Route component={Gameboard} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
