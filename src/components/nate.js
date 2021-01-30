import React from 'react';
import StudentID from './index';
function Nate() {
    const image = <img src="nate_idphoto2.jpg" alt="idPhoto"/>
    return (
      <div className="App">
        <StudentID
        image={image}
        name="Nate Jacobs"
        Age="17-18"
        schoolName="East Highland"
        State="Valley Glen, CA"
        Thoughts="Yeah, I'd do it for Rue!"/>
      </div>
    )
  };
  
  export default Nate;