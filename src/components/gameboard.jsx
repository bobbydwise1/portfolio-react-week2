import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

function createSquareGrid(n) {
  let answer = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      answer.push("<div class='grid-item'>",y,'-',x,"</div>")
    }
  }
  return answer;
}

function Gameboard(){
  const compBox = {
    border: "solid blue"
  }

  const gameSystem = math.matrix([
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
  ]);



  //React method to render a grid via loop

  return (
    <div style={compBox}>
      <h1>GAMEBOBARD</h1>

        <div class="grid-container">
          {createSquareGrid(3).toString()}
       </div>

    </div>
  );
}



export default Gameboard;
