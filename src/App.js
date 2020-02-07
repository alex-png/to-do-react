import React from 'react';
import './App.css';
import Container from './Main/Container'
import LogIn from './Main/Login.js'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    loggedIn: false
  }



  render() {
    return(this.state.loggedIn ? <Container /> : <LogIn />)
  }
  
}//

export default App;
