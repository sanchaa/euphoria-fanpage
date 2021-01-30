import React from 'react';
import Card from "react-bootstrap/Card";


const Home = () => {
    return (
        <div id="Home-page">
        <h1 className="Welcome">Welcome to the Euphoria Fan Page!</h1>
<br></br>
        <p> Euphoria follows a group of high school students as they navigate love and friendships in a world of drugs, sex, trauma, and social media. 
        Actor and singer Zendaya leads an ensemble cast including Hunter Schafer, Jacob Elordi, Algee Smith and Sydney Sweeney.</p>
       <Card.Body>
         <Card.Subtitle>Euphoria</Card.Subtitle>
         <Card.Title>We're so glad you're here!</Card.Title>
         <Card.Img
        variant="top"
        className="rue-jules-skwl"
        src="rue-jules-skwl.jpg" alt="smiles"/>
       </Card.Body>

        </div>
    )
}


export default Home;

