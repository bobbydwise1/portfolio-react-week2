import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Welcome from './welcome';
import Exp from './Exp';
import About from './About';
import Projects from './Projects';
import Error404 from './Error404';
import MySampleImage from '../assets/images/testimage.png';
import MyAnotherTestImage from '../assets/images/testwide.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const topLineImageStyle = {
      margin: "0 auto 0 auto",
      display: "inline-block"
    }

    const compBox = {
      border: "solid grey",
      color: "green",
      backgroundColor: "black"
    }

    const imgBoxParent = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      backgroundColor: "white"
    }

    const imgBox = {
      display: "grid",
      border: "solid grey",
      backgroundColor: "white"
    }

    const mainImageStyle = {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "100%",
      height: "auto",
      margin: "auto"
    }

    const imgMakeFit = {
      maxWidth: "100%",
      maxHeight: "100%",
      height: "100%",
      margin: "auto",
      padding: "auto"
    }

    const imgLightning = {
      maxWidth: "100%",
      maxHeight: "100%",
      height: "100%",
      margin: "auto",
      padding: "auto"
    }

    const imgMakeHalfTall = {
      maxWidth: "100%",
      maxHeight: "50%",
      margin: "auto",
      padding: "auto"
    }

    const imgMakeSmall = {
      maxWidth: "25%",
      maxHeight: "25%",
      margin: "auto",
      padding: "auto"
    }

    const centerText = {
      textAlign: "center",
      paddingBottom: "10px",
      textShadow: "2px 2px 8px #448844"
    }

    const leftText = {
      textAlign: "left",
      paddingBottom: "10px",
      textShadow: "2px 2px 8px #448844"
    }
    return (
      <div style={compBox}>
        <div style={topLineImageStyle}>
          <img src={MySampleImage} style={imgMakeSmall}/>
          <img src={MySampleImage} style={imgMakeSmall}/>
          <img src={MySampleImage} style={imgMakeSmall}/>
          <img src={MySampleImage} style={imgMakeSmall}/>
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
}
export default App;
