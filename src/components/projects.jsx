import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Projects(){
  const compBox = {
    border: "solid darkgreen",
    color: "green",
    backgroundColor: "black",
    padding: "20px"
  }

  const styleBold = {
    fontWeight: "bold",
  }

  const styleItalicBold = {
    fontWeight: "bold",
    fontStyle: "italic"
  }

  const styleItalic = {
    fontStyle: "italic"
  }

  const styleNormal = {
    fontStyle: "normal"
  }

  const centerText = {
    textAlign: "center",
    textShadow: "2px 2px 8px #448844"
  }

  const leftText = {
    textAlign: "left",
    textShadow: "2px 2px 8px #448844",
  }

  const imgBox = {
    display: "grid",
    border: "solid darkgreen",
    backgroundColor: "black"
  }

  return (
    <div style={compBox}>
      <div style={leftText}>
        <h1 style={centerText}>Software Projects</h1>
        <p>My Github profile can be reached at <a href='https://github.com/bobbydwise1'>at this link</a></p>

        <p>Below are listed some software projects I have worked on:</p>

        <div style={compBox}>
          <h2 style={styleBold}>Clone of Classic Tetris, using Angular</h2>
          <ul>
            <li><a href='https://github.com/bobbydwise1/tetris-angular.git'>https://github.com/bobbydwise1/tetris-angular.git</a></li>
            <li style={styleNormal}>A clone attempt of the classic Nintendo Entertainment System of Tetris.  Done using Angular Framework, and the p5 javascript library.  A refactor is in the works.</li>
          </ul>
        </div>

        <div style={compBox}>
          <h2 style={styleBold}>Battleship, using Ruby on Rails</h2>
          <ul>
            <li style={styleNormal}><a href='https://github.com/bobbydwise1/battle-ships.git'>https://github.com/bobbydwise1/battle-ships.git</a></li>
            <li style={styleNormal}>A clone of Battleship.  Done using the Ruby on Rails Framework.</li>
          </ul>
        </div>

        <div style={compBox}>
          <h2 style={styleBold}>Tamagotchi, in Javascript</h2>
          <ul>
            <li style={styleNormal}><a href='https://github.com/bobbydwise1/tamagotchi-js.git'>https://github.com/bobbydwise1/tamagotchi-js.git</a></li>
            <li style={styleNormal}>A software version of Tamagotchi.  Done using Javascript.</li>
          </ul>
        </div>

        <div style={compBox}>
          <h2 style={styleBold}>Pig Dice, in Javascript</h2>
          <ul>
            <li style={styleNormal}><a href='https://github.com/bobbydwise1/pig-dice.git'>https://github.com/bobbydwise1/tamagotchi-js.git</a></li>
            <li style={styleNormal}>A game of Pig Dice created using Javascript.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Projects;
