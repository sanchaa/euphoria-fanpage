import React from 'react';
import StudentID from "./index";
import '../App.css';

function Lexi ()  {
    const image = <img src="it-lexi.png" alt="rexiii"/>
    return (
    <div className="App">
        <StudentID
        image={image}
        name="Lexi Howard"
        Age="16-17"
        schoolName="East Highland"
        State="Valley Glen, CA"
        Thoughts="You're being f*cking rude."/>
      </div>
    )
  };
export default Lexi;