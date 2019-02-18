import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Exp(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }


  return (
<div>

            <h1>Work Experience & Education</h1>


            <p class="work-job-title">Student, Epicodus</p>
            <ul>
              <li class="work-date">Fall 2018 to Present</li>
              <li class="work-loc">Portland, Oregon, USA</li>
              <li class="work-desc">Currently enrolled as a student at Epicodus, which is a coding bootcamp.  This programming school whose coursework runs 40-hours-per week, for 27 consective weeks.</li>
            </ul>

            <p class="work-job-title">Senior Project Engineer, SIEMENS Industry, Inc.</p>
            <ul>
              <li class="work-date">January 2017-September 2018</li>
              <li class="work-loc">Tualatin, Oregon. USA</li>
              <li class="work-desc">Became the Senior Engineer and knowledge expert for DC Traction Power Substation (TPSS) design and technical documentation.  DC TPSS are the electric power substations that power the overhead wires of streetcars and lightrails, such as the Tri-Met MAX.  Expert level in use of Autodesk AutoCAD, and Autodesk AutoCAD electrical.  Worked on field locations throught the entire US.</li>
            </ul>

            <p class="work-job-title">Project Engineer, SIEMENS Industry, Inc.</p>
            <ul>
              <li class="work-date">June 2011-December 2016</li>
              <li class="work-loc">Tualatin, Oregon. USA</li>
              <li class="work-desc">Worked as junior engineer for DC Traction Power Substation (TPSS) design and technical documentation.  DC TPSS are the electric power substations that power the overhead wires of streetcars and lightrails, such as the Tri-Met MAX.  Worked on field locations throughout the entire US, including Hawaii.</li>
            </ul>

            <p class="work-job-title">Missile Electronics Shop Manager, Oregon National Guard</p>
            <ul>
              <li class="work-date">May 2004-May 2005</li>
              <li class="work-loc">Portland, Oregon. USA</li>
              <li class="work-desc">Held position as the line manager for the missile repair shop for the Oregon National Guard Armory.  Responsible for property and operations of the repair shop.</li>
            </ul>

            <p class="work-job-title">Missile Electronics Technician and Shop Manager, US ARMY</p>
            <ul>
              <li class="work-date">2003-2004</li>
              <li class="work-loc">Watertown, NY. USA</li>
              <li class="work-date">2001-2003</li>
              <li class="work-loc">Kitzengen, Bavaria. Germany</li>
              <li class="work-date">Summer 2000-Fall 2000</li>
              <li class="work-loc">Huntsville, Alabama. USA</li>
              <li class="work-date">Winter 2000-Summer 2000</li>
              <li class="work-loc">Columbus, Georgia. USA</li>
              <li class="work-desc">Worked as a repair shop operations manager for rear support of a US Army missile system, the AVENGER.  Started from the lowest military rank (Private, E-1) as a repair technician, and was promoted rapidly to line manager (Sergent, E-5).  Lived for 2 years overseas.</li>
            </ul>

            <p class="work-job-title">Overseas Health Education Volunteer, Amigos de las Americas</p>
            <ul>
              <li class="work-date">Summer 1998</li>
              <li class="work-loc">San Isidro, Costa Rica</li>
              <li class="work-date">Winter 1998-Fall 1998</li>
              <li class="work-loc">Portland, Oregon. USA</li>
              <li class="work-desc">Was an overseas volunteer for the humanitarian group Amigos de las Americas.  This consisted of an in-country training program and volunteer work, conducted by the Portland Chapter of Amigos de las Americas, and a 5-week out-of-country volunteer work.  The main focus was on promoting community health education.  The specific project I worked on was creating affordable housing for rural teachers in Costa Rica.</li>
            </ul>

        </div>


  );
}




export default Exp;
