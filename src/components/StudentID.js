import React from 'react';
import '../App.css';
import {studentData} from './studentData';

const StudentID = () => {
  return (
    <>
    <>
    <h1>Euphoria StudentID Page!</h1>
    <p>Think you know all the characters in Euphoria? Here
      are some ID cards that will help you get to know them more.
    </p>
    </>
    <div className="student-margins">
      {studentData.map((value, key) => {
        return (
          <div key={key}>
            {value.image}
            <h2>Name: {value.name}</h2>
            <p>Age: {value.Age}</p>
            <p>School name: {value.schoolName}</p>
            <p>State: {value.state}</p>
            <p>Thoughts: {value.thoughts}</p>
          </div>
        );
      })}
      </div>
      </>
  )  
  }



  export default StudentID;