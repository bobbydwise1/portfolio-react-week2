import React from 'react';
import Header from './Header';
import Welcome from './welcome';
import Exp from './Exp';
import About from './About';
import Projects from './Projects';
import Error404 from './Error404';
import { Switch, Route, Link } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';
import MyAnotherTestImage from '../assets/images/testwide.png';

function App(){
  const imgBackground = {
    backgroundImage: '../assets/images/testwide.png',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }

  const topLineImageStyle = {
    margin: "0 auto 0 auto",
    display: "inline-block",
  }
  const mainImageStyle = {
    width: "10%",
    height: "auto",
    margin: "auto"
  }
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  return (
    <div style={compBox, imgBackground}>
      <div style={topLineImageStyle}>
        <img src={MySampleImage} style={mainImageStyle}/>
        <img src={MySampleImage} style={mainImageStyle}/>
        <img src={MySampleImage} style={mainImageStyle}/>
        <img src={MySampleImage} style={mainImageStyle}/>
        <img src={MySampleImage} style={mainImageStyle}/>
      </div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/Exp' component={Exp}/>
        <Route path='/About' component={About}/>
        <Route path='/Projects' component={Projects}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
