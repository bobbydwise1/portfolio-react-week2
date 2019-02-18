import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Hobbies(){
  const compBox = {
    border: "solid grey",
    backgroundColor: "light yellow"
  }


  return (
<div>
    <div class="containter">
      <h1>Some Hobbies of mine...</h1>
      <h2>I'm into road biking.</h2>
        <p>If any of the following has happened to you:</p>
        <ol>
          <li>Got a flat tire from running over broken glass.</li>
          <li>Got a flat tire from running over a street grate.</li>
          <li>Got two flat tires in one trip.</li>
          <li>Walked the bike back home because you ran out of tire repair kits.</li>
          <li>Got two flat tires in one trip.</li>
          <li>Had people scream at you to try to spook you.</li>
          <li>Had cars passing you yell at you to try to spook you.</li>
          <li>Had cars honk at you for hogging the side road.</li>
          <li>Crashed into wall (low speed of course)</li>
          <li>Crashed into a post.</li>
          <li>Crashed into a parked car.</li>
          <li>Crashed because you crossed railroad tracks wrong.</li>
          <li>Crashed because the road was too wet.</li>
          <li>Crashed because you tried to jump a curb with the road bike and not the mountian bike.</li>
          <li>Rode at nighttime without a working head lamp.</li>
          <li>Raised your right hand in victory for overcoming a long and steep hill.</li>
          <li>Got so tired from riding up a long hill that you almost couldn't finish walking the bike to the top.</li>
          <li>Had an object go inside your nose.</li>
          <li>Coasted lazily down a hill at high speed.</li>
          <li>Saw that the downhill was so steep that you walked the bike down.</li>
        </ol>
        <p>Then you know about the excitement I am talking about.</p>
      </div>

      <div class="container">
        <h2>I'm a pretty decent line graphic artist.</h2>
        <p>I've been an able line artist since kindergarten, and have always had strong skills in line graphics, to include 2-D CAD work.</p>
        <p>I'm interested in improving my 2-D and 3-D computer graphics skills, specifically adding professional-level color to black-inked line art scans, and 3-D computer modeling.</p>
        <p>I've worked professionally in AutoCAD Electrical in creating electrical schematics.  There's a lot of electrical engineers out there who can't draw or have no concept of making simple-to-read electrical schematics - I'm not one of those.</p>
        <p>By the way, the picture on the right is a Steadler brand artist quality pencil.  Don't ask me how I know.</p>
        <p>All of this kind of ties into the next topic.....</p>
      </div>

      <div class="container">
        <h2>I'm into some specific genres of computer games.</h2>
        <h3>Warframe</h3>
          <p>This is a science-fiction 3rd-person cooperative shooting game created by Digital Extremes.  The game has a unique art style that I term sci-fi-eastern.  It is weirdly bizzare, different, and presented well at the same time.  The game also explores the implications of near-future concepts such as trans-humanism, mind-uploading, and artificial intelligence.  It's a stew of weirdness, philosophy, and also fun at the same time.</p>
        <h3>Dragon Ball Fighter Z</h3>
          <p>I admit, I don't really play this game too often.  This is a 2-D, 3 vs. 3 fighting game with 3D graphics made by <span class="work-firm">Arc Systems Works</span>.  From a technical and artistic point of view, the graphics in this game are amazing.  The characters are true 3D computer graphics, but graphic shaders were applied to make them look like a 2D anime.  The screenshot shown here is from the actual game running at high frames-per-second.</p>
        <h3>Guild Wars 2</h3>
          <p>This is a fantasy MMORPG created by <span class="work-firm">Arenanet</span>.  It has the usual fantasy-sci-fi elements associated with a lot of titles in this genre, but the artistic design and presentation of this game is really beautiful and eye catching.</p>
      </div>
</div>
  );
}




export default Hobbies;
