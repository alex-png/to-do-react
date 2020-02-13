import React from 'react';
import './App.css';
import Container from './Main/Container'
import LogIn from './Main/Login.js'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    loggedIn: false,
    user: {
      id: 0,
      name: null
    },
    error: false
  }

  logInOrSignUp = (data) => {
  console.log(data)
    if (data.name){
      this.setState(prevState => ({
        loggedIn: !prevState.loggedIn,
        user: {
          id: data.id,
          name: data.name
        }
      })
      )
    }else{
      this.setState(prevState => ({error: !prevState.error}))
    }
  }

  render() {
  return (this.state.loggedIn ? <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}> <h1>Welcome, {this.state.user.name}!</h1>  <Container /></div>
    :
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}> 
    <LogIn logInOrSignUp={this.logInOrSignUp} /> 
    {this.state.error?
      <h1 style={{color: "red"}}>Username or password is wrong.</h1> 
      : 
      null} 
    </div>)
  }

}

export default App;
