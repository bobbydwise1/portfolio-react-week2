import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import MoveHistory from './movehistory';
import Gameboard from './gameboard';
import CapturedBox from './capturedbox';
import ChatBox from './chatbox';

function GameRoute(){
  const compBox = {
    border: "solid black"
  }

  return (
    <div>
    <h1 style={compBox}>YOU MADE IT!  Gamepieces</h1>
      <MoveHistory></MoveHistory>
      <Gameboard></Gameboard>
      <CapturedBox></CapturedBox>
      <ChatBox></ChatBox>
    </div>
  );
}




export default GameRoute;
