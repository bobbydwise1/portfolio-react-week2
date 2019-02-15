import React from 'react';
import { Link } from 'react-router-dom';
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
    <h1 style={compBox}>YOU MADE IT!  Gamepieces</h1>
      <MoveHistory></MoveHistory>
      <Gameboard></Gameboard>
      <CapturedBox></CapturedBox>
      <ChatBox></ChatBox>
  );
}




export default GameRoute;
