import React from 'react';
import StudentID from './index';
function Jules() {
    const image = <img src="Jules.jpg" alt="idPhoto"/>
    return (
      <div className="App">
        <StudentID
        image={image}
        name="Jules Vaughn"
        Age="17"
        schoolName="East Highland"
        State="Valley Glen, CA"
        Thoughts="Ok, I officially don't feel safe anymore."/>
      </div>
    )
  };
  
  export default Jules;