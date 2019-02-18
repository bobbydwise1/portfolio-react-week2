import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Exp(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }

  const styleBold = {
    fontWeight: "bold",
    fontSize: "14px"
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


  return (
    <div style={compBox}>
      <h1>Work Experience & Education</h1>


      <p style={styleBold}>Student, Epicodus</p>
      <ul>
        <li style={styleItalicBold}>Fall 2018 to Present</li>
        <li style={styleItalic}>Portland, Oregon, USA</li>
        <li style={styleNormal}>Currently enrolled as a student at Epicodus, which is a coding bootcamp.  This programming school whose coursework runs 40-hours-per week, for 27 consective weeks.</li>
      </ul>

      <p style={styleBold}>Senior Project Engineer, SIEMENS Industry, Inc.</p>
      <ul>
        <li style={styleItalicBold}>January 2017-September 2018</li>
        <li style={styleItalic}>Tualatin, Oregon. USA</li>
        <li style={styleNormal}>Became the Senior Engineer and knowledge expert for DC Traction Power Substation (TPSS) design and technical documentation.  DC TPSS are the electric power substations that power the overhead wires of streetcars and lightrails, such as the Tri-Met MAX.  Expert level in use of Autodesk AutoCAD, and Autodesk AutoCAD electrical.  Worked on field locations throught the entire US.</li>
      </ul>

      <p style={styleBold}>Project Engineer, SIEMENS Industry, Inc.</p>
      <ul>
        <li style={styleItalicBold}>June 2011-December 2016</li>
        <li style={styleItalic}>Tualatin, Oregon. USA</li>
        <li style={styleNormal}>Worked as junior engineer for DC Traction Power Substation (TPSS) design and technical documentation.  DC TPSS are the electric power substations that power the overhead wires of streetcars and lightrails, such as the Tri-Met MAX.  Worked on field locations throughout the entire US, including Hawaii.</li>
      </ul>

      <p style={styleBold}>Missile Electronics Shop Manager, Oregon National Guard</p>
      <ul>
        <li style={styleItalicBold}>May 2004-May 2005</li>
        <li style={styleItalic}>Portland, Oregon. USA</li>
        <li style={styleNormal}>Held position as the line manager for the missile repair shop for the Oregon National Guard Armory.  Responsible for property and operations of the repair shop.</li>
      </ul>

      <p style={styleBold}>Missile Electronics Technician and Shop Manager, US ARMY</p>
      <ul>
        <li style={styleItalicBold}>2003-2004</li>
        <li style={styleItalic}>Watertown, NY. USA</li>
        <li style={styleItalicBold}>2001-2003</li>
        <li style={styleItalic}>Kitzengen, Bavaria. Germany</li>
        <li style={styleItalicBold}>Summer 2000-Fall 2000</li>
        <li style={styleItalic}>Huntsville, Alabama. USA</li>
        <li style={styleItalicBold}>Winter 2000-Summer 2000</li>
        <li style={styleItalic}>Columbus, Georgia. USA</li>
        <li style={styleNormal}>Worked as a repair shop operations manager for rear support of a US Army missile system, the AVENGER.  Started from the lowest military rank (Private, E-1) as a repair technician, and was promoted rapidly to line manager (Sergent, E-5).  Lived for 2 years overseas.</li>
      </ul>

      <p style={styleBold}>Overseas Health Education Volunteer, Amigos de las Americas</p>
      <ul>
        <li style={styleItalicBold}>Summer 1998</li>
        <li style={styleItalic}>San Isidro, Costa Rica</li>
        <li style={styleItalicBold}>Winter 1998-Fall 1998</li>
        <li style={styleItalic}>Portland, Oregon. USA</li>
        <li style={styleNormal}>Was an overseas volunteer for the humanitarian group Amigos de las Americas.  This consisted of an in-country training program and volunteer work, conducted by the Portland Chapter of Amigos de las Americas, and a 5-week out-of-country volunteer work.  The main focus was on promoting community health education.  The specific project I worked on was creating affordable housing for rural teachers in Costa Rica.</li>
      </ul>
    </div>


  );
}

export default Exp;
