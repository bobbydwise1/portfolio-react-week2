import React from 'react';
import Header from './Header';
import MoveHistory from './movehistory';
import Gameboard from './gameboard';
import CapturedBox from './capturedbox';
import ChatBox from './chatbox';
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
  const compBox = {
    border: "solid black"
  }
  return (
    <div style={compBox}>
      <div style={topLineImageStyle}>
        <img src={MySampleImage} style={mainImageStyle}/>
        <img src={MyAnotherTestImage} style={mainImageStyle}/>
      </div>
      <Header/>
        <Route component={MoveHistory} />
        <Route component={Gameboard} />
        <Route component={CapturedBox} />
        <Route component={ChatBox} />

    </div>
  );
}

export default App;
