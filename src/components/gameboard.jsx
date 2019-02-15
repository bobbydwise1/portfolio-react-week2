import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as math from 'mathjs';
import PropTypes from 'prop-types';

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
  createGrid = () => {
    let grid = []

    for (let y = 0; y < 11; y++) {
      let children = [];
        for (let x = 0; x < 11; x++) {
          children.push(<div class={gridItem}>[{y}"-"{x}]</div>)
        }
        grid.push(<div class={gridRow}></div>)
      }
      return grid;
    }
    render() {
      return(
        <div class="grid-container">
          {this.createGrid()}
        </div>
      )
    }

  return (
    <div style={compBox}>
      <h1>GAMEBOBARD</h1>
      {createGrid}
       </div>
    </div>
  );
}



export default Gameboard;
