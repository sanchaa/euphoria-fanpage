import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,
Switch, Route} from 'react-router-dom';
//import StudentID from "./components/index";
//import Jules from "./components/jules";
import Landing from "./components/landing";
import MyNav from "./components/nav";
import StudentID from "./components/StudentID";
import  About  from "./components/About";
import Home from "./components/Home";
//import Lexi from "./components/lexi";
//import Nate from "./components/nate";
/*import SignUp from './components/authform';
/*import {SignUp, LogIn} from "./components/auth";

/*const image = (props) => {
  console.log(props);
  return image =  require('./assets/rue.jpg')
}*/

function App() {
  //const = <img src="rue.jpg" alt="idPhoto" />;
  return (
    <Router>
      <div className="App">
        <MyNav />
        <Switch>
          <Route exact path="/"><Landing/>
          <Home/></Route>
          
          <Route exact path="/about"><About/></Route>
          <Route exact path="/studentids"><StudentID/> 
          </Route>
          </Switch>
      </div>
    </Router>
  );
}




export default App;
