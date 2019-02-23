import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Resume(){
  const compBox = {
    border: "solid grey",
    color: "green",
    backgroundColor: "black",
    padding: "20px"
  }

  const imgBoxParent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "black"
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

  const centerText = {
    textAlign: "center",
    textShadow: "2px 2px 8px #448844"
  }

  const leftText = {
    textAlign: "left",
    textShadow: "2px 2px 8px #448844"
  }

  const underlineText = {
    textAlign: "center",
    textDecoration: "underline"
  }

  return (
    <div style={compBox}>
      <div style={leftText}>
      <div style={centerText}>
        <h1>Work Expierence</h1>
        <p><a href='https://www.linkedin.com/in/robertlee123456789/'>Link to Linked In</a></p>
        <p><a href='https://github.com/bobbydwise1'>Link to Github</a></p>
      </div>
      <h3 style={underlineText}>Skills:</h3>
      <div style={imgBoxParent}>
        <ul>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>Redux</li>
          <li>Angular</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Babel</li>
          <li>jQuery</li>
          <li>Git</li>
          <li>Github.com</li>
          <li>Node.js Package Manager</li>
          <li>Atom</li>
          <li>Karma</li>
          <li>RegEx</li>
          <li>SQL</li>
          <li>Firebase</li>
          <li>AutoCAD</li>
          <li>AutoCAD Electrical</li>
          <li>SPICE</li>
        </ul>
        <ul>
          <li>SIMATIC PLC</li>
          <li>SIMATIC HMI</li>
          <li>STEP7</li>
          <li>WINCC</li>
          <li>DIGSI</li>
          <li>Senior Project Engineer</li>
          <li>Industrial Control Engineer</li>
          <li>Electrical Engineer</li>
          <li>Debugging</li>
          <li>Technical Writing</li>
          <li>Technical Reading</li>
          <li>Electrical Schematics Creation</li>
          <li>2D Graphics rendering</li>
          <li>AutoCAD Expert</li>
          <li>Test Procedure Creation</li>
          <li>Test Procedure Execution</li>
          <li>Technical Instructor</li>
          <li>Military Veteran</li>
          <li>High Voltage Electrical Safety</li>
          <li>Product Commissioning</li>
          <li>Customer Technical Support</li>
        </ul>
      </div>

      <h3 style={underlineText}>Education and Training:</h3>
      <div style={centerText}>
      <h4>Epicodus</h4>
      <p>Portland, Oregon, Oct 2018-April 2019</p>
      </div>
      <p>Learned computer programming, web development, software testing, software version control using Git, object oriented programming, functional programming, API’s, web app deployment, bug fixing, and programming best practices.</p>

      <div style={centerText}>
      <h4>B.S. Electrical Engineering</h4>
      <p>Portland State University, Portland, Oregon, 2004-2010</p>
      </div>
      <p>Software packages and languages studied: MATLAB, C++, C, Verilog, SPICE, MathCAD, Mathematica, Allen-Bradley PLC.  Courses included Linear Algebra and Thermodynamics.</p>

      <div style={centerText}>
      <h4>Primary Leadership Development Course</h4>
      <p>US Army Non-Commissioned Officer’s Academy, Fort Drum, NY, Aug 2003</p>
      </div>
      <p>First Line Supervisor Leadership school.</p>

      <div style={centerText}>
      <h4>Electrical Technician Training</h4>
      <p>US Army Ordinance School, Huntsville, AL, Apr 2000 - Oct 2000</p>
      </div>
      <p>Electrical repair and maintenance training.</p>

      <h3 style={underlineText}>Career History and Accomplishments:</h3>

      <h4>Senior Project Engineer</h4>
      <p>SIEMENS Industry, Inc., Mobility Division, Turnkey Projects and Electrification Office</p>
      <p>Tualatin, OR</p>
      <p>2011- 2018</p>

      <p>Skills:</p>
      <ul>
        <li>DC Electrical Substation design.</li>
        <li>Meet external customers nationally.</li>
        <li>Review technical specifications.</li>
        <li>Hardware and software integration.</li>
        <li>PLC programming.</li>
        <li>UI/UX design for Industrial Control.</li>
        <li>Engineering Process Improvement</li>
        <li>AutoCAD, AutoCAD Electrical</li>
        <li>Industrial Controls Design</li>
        <li>Industrial Controls Testing</li>
        <li>Project Product Commissioning</li>
        <li>Senior Project Electrical Engineer</li>
      </ul>

    	<p>Project Engineer in Global Fortune 500 company, for Power Substation products for the Light Rail industry.  Promoted to Senior Project Engineer.  Worked in projects all over continental US, and Hawaii.  Review customer specification documents and meet customer requirements. Work with technology team to deliver project’s products.  Use AutoCAD Electrical to create smart electrical industrial control schematics. Write product testing procedures.  Conduct product testing.  Continually conduct process improvement.  Commission engineering products.  Answer engineering, technical, and product questions from the customer.  Some projects included Washington DC Streetcar, San Jose Light Rail, and Cincinnati Streetcar.</p>

      <h4>Team Leader, Oregon National Guard, Portland, OR, 2004- 2005:</h4>
      <ul>
        <li>Shop Operations</li>
        <li>Shop Maintenance</li>
        <li>Supervisor</li>
        <li>Training Instructor</li>
        <li>Secret Security Clearance</li>
        <li>Honorably discharged</li>
      </ul>

      <h4>Shop Manager, US Army, 10th Mountain Division, Fort Drum, NY, 2003 - 2004:</h4>
      <ul>
        <li>Electronics Repair</li>
        <li>Shop Operations</li>
        <li>Shop Maintenance</li>
        <li>Supervisor</li>
        <li>Rapid Promotion</li>
        <li>Training Instructor</li>
        <li>Secret Security Clearance</li>
        <li>Honorably discharged</li>
      </ul>

      <h4>Electronics Technician, US Army, 1st Infantry Division, City of Kitzingen, State of Bavaria, Germany, 2000-2003:</h4>

      <ul>
        <li>Electronics Repair</li>
        <li>Shop Maintenance</li>
        <li>Rapid Promotion</li>
        <li>Secret Security Clearance</li>
      </ul>

      <h4>Humanitarian Volunteer, Amigos de las Americas, Portland, OR, and Central America, 1997 - 1998:</h4>

      <ul>
        <li>Humanitarian Volunteer</li>
        <li>Housing Construction</li>
        <li>Public Health Instructor</li>
      </ul>

      <h3 style={underlineText}>Other Accomplishments:</h3>

      <ul>
        <li>Engineering in Training (E.I.T.) rating, April 2011.</li>
        <li>Can solve 3x3x3 Rubik’s cube and 4x4x4 Rubik’s cube.</li>
      </ul>
    </div>
    </div>
  );
}
export default Resume;
